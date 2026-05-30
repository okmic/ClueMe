import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface WorkFactState {
  isLoading: boolean
}

const initialState: WorkFactState = {
  isLoading: true
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = dataSlice.actions
export default dataSlice.reducer