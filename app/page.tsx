"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { WelcomeAlert } from "@/components/welcome-alert"
import { AnimatedSection } from "@/components/animated-section"

export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background relative overflow-hidden">
          {showWelcome && <WelcomeAlert onClose={() => setShowWelcome(false)} />}
          
          <Header />
          
          <main className="relative z-10">
            <HeroSection />
            
            <AnimatedSection id="about" delay={0.1}>
              <AboutSection />
            </AnimatedSection>
            
            <AnimatedSection id="skills" delay={0.2}>
              <SkillsSection />
            </AnimatedSection>
            
            <AnimatedSection id="projects" delay={0.3}>
              <ProjectsSection />
            </AnimatedSection>
            
            <AnimatedSection id="testimonials" delay={0.4}>
              <TestimonialsSection />
            </AnimatedSection>
            
            <AnimatedSection id="contact" delay={0.5}>
              <ContactSection />
            </AnimatedSection>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
