import React from 'react'
import { ClueMeIcon } from '../../Logo/Logo'

type SpinnerSize = 'sm' | 'md' | 'lg'

interface ILoadingSpinnerProps {
  size?: SpinnerSize
  text?: string
  fullScreen?: boolean
  className?: string
}

const sizeMap = {
  sm: { logo: 28, dot: 'w-1 h-1', text: 'text-xs', gap: 3 },
  md: { logo: 40, dot: 'w-1.5 h-1.5', text: 'text-sm', gap: 4 },
  lg: { logo: 56, dot: 'w-2 h-2', text: 'text-base', gap: 5 },
}

export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  size = 'md',
  text = 'Загрузка...',
  fullScreen = false,
  className = '',
}) => {
  const dims = sizeMap[size]

  const spinnerContent = (
    <div
      className={`flex flex-col items-center justify-center select-none ${className}`}
      style={{ gap: dims.gap * 4 }}
    >
      <div className="relative" style={{ width: dims.logo, height: dims.logo }}>
        <ClueMeIcon size={dims.logo} />

        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: 'clueSpinnerRing 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            border: '1.5px solid transparent',
            borderTopColor: '#6C5CE7',
            borderRightColor: '#00D2FF',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
          }}
        />
      </div>

      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${dims.dot} rounded-full`}
            style={{
              background:
                i === 0 ? '#6C5CE7' : i === 1 ? '#00D2FF' : '#FF6B9D',
              animation: `clueSpinnerDot 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.18}s`,
              boxShadow:
                i === 0
                  ? '0 0 6px rgba(108, 92, 231, 0.6)'
                  : i === 1
                    ? '0 0 6px rgba(0, 210, 255, 0.6)'
                    : '0 0 6px rgba(255, 107, 157, 0.6)',
            }}
          />
        ))}
      </div>

      {text && (
        <p
          className={`${dims.text} font-mono tracking-tech text-center`}
          style={{ color: '#8A8AA0', letterSpacing: '+0.08em' }}
        >
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: '#1A1A2E' }}
      >
        {spinnerContent}
      </div>
    )
  }

  return spinnerContent
}

const styles = `
  @keyframes clueSpinnerRing {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes clueSpinnerDot {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    50% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }
`

if (typeof document !== 'undefined') {
  const styleId = 'clue-spinner-styles'
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style')
    styleEl.id = styleId
    styleEl.textContent = styles
    document.head.appendChild(styleEl)
  }
}

export default LoadingSpinner