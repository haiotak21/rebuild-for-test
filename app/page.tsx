"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Code, Database, Globe, Layers, Lightbulb, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"
import { Parallax } from "@/components/parallax"
import { HeroParticles } from "@/components/hero-particles"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { StatsCounter } from "@/components/stats-counter"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your specific business needs.",
      icon: <Globe className="h-10 w-10" />,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10" />,
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for your business.",
      icon: <Database className="h-10 w-10" />,
      color: "from-emerald-600 to-teal-500",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement.",
      icon: <Layers className="h-10 w-10" />,
      color: "from-amber-600 to-yellow-500",
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing services to boost your online presence.",
      icon: <Lightbulb className="h-10 w-10" />,
      color: "from-red-600 to-orange-500",
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions designed to solve your unique business challenges.",
      icon: <Code className="h-10 w-10" />,
      color: "from-indigo-600 to-violet-500",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "etc....",
      image: "https://media.istockphoto.com/id/1809645289/photo/sports-car-driving-at-on-a-road-on-high-speed-racing-through-the-colorful-dark-tunnel-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=LxcEDz82h45rRZWmdIUqMSSQGHdoKWbm_NAmvSei_hU=",
      category: "web",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "etc...",
      image: "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fHww",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Express", "Redux"],
    },
    {
      id: 3,
      title: "Admin dahsbord",
      description: "etc....",
      image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww",
      category: "cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      id: 4,
      title: "Financial Dashboard",
      description: "etc....",
      image: "https://plus.unsplash.com/premium_photo-1747135794086-280753a24793?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "web",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "etc....",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow"],
    },
    {
      id: 6,
      title: "Gaming",
      description: "etc....",
      image: "https://plus.unsplash.com/premium_photo-1685231505268-c8f27c4e8870?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb3RiYWxsfGVufDB8fDB8fHww",
      category: "cloud",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    },
  ]

  const testimonials = [
    {
      name: "haile",
      role: "CEO",
      company: "ethio",
      quote:
        "greate.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      rating: 5,
    },
    {
      name: "haile",
      role: "CTO",
      company: "InnovateCorp",
      quote:
        "The mobile app developed by IkimTech exceeded our expectations. Their attention to detail and commitment to quality is unmatched. Our users love the intuitive interface and robust functionality.",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
    },
    {
      name: "haile tak",
      role: "Marketing Director, GrowthHub",
      company: "GrowthHub",
      quote:
        "IkimTech's digital marketing strategies helped us increase our online presence and drive more qualified leads to our business. Their data-driven approach and creative solutions have transformed our marketing efforts.",
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
      rating: 4,
    },
  ]

  const stats = [
    { value: 200, label: "Clients Worldwide", prefix: "+5", suffix: "" },
    { value: 500, label: "Projects Completed", prefix: "+1", suffix: "" },
    { value: 15, label: "Years Experience", prefix: "1", suffix: "+" },
    { value: 98, label: "Client Satisfaction", prefix: "10", suffix: "%" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

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
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
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
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          <HeroParticles />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <Badge
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                  variant="outline"
                >
                  Innovative Technology Solutions
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Transform Your Business With Technology
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We provide cutting-edge technology solutions to help your business grow and succeed in the digital
                  era. Our expert team delivers custom solutions tailored to your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
                    onClick={scrollToContact}
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-foreground/20 hover:bg-foreground/5"
                    onClick={() => {
                      const projectsSection = document.getElementById("projects")
                      if (projectsSection) {
                        window.scrollTo({
                          top: projectsSection.offsetTop - 80,
                          behavior: "smooth",
                        })
                      }
                    }}
                  >
                    View Our Work
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero Image"
                    width={600}
                    height={600}
                    className="relative z-10 rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatsCounter key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Technology Solutions
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                We offer a wide range of services to meet your business needs and help you stay ahead of the
                competition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                Our Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Innovative Projects & Solutions
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Explore our portfolio of successful projects and innovative solutions that have helped our clients
                achieve their goals.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList className="mb-8 bg-background/50 backdrop-blur-sm">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="web">Web Development</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                  <TabsTrigger value="cloud">Logo design</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
                onClick={() => {
                  // This would typically link to a projects page
                  // For now, just scroll back to the top of the projects section
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <Parallax offset={50}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
                    <Image src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-background rounded-lg p-4 shadow-xl border border-border">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">5+</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Years of</p>
                        <p className="text-xl font-bold">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>
              <div className="space-y-6">
                <Badge
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                  variant="outline"
                >
                  About Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  We're Passionate About Technology
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  IkimTech is a leading technology company dedicated to providing innovative solutions for businesses of
                  all sizes. With years of experience and a team of skilled professionals, we deliver high-quality
                  services that help our clients achieve their goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Customer-focused approach",
                    "Cutting-edge technologies",
                    "Experienced team of professionals",
                    "Tailored solutions for your business",
                    "Agile development methodology",
                    "Continuous support and maintenance",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
                    onClick={() => {
                      window.location.href = "/team"
                    }}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                variant="outline"
              >
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Find answers to common questions about our services and processes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer:
                    "some text.",
                },
                {
                  question: "How long does it take to complete a project?",
                  answer:
                    "Project timelines vary depending on the scope and complexity.",
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our team is always available to address any issues or implement updates.",
                },
                {
                  question: "What is your development process?",
                  answer:
                    "We follow an agile development methodology, which involves iterative development, regular client feedback, and continuous improvement. This approach ensures transparency and allows for adjustments throughout the project.",
                },
                {
                  question: "How do you handle project pricing?",
                  answer:
                    "We offer flexible pricing models including fixed-price quotes, hourly rates, and retainer arrangements. After understanding your requirements, we'll recommend the most suitable option for your project.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "Our team is proficient in a wide range of technologies including React, Next.js, Node.js, Python, AWS, Azure, React Native, Flutter, and many more. We select the most appropriate tech stack based on your project requirements.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border border-border bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/80 md:text-xl max-w-[600px]">
                  Let's discuss how our technology solutions can help your business grow and succeed in the digital
                  landscape.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-white/90"
                  onClick={scrollToContact}
                >
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      window.scrollTo({
                        top: servicesSection.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge
                  className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-600/30 hover:to-cyan-500/30 transition-colors"
                  variant="outline"
                >
                  Contact Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch With Us</h2>
                <p className="text-muted-foreground md:text-lg max-w-[600px]">
                  Have a question or want to discuss a project? Reach out to us and our team will get back to you as
                  soon as possible.
                </p>

                <div className="space-y-6 pt-4">
                  <Card className="border border-border bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600 dark:text-blue-400"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Our Location</h3>
                          <p className="text-muted-foreground">Addis ababa/ Ethiopia</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600 dark:text-blue-400"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Email Us</h3>
                          <p className="text-muted-foreground">haiotak21@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600 dark:text-blue-400"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Call Us</h3>
                          <p className="text-muted-foreground">0996916442</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <ContactForm />
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
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
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
