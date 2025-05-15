"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setOpen(false)
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => scrollToSection("services")}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
          <Link
            href="/team"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => setOpen(false)}
          >
            Team
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-foreground/80 transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
          <Button
            className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
