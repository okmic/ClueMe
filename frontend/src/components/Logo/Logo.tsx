import React from 'react'
import "./styles.css"

interface ClueMeLogoProps {
  size?: number
  showText?: boolean
  textClassName?: string
  className?: string
}

export const ClueMeLogo: React.FC<ClueMeLogoProps> = ({
  size = 48,
  showText = true,
  textClassName = '',
  className = '',
}) => {

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: size, gap: size * 0.36 }}
    >
      <div
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="clueBookLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C5CE7" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
            <linearGradient id="clueBookRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#6C5CE7" />
            </linearGradient>
            <linearGradient id="clueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B9D" />
              <stop offset="100%" stopColor="#FFC048" />
            </linearGradient>
            <filter id="clueGlow">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M24 10L8 6V38L24 42V10Z"
            fill="url(#clueBookLeft)"
            opacity="0.9"
            className="clue-page-left"
          />

          <path
            d="M24 10L40 6V38L24 42V10Z"
            fill="url(#clueBookRight)"
            opacity="0.7"
            className="clue-page-right"
          />

          <line
            x1="24"
            y1="10"
            x2="24"
            y2="42"
            stroke="#F0F0FF"
            strokeWidth="0.8"
            opacity="0.3"
          />

          <rect
            x="14"
            y="20"
            width="8"
            height="2.5"
            rx="1.25"
            fill="url(#clueAccent)"
            filter="url(#clueGlow)"
            className="clue-accent-line"
          />
          <rect
            x="14"
            y="25"
            width="6"
            height="2"
            rx="1"
            fill="#F0F0FF"
            opacity="0.3"
          />
          <rect
            x="30"
            y="18"
            width="6"
            height="2"
            rx="1"
            fill="#F0F0FF"
            opacity="0.15"
          />
          <rect
            x="30"
            y="23"
            width="8"
            height="2"
            rx="1"
            fill="#F0F0FF"
            opacity="0.2"
          />
          <rect
            x="30"
            y="28"
            width="5"
            height="2"
            rx="1"
            fill="#F0F0FF"
            opacity="0.15"
          />
        </svg>
      </div>

      {showText && (
        <div
          className="flex flex-col justify-center"
          style={{
            height: size,
            gap: size * 0.06,
          }}
        >
          <span
            className={`font-accent font-bold leading-none ${textClassName}`}
            style={{
              fontSize: size * 0.44,
              color: '#F0F0FF',
              letterSpacing: '-0.015em',
            }}
          >
            ClueMe
          </span>
          <span
            className="font-mono leading-none"
            style={{
              fontSize: size * 0.18,
              color: '#8A8AA0',
              letterSpacing: '+0.12em',
              textTransform: 'uppercase',
            }}
          >
            AI справочник
          </span>
        </div>
      )}
    </div>
  )
}

export const ClueMeIcon: React.FC<Omit<ClueMeLogoProps, 'showText'>> = (props) => {
  return <ClueMeLogo {...props} showText={false} />
}