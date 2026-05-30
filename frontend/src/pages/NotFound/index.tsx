import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const navigate = useNavigate()
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 3000)

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(255, 107, 157, 0.06)' }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(108, 92, 231, 0.06)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(0, 210, 255, 0.04)' }} />
      </div>

      <div className="relative max-w-2xl w-full">
        <div className="text-center mb-10">
          <h1
            className="font-accent font-black mb-4 tracking-tighter"
            style={{
              fontSize: 'clamp(80px, 15vw, 140px)',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #00D2FF 50%, #FF6B9D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: isGlitching ? 0.8 : 1,
              transition: 'opacity 0.15s ease',
            }}
          >
            404
          </h1>

          <div className="space-y-3">
            <h2
              className="font-accent font-bold mb-2"
              style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: '#F0F0FF', letterSpacing: '-0.02em' }}
            >
              Страница не найдена
            </h2>
            <p
              className="font-primary max-w-md mx-auto"
              style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#8A8AA0', lineHeight: 1.6 }}
            >
              Запрашиваемая страница не существует или была перемещена.
              Проверьте правильность URL или вернитесь назад.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200 cursor-pointer"
            style={{
              background: 'rgba(240, 240, 255, 0.04)',
              border: '1px solid rgba(240, 240, 255, 0.08)',
              color: '#8A8AA0',
            }}
          >
            <ArrowLeft size={16} strokeWidth={1.8} className="transition-transform group-hover:-translate-x-1" />
            Вернуться назад
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200 cursor-pointer"
            style={{ background: '#6C5CE7', color: '#F0F0FF' }}
          >
            <Home size={16} strokeWidth={1.8} className="transition-transform group-hover:-translate-y-0.5" />
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}