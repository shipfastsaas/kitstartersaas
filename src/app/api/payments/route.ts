import { NextResponse } from 'next/server'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing Stripe Secret Key')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const paymentIntents = await stripe.paymentIntents.list({
      limit,
      starting_after: page > 1 ? ((page - 1) * limit).toString() : undefined,
    })

    const payments = await Promise.all(
      paymentIntents.data.map(async (payment) => {
        let customerEmail = null
        if (payment.customer && typeof payment.customer === 'string') {
          const customer = await stripe.customers.retrieve(payment.customer)
          customerEmail = (customer as Stripe.Customer).email
        }

        return {
          id: payment.id,
          amount: payment.amount / 100,
          status: payment.status,
          date: new Date(payment.created * 1000).toLocaleDateString('fr-FR'),
          customerEmail,
          plan: payment.metadata?.plan || 'N/A',
        }
      })
    )

    return NextResponse.json({
      payments,
      hasMore: paymentIntents.has_more,
    })
  } catch (error) {
    console.error('Error fetching payments:', error)
    return NextResponse.json(
      { error: 'Error fetching payments' },
      { status: 500 }
    )
  }
}
