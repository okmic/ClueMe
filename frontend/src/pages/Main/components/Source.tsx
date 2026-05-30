import { ChevronsDown, FileText, Globe } from "lucide-react"
import type { ISourceItem } from "../main.types"

export const SourceIcon: React.FC<{ type: ISourceItem['type'] }> = ({ type }) => {
  const iconProps = { size: 16, strokeWidth: 1.6 }
  switch (type) {
    case 'text': return <FileText {...iconProps} color="#00D2FF" />
    case 'url': return <Globe {...iconProps} color="#6C5CE7" />
    case 'file': return <FileText {...iconProps} color="#FFC048" />
  }
}

export const ScrollHint: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col items-center gap-1.5 py-6" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
    <span className="font-mono text-[#6E6E8A] text-xs tracking-widest uppercase">{text}</span>
    <ChevronsDown size={16} strokeWidth={1.6} color="#6E6E8A" />
  </div>
)
