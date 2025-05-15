"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface StatsCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export function StatsCounter({ value, label, prefix = "", suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let start = 0
      const duration = 2000 // ms
      const step = Math.ceil(value / (duration / 16)) // 16ms per frame (approx 60fps)

      const counter = setInterval(() => {
        start += step
        if (start > value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(counter)
    }
  }, [isInView, value, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
        {prefix}
        {Math.round(count)}
        {suffix}
      </div>
      <div className="text-muted-foreground mt-2">{label}</div>
    </div>
  )
}
