"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin: string
    twitter: string
    github: string
    email: string
  }
  skills: string[]
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full flex justify-center space-x-4">
              <Link
                href={member.social.linkedin}
                className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href={member.social.twitter}
                className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <Twitter className="h-4 w-4 text-blue-400" />
              </Link>
              <Link
                href={member.social.github}
                className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <Github className="h-4 w-4 text-gray-800" />
              </Link>
              <Link
                href={`mailto:${member.social.email}`}
                className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <Mail className="h-4 w-4 text-red-500" />
              </Link>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{member.bio}</p>
          <div className="flex flex-wrap gap-1">
            {member.skills.slice(0, 3).map((skill, i) => (
              <Badge key={i} variant="secondary" className="bg-muted text-xs">
                {skill}
              </Badge>
            ))}
            {member.skills.length > 3 && (
              <Badge variant="secondary" className="bg-muted text-xs">
                +{member.skills.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
