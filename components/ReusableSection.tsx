
import { LucideIcon } from 'lucide-react'

interface ReusableSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export function ReusableSection({ title, children, icon: Icon }: ReusableSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-gray-400 h-5 w-5" />}
        <p className="text-sm font-mono text-gray-400">{title}</p>
      </div>
      {children}
    </div>
  )
}
