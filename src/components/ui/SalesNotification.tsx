'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import PaymentVerifiedIcon from './icons/PaymentVerifiedIcon'
import StripeIcon from './icons/StripeIcon'

const FAKE_SALES = [
  { location: 'Belgium', time: '47 mins ago', verified: true },
  { location: 'France', time: '2 mins ago', verified: true },
  { location: 'Germany', time: '5 mins ago', verified: true },
  { location: 'Spain', time: '8 mins ago', verified: true },
]

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSale((prev) => (prev + 1) % FAKE_SALES.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white rounded-xl shadow-lg p-3 max-w-[320px] border border-gray-100"
          >
            <div className="flex flex-col space-y-2">
              {/* Main Content */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <PaymentVerifiedIcon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 leading-tight">
                    <span className="font-medium text-gray-900">Someone</span>{' '}
                    in{' '}
                    <span className="text-primary font-medium">
                      {FAKE_SALES[currentSale].location}
                    </span>{' '}
                    purchased
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">
                      {FAKE_SALES[currentSale].time}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="inline-flex items-center text-xs text-emerald-600 font-medium">
                      <CheckIcon className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Stripe Footer */}
              <div className="flex items-center pt-1 border-t border-gray-100">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>Secured by</span>
                  <StripeIcon className="w-10 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
