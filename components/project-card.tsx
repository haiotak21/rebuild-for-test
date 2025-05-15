"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-background">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-muted">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="bg-muted">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
            <span>View Project</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
