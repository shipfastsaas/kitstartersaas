'use client'

import { useState, useEffect } from 'react'
import * as Icons from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total Sales',
    value: '$0',
    icon: Icons.CurrencyDollarIcon,
    change: '+0%',
    changeType: 'positive',
  },
  {
    name: 'Active Users',
    value: '0',
    icon: Icons.UsersIcon,
    change: '+0%',
    changeType: 'positive',
  },
  {
    name: 'Blog Posts',
    value: '0',
    icon: Icons.DocumentTextIcon,
    change: '+0%',
    changeType: 'positive',
  },
]

interface Sale {
  id: string
  date: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  customer: {
    name: string
    email: string
  }
}

export default function DashboardPage() {
  const [recentSales, setRecentSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch real data
    setLoading(false)
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm"
          >
            <dt>
              <div className="absolute rounded-md bg-gradient-to-r from-[#7C3AED] to-[#DB2777] p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.changeType === 'positive' ? (
                  <Icons.ArrowUpIcon className="h-4 w-4 flex-shrink-0 self-center text-green-500" />
                ) : (
                  <Icons.ArrowDownIcon className="h-4 w-4 flex-shrink-0 self-center text-red-500" />
                )}
                <span className="ml-1">{stat.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Recent Sales */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Sales</h2>
        <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="p-6">
            {loading ? (
              <div>Loading...</div>
            ) : recentSales.length > 0 ? (
              <div className="flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentSales.map((sale) => (
                    <li key={sale.id} className="py-5">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {sale.customer.name}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            {sale.customer.email}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm font-medium text-gray-900">
                            ${sale.amount}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(sale.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              sale.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : sale.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {sale.status.charAt(0).toUpperCase() + sale.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icons.ReceiptPercentIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No sales</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating your first product.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
