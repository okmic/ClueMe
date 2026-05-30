import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setLoading } from "../store/slices/data.slice"

interface UseInitializeAppReturn {
  isLoading: boolean
  initialized: boolean
  error: Error | null
}

export const useInitializeApp = (): UseInitializeAppReturn => {
  const dispatch = useDispatch()
  const [state, setState] = useState<UseInitializeAppReturn>({
    isLoading: true,
    initialized: false,
    error: null,
  })

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 3000)

        setState({
          isLoading: false,
          initialized: true,
          error: null,
        })
      } catch (error) {
        dispatch(setLoading(false))
        setState({
          isLoading: false,
          initialized: true,
          error: error as Error,
        })
      }
    }
    initializeApp()
  }, [])

  return state
}