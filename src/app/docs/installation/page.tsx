export default function InstallationPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-outfit font-bold bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-transparent bg-clip-text">
        Installation
      </h1>

      <h2 className="text-2xl font-semibold mt-8">Prerequisites</h2>
      <ul>
        <li>Node.js 18+ and npm</li>
        <li>GitHub account</li>
        <li>Stripe account (for payments)</li>
        <li>PostgreSQL database</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Installation Steps</h2>
      
      <h3 className="text-xl font-semibold mt-6">1. Clone the repository</h3>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`git clone https://github.com/your-repo/saas-template.git
cd saas-template`}
      </pre>

      <h3 className="text-xl font-semibold mt-6">2. Install dependencies</h3>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`npm install`}
      </pre>

      <h3 className="text-xl font-semibold mt-6">3. Environment variables setup</h3>
      <p>Create a .env.local file in the root directory:</p>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
DATABASE_URL="postgresql://..."`}
      </pre>

      <h3 className="text-xl font-semibold mt-6">4. Initialize the database</h3>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`npx prisma generate
npx prisma db push`}
      </pre>

      <h3 className="text-xl font-semibold mt-6">5. Start the development server</h3>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`npm run dev`}
      </pre>

      <p className="mt-8">
        Your application should now be running at{' '}
        <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code>
      </p>
    </div>
  )
}
