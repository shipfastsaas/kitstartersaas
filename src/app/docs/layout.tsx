import { Sidebar } from '@/components/docs/Sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="pl-64">
        <main className="max-w-4xl mx-auto py-12 px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
