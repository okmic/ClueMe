import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DashboardLayout } from "./components/Layout/DashboardLayout"
import { useInitializeApp } from "./hooks/useInitializeApp"
import { Toaster } from "react-hot-toast"
import LoadingSpinner from "./components/UI/LoadingSpinner"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./providers/ThemeProvider"
import { MainPage } from "./pages/Main"

const clueBackgroundStyle = {
  backgroundColor: '#1A1A2E',
  backgroundImage: `
    radial-gradient(circle at center, rgba(240, 240, 255, 0.04) 1.5px, transparent 1.5px),
    radial-gradient(ellipse at 50% 0%, rgba(108, 92, 231, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 0% 100%, rgba(0, 210, 255, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 100%, rgba(255, 107, 157, 0.04) 0%, transparent 50%),
    linear-gradient(180deg, rgba(108, 92, 231, 0.03) 0%, rgba(0, 210, 255, 0.02) 30%, transparent 100%)
  `,
  backgroundSize: '40px 40px, 100% 60%, 60% 50%, 60% 50%, 100% 100%',
  backgroundPosition: '0 0, 50% 0, 0 100%, 100% 100%, 0 0',
  backgroundRepeat: 'repeat, no-repeat, no-repeat, no-repeat, no-repeat'
}

function MainApp() {
  const {
    isLoading,
    initialized,
    error
  } = useInitializeApp()

  useEffect(() => {
    if (error && initialized) {
      console.error("Initialization error:", error)
    }
  }, [error, initialized])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={clueBackgroundStyle}>
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#3A3A52',
            color: '#F0F0FF',
            border: '1px solid rgba(240, 240, 255, 0.08)',
            borderRadius: '14px',
            backdropFilter: 'blur(12px)',
          },
          success: {
            iconTheme: {
              primary: '#00D2FF',
              secondary: '#1A1A2E',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF4757',
              secondary: '#1A1A2E',
            },
          },
        }}
      />

      <div className="min-h-screen" style={clueBackgroundStyle}>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/ClueMe" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  )
}