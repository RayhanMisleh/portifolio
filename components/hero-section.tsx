"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { useLanguage } from "./language-provider"
import { TypewriterText } from "./typewriter-text"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const { t, language } = useLanguage()

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 pt-20">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <rect
                width="35.6"
                height="35.6"
                stroke="hsl(var(--foreground))"
                strokeOpacity="0.08"
                strokeWidth="0.4"
                strokeDasharray="2 2"
                fill="none"
              />
            </pattern>
            <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#heroGradient)" />
        </svg>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full animate-pulse" />
          <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full border-4 border-primary/30 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/imagem_rayhan.jpg"
              alt="Rayhan Misleh"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-muted-foreground text-lg md:text-xl">
            {t("hero.greeting")}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </h1>
        </div>

        {/* Animated Title */}
        <div className="h-16 flex items-center justify-center">
          <TypewriterText 
            key={`typewriter-${language}`}
            text={t("hero.title")}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
          />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary-light/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />
    </section>
  )
}
