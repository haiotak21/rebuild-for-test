"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  index: number
}

export function ServiceCard({ title, description, icon, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium hover:underline cursor-pointer group">
            <span>Learn more</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
