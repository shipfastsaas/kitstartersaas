import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('La clé secrète Stripe n\'est pas définie')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: Request) {
  const body = await request.text()
  const sig = headers().get('stripe-signature')

  if (!sig || !endpointSecret) {
    return new NextResponse('Webhook Error: No signature', { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret)

    // Gestion des événements de paiement réussi
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      
      // Ici vous pouvez ajouter la logique pour enregistrer l'accès de l'utilisateur
      // Par exemple, stocker dans une base de données que cet utilisateur a accès au template
      console.log('Payment successful for session:', session.id)
    }

    return new NextResponse('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return new NextResponse('Webhook Error', { status: 400 })
  }
}
