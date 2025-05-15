"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { TeamMemberCard } from "@/components/team-member-card"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function TeamPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const teamMembers = [
    {
      name: "haile takele",
      role: "CEO & Website Developer",
      bio: "etc.....",
      image: "https://images.unsplash.com/photo-1599386918765-917d878d3304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXRoaW9waWFuJTIwcGVyc29ufGVufDB8fDB8fHww",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["Leadership", "Strategy", "Business Development", "Product Vision"],
    },
    {
      name: "haile takele",
      role: "Dev",
      bio: "etc...",
      image: "https://images.unsplash.com/photo-1598122666068-59b41e0a3193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXRoaW9waWFuJTIwcGVyc29ufGVufDB8fDB8fHww",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["System Architecture", "Technical Strategy"],
    },
    {
      name: "haile takele",
      role: "Lead Developer",
      bio: "etc...",
      image: "https://images.unsplash.com/photo-1677827129875-8538994d7381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV0aGlvcGlhbiUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      name: "haile takele",
      role: "UI/UX Designer",
      bio: "etc...",
      image: "https://media.istockphoto.com/id/691743874/photo/african-girl-beuaty.webp?a=1&b=1&s=612x612&w=0&k=20&c=DJjeEuMKCfh3xiy1wbmDh_c58YwmXZy0z5zKwrIpnGQ=",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["UI Design", "UX Research", "Figma", "Adobe Creative Suite", "Prototyping"],
    },
    {
      name: "haile takele",
      role: "Mobile Developer",
      bio: "etc...",
      image: "https://images.unsplash.com/photo-1664622562711-a6f7c3386006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGV0aGlvcGlhbiUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["React Native", "Flutter", "iOS"],
    },
    {
      name: "haile takele",
      role: "Project Manager",
      bio: "etc...",
      image: "https://images.unsplash.com/photo-1633419798503-0b0c628f267c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGV0aGlvcGlhbiUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "haiotak21@gmail.com",
      },
      skills: ["Project Management", "Resource Planning"],
    },
  ]

  const openPositions = [
    {
      title: "Senior Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "UX Researcher",
      department: "Design",
      location: "Ethiopia, Addis ababa",
      type: "Full-time",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border transition-all duration-200">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-28">
              <Image src="/logo.png" alt="IkimTech Logo" fill className="object-contain" priority />
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Team
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
              onClick={() => {
                window.location.href = "/#contact"
              }}
            >
              Get Started
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Team Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-8"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mb-4"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Home
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"
              >
                Meet Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-[700px] text-white/80 md:text-xl"
              >
                Our talented team of professionals is dedicated to delivering exceptional results for our clients.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                Our Experts
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Talent Behind Our Success
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Meet the skilled professionals who make innovation happen every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                  variant="outline"
                >
                  Our Culture
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Makes Us Different</h2>
                <p className="text-muted-foreground md:text-lg">
                  At IkimTech, we believe that our culture is the foundation of our success. We foster an environment of
                  innovation, collaboration, and continuous learning that enables our team to deliver exceptional
                  results for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Innovation-driven approach",
                    "Collaborative environment",
                    "Continuous learning",
                    "Work-life balance",
                    "Diversity and inclusion",
                    "Client-focused mindset",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Team Building"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1691315035852-9acb0bf34197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXIlMjBtYW58ZW58MHx8MHx8fDA%3D"
                        alt="Office Space"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1602687094638-c4972024cfaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwaXRhaW4lMjBtYW58ZW58MHx8MHx8fDA%3D"
                        alt="Collaboration"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Innovation"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                Careers
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                We're always looking for talented individuals to join our team. Check out our current openings below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {openPositions.map((position, index) => (
                <Card key={index} className="overflow-hidden border border-border hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <p className="text-muted-foreground">{position.department}</p>
                      </div>
                      <Badge variant={position.type === "Full-time" ? "default" : "secondary"}>{position.type}</Badge>
                    </div>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {position.location}
                    </div>
                    <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                View All Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Join Our Team?
              </h2>
              <p className="max-w-[800px] text-white/80 md:text-xl">
                We're always looking for talented individuals who are passionate about technology and innovation. If you
                don't see a position that matches your skills, send us your resume anyway!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Send Spontaneous Application
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-28">
                  <Image src="/logo.png" alt="IkimTech Logo" fill className="object-contain" />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">
                Providing innovative technology solutions to help businesses thrive in the digital era.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/80"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/80"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/80"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/80"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} haile. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Made with</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="text-sm text-muted-foreground">by haile tak</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
