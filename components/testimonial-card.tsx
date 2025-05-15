"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  quote: string
  image: string
  rating: number
  index: number
}

export function TestimonialCard({ name, role, company, quote, image, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-4xl text-blue-500">"</div>
          <p className="text-muted-foreground mb-6 flex-grow">{quote}</p>
          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">
                {role}, {company}
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={i < rating ? "text-yellow-500" : "text-gray-300"}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
