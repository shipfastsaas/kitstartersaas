export default function DocsPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-outfit font-bold bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-transparent bg-clip-text">
        Documentation
      </h1>
      
      <p className="text-xl text-gray-600 mt-4">
        Welcome to the SaaS template documentation. This guide will help you understand and utilize all the available features.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Overview</h2>
      <p>
        This template includes everything you need to start your SaaS project:
      </p>
      <ul>
        <li>Complete authentication with NextAuth.js</li>
        <li>Stripe integration for payments</li>
        <li>Modern and responsive design with Tailwind CSS</li>
        <li>Optimized API Routes for your needs</li>
        <li>Database integration with Prisma</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Project Structure</h2>
      <pre className="bg-gray-50 p-4 rounded-lg">
        {`├── src/
│   ├── app/           # Next.js pages and routes
│   ├── components/    # Reusable React components
│   ├── lib/          # Utilities and configurations
│   └── styles/       # Global styles
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── package.json      # Project dependencies`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8">Next Steps</h2>
      <p>
        Start with the Installation section to set up your development environment,
        then explore the different features available in the left menu.
      </p>
    </div>
  )
}
