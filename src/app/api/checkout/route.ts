import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('La clé secrète Stripe n\'est pas définie')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

function getBaseUrl() {
  const headersList = headers()
  const host = headersList.get('host') || 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  return `${protocol}://${host}`
}

const PLANS = {
  standard: {
    price: 169,
    name: 'Standard License',
  },
  premium: {
    price: 199,
    name: 'Premium License',
  },
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { plan, email } = body
    const baseUrl = getBaseUrl()

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      )
    }

    const selectedPlan = PLANS[plan as keyof typeof PLANS]

    // Créer ou récupérer le client
    let customer
    if (email) {
      const existingCustomers = await stripe.customers.list({ email })
      customer = existingCustomers.data[0] || await stripe.customers.create({ email })
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: customer?.id,
      customer_email: !customer ? email : undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: selectedPlan.name,
              description: plan === 'premium' 
                ? 'Complete access with lifetime updates'
                : 'Complete access with 6 months of updates',
            },
            unit_amount: selectedPlan.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}`,
      metadata: {
        plan,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}
