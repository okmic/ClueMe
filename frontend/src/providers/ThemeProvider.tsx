"use client"
import React, { createContext, useContext, useRef, useEffect, type ReactNode, type CSSProperties } from 'react'

interface ThemeContextType {
  colors: {
    clueDeep: string
    clueVivid: string
    clueGlow: string
    clueTrace: string
    clueGold: string
    white: string
    grayLight: string
    grayMid: string
    grayDark: string
    grayCool: string
    success: string
    partial: string
    error: string
    searching: string
    clueFound: string
    white04: string
    white05: string
    white06: string
    white08: string
    white10: string
    white12: string
    white15: string
    white50: string
    white70: string
    background: string
    surface: string
    surfaceRaised: string
    text: string
    textSecondary: string
    textTertiary: string
    border: string
    borderFocus: string
    glowVivid: string
    glowCyan: string
    glowTrace: string
    glowGold: string
  }
  gradients: {
    primary: string
    clueButton: string
    insight: string
    surfaceGlow: string
    thread: string
    answerHighlight: string
  }
  radius: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    card: string
    full: string
    button: string
    search: string
  }
  font: {
    family: {
      primary: string
      accent: string
      mono: string
    }
    size: {
      h1: string
      h2: string
      h3: string
      body: string
      small: string
      caption: string
      label: string
      code: string
    }
    weight: {
      light: number
      regular: number
      medium: number
      semiBold: number
      bold: number
      extraBold: number
    }
    tracking: {
      heading: string
      body: string
      caption: string
      tech: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
  }
  animation: {
    duration: {
      instant: string
      fast: string
      normal: string
      medium: string
      slow: string
      reveal: string
    }
    easing: {
      bounce: string
      standard: string
      smooth: string
      thread: string
      decelerate: string
    }
  }
  shadows: {
    card: string
    cardHover: string
    buttonVivid: string
    buttonCyan: string
    buttonTrace: string
    success: string
    insight: string
    clueFound: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  grid: {
    container: string
    columns: number
    gutter: string
    padding: string
  }
  backgroundStyle: CSSProperties
}

const themeValues = {
  colors: {
    clueDeep: '#1A1A2E',
    clueVivid: '#6C5CE7',
    clueGlow: '#00D2FF',
    clueTrace: '#FF6B9D',
    clueGold: '#FFC048',
    white: '#F0F0FF',
    grayLight: '#E4E4F0',
    grayMid: '#6E6E8A',
    grayDark: '#3A3A52',
    grayCool: '#8A8AA0',
    success: '#00D2FF',
    partial: '#FFC048',
    error: '#FF4757',
    searching: '#6C5CE7',
    clueFound: '#FF6B9D',
    white04: 'rgba(240, 240, 255, 0.04)',
    white05: 'rgba(240, 240, 255, 0.05)',
    white06: 'rgba(240, 240, 255, 0.06)',
    white08: 'rgba(240, 240, 255, 0.08)',
    white10: 'rgba(240, 240, 255, 0.1)',
    white12: 'rgba(240, 240, 255, 0.12)',
    white15: 'rgba(240, 240, 255, 0.15)',
    white50: 'rgba(240, 240, 255, 0.5)',
    white70: 'rgba(240, 240, 255, 0.7)',
    background: '#1A1A2E',
    surface: 'rgba(240, 240, 255, 0.04)',
    surfaceRaised: 'rgba(240, 240, 255, 0.06)',
    text: '#F0F0FF',
    textSecondary: 'rgba(240, 240, 255, 0.5)',
    textTertiary: '#8A8AA0',
    border: 'rgba(240, 240, 255, 0.08)',
    borderFocus: 'rgba(108, 92, 231, 0.5)',
    glowVivid: 'rgba(108, 92, 231, 0.3)',
    glowCyan: 'rgba(0, 210, 255, 0.25)',
    glowTrace: 'rgba(255, 107, 157, 0.3)',
    glowGold: 'rgba(255, 192, 72, 0.2)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6C5CE7 0%, #00D2FF 100%)',
    clueButton: 'linear-gradient(135deg, #6C5CE7 0%, #FF6B9D 100%)',
    insight: 'linear-gradient(135deg, #00D2FF 0%, #FFC048 100%)',
    surfaceGlow: 'linear-gradient(180deg, rgba(108, 92, 231, 0.08) 0%, rgba(0, 210, 255, 0.02) 100%)',
    thread: 'linear-gradient(90deg, #6C5CE7 0%, #00D2FF 50%, #FF6B9D 100%)',
    answerHighlight: 'linear-gradient(90deg, rgba(0, 210, 255, 0.12) 0%, rgba(0, 210, 255, 0) 100%)',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    card: '14px',
    full: '50%',
    button: '14px',
    search: '16px',
  },
  font: {
    family: {
      primary: 'Inter, system-ui, sans-serif',
      accent: 'Space Grotesk, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    size: {
      h1: '44px',
      h2: '28px',
      h3: '22px',
      body: '16px',
      small: '14px',
      caption: '12px',
      label: '11px',
      code: '14px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    tracking: {
      heading: '-0.02em',
      body: '0',
      caption: '+0.02em',
      tech: '+0.04em',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    base: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '96px',
  },
  animation: {
    duration: {
      instant: '100ms',
      fast: '150ms',
      normal: '250ms',
      medium: '400ms',
      slow: '600ms',
      reveal: '1500ms',
    },
    easing: {
      bounce: 'cubic-bezier(0.34, 1.3, 0.64, 1)',
      standard: 'ease-in-out',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      thread: 'cubic-bezier(0.4, 0, 0.2, 1)',
      decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  shadows: {
    card: '0px 4px 16px rgba(0, 0, 0, 0.4)',
    cardHover: '0px 8px 24px rgba(108, 92, 231, 0.15)',
    buttonVivid: '0px 0px 20px rgba(108, 92, 231, 0.5)',
    buttonCyan: '0px 0px 20px rgba(0, 210, 255, 0.45)',
    buttonTrace: '0px 0px 20px rgba(255, 107, 157, 0.45)',
    success: '0px 0px 16px rgba(0, 210, 255, 0.25)',
    insight: '0px 0px 18px rgba(255, 192, 72, 0.2)',
    clueFound: '0px 0px 24px rgba(255, 107, 157, 0.3)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
  grid: {
    container: '1200px',
    columns: 12,
    gutter: '24px',
    padding: '24px',
  },
} as const

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface Stripe {
  x: number
  width: number
  speed: number
  color: string
  alpha: number
  alphaDir: number
  offset: number
}

interface GlowLine {
  x: number
  width: number
  alpha: number
  alphaDir: number
  color: string
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stripesRef = useRef<Stripe[]>([])
  const glowLinesRef = useRef<GlowLine[]>([])
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      initElements()
    }

    const initElements = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      const stripes: Stripe[] = []
      const stripeCount = 30 + Math.floor(w / 40)
      const colors = [
        'rgba(108, 92, 231, ',
        'rgba(0, 210, 255, ',
        'rgba(255, 107, 157, ',
        'rgba(255, 192, 72, ',
        'rgba(240, 240, 255, ',
      ]

      for (let i = 0; i < stripeCount; i++) {
        stripes.push({
          x: Math.random() * w,
          width: 1 + Math.random() * 3,
          speed: 0.1 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.03 + Math.random() * 0.1,
          alphaDir: Math.random() > 0.5 ? 1 : -1,
          offset: Math.random() * h,
        })
      }
      stripesRef.current = stripes

      const glowLines: GlowLine[] = []
      const glowColors = [
        'rgba(108, 92, 231, ',
        'rgba(0, 210, 255, ',
        'rgba(255, 107, 157, ',
      ]
      const glowCount = 4 + Math.floor(w / 300)

      for (let i = 0; i < glowCount; i++) {
        glowLines.push({
          x: Math.random() * w,
          width: 1 + Math.random() * 2,
          alpha: 0.08 + Math.random() * 0.2,
          alphaDir: Math.random() > 0.5 ? 1 : -1,
          color: glowColors[Math.floor(Math.random() * glowColors.length)],
        })
      }
      glowLinesRef.current = glowLines
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      stripesRef.current.forEach((stripe) => {
        stripe.offset += stripe.speed
        if (stripe.offset > h) stripe.offset = -h

        stripe.alpha += stripe.alphaDir * 0.0003
        if (stripe.alpha >= 0.1) stripe.alphaDir = -1
        if (stripe.alpha <= 0.02) stripe.alphaDir = 1

        const gradient = ctx.createLinearGradient(stripe.x, 0, stripe.x + stripe.width, 0)
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
        gradient.addColorStop(0.2, stripe.color + stripe.alpha + ')')
        gradient.addColorStop(0.5, stripe.color + stripe.alpha + ')')
        gradient.addColorStop(0.8, stripe.color + (stripe.alpha * 0.5) + ')')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(stripe.x - stripe.width, stripe.offset - h, stripe.width * 3, h * 2)
      })

      glowLinesRef.current.forEach((glow) => {
        glow.alpha += glow.alphaDir * 0.0005
        if (glow.alpha >= 0.25) glow.alphaDir = -1
        if (glow.alpha <= 0.06) glow.alphaDir = 1

        const gradient = ctx.createLinearGradient(glow.x, 0, glow.x + glow.width, 0)
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
        gradient.addColorStop(0.4, glow.color + glow.alpha + ')')
        gradient.addColorStop(0.6, glow.color + glow.alpha + ')')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(glow.x - 8, 0, glow.width + 16, h)
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

const FIXED_STYLES = `
  .clueme-root {
    min-height: 100vh;
    background-color: #1A1A2E;
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }
  .clueme-content {
    position: relative;
    z-index: 2;
  }
  .clueme-vignette {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(108, 92, 231, 0.15) 0%, transparent 55%),
      radial-gradient(ellipse at 20% 100%, rgba(0, 210, 255, 0.08) 0%, transparent 45%),
      radial-gradient(ellipse at 80% 100%, rgba(255, 107, 157, 0.08) 0%, transparent 45%),
      linear-gradient(180deg, rgba(26, 26, 46, 0.3) 0%, transparent 25%, transparent 75%, rgba(26, 26, 46, 0.5) 100%);
  }

  @keyframes cluePulse {
    0%, 100% { box-shadow: 0 0 20px rgba(108, 92, 231, 0.3); }
    50% { box-shadow: 0 0 40px rgba(108, 92, 231, 0.6); }
  }
  @keyframes threadDraw {
    0% { width: 0%; opacity: 0; }
    100% { width: 100%; opacity: 1; }
  }
  @keyframes answerReveal {
    0% { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes searchScan {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes keySpin {
    0% { transform: rotate(0deg) scale(0); }
    60% { transform: rotate(360deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }
  @keyframes insightFlash {
    0% { box-shadow: 0 0 0px rgba(255, 192, 72, 0); }
    50% { box-shadow: 0 0 32px rgba(255, 192, 72, 0.4); }
    100% { box-shadow: 0 0 0px rgba(255, 192, 72, 0); }
  }
`

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const backgroundStyle: CSSProperties = {
    backgroundColor: '#1A1A2E',
  }

  const theme: ThemeContextType = {
    ...themeValues,
    backgroundStyle,
  }

  return (
    <ThemeContext.Provider value={theme}>
      <style>{FIXED_STYLES}</style>
      <div className="clueme-root">
        <div className="clueme-vignette" />
        <BackgroundCanvas />
        <div className="clueme-content">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export { themeValues }