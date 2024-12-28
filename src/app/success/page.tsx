import { redirect } from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing Stripe Secret Key')
  }

  const sessionId = searchParams?.session_id

  if (!sessionId) {
    redirect('/')
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)
  const customerEmail = session.customer_details?.email

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Merci pour votre achat !
          </h2>
          {customerEmail && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Un email de confirmation a été envoyé à{' '}
              <span className="font-medium text-purple-600">{customerEmail}</span>
            </p>
          )}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Accéder au Tableau de bord
            </a>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Retour à l&apos;accueil <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
