"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  // Calculate the element's position relative to the viewport
  useEffect(() => {
    if (!ref.current) return
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0)
      setClientHeight(window.innerHeight)
    }
    setValues()
    window.addEventListener("resize", setValues)
    return () => window.removeEventListener("resize", setValues)
  }, [ref])

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
