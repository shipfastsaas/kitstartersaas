import { IconType } from 'react-icons'

interface SocialButtonProps {
  icon: IconType
  onClick: () => void
  label: string
}

export default function SocialButton({ icon: Icon, onClick, label }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  )
}
