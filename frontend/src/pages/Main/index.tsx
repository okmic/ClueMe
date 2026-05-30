import React from 'react'
import "./main.styles.css"
import { SlideSplash } from './components/SlideSplash'
import { SlideAdd } from './components/SlideAdd'
import { SlideList } from './components/SlideList'
import { SlideModel } from './components/SlideModel'
import { SlideAsk } from './components/SlideAsk'
import { SlideDashboard } from './components/SlideDashboard'

export const MainPage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <SlideSplash />
      <SlideAdd />
      <SlideList />
      <SlideModel />
      <SlideAsk />
      <SlideDashboard />
    </div>
  )
}
