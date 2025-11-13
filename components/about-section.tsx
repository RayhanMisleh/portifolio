"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { ChevronDown, ChevronUp, Code, Sparkles, Award, BookOpen, GraduationCap } from 'lucide-react'
import Image from "next/image"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header with Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20 animate-pulse">
            <Sparkles className="w-4 h-4 animate-spin" />
            {t("about.badge")}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with Interactive Elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="relative">
                  <Image
                    src="/images/Profile 2.png"
                    alt="Rayhan Misleh - CEO & Marketing Strategist"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl object-cover shadow-2xl"
                    priority
                  />
                  {/* Floating Icon - Only Code */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30 animate-bounce">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("about.mainTitle")}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {t("about.intro")}
              </p>

              {/* Keywords without animations */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["about.keywords.ceo", "about.keywords.student", "about.keywords.bilingual"].map((key) => (
                  <span
                    key={key}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>

              {/* Business Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{t("about.business1.title")}</div>
                    <div className="text-sm text-muted-foreground">{t("about.business1.desc")}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{t("about.business2.title")}</div>
                    <div className="text-sm text-muted-foreground">{t("about.business2.desc")}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{t("about.business3.title")}</div>
                    <div className="text-sm text-muted-foreground">{t("about.business3.desc")}</div>
                  </div>
                </div>
              </div>

              {/* Certificates/Achievements Card */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm">🏆</span>
                  </div>
                  {t("about.education.title")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{t("about.education.dale.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("about.education.dale.desc")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">🇺🇸</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{t("about.education.harborside.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("about.education.harborside.desc")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{t("about.education.ccaa.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("about.education.ccaa.desc")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{t("about.education.fae.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("about.education.fae.desc")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.expanded1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.expanded2")}
                  </p>
                </div>
              </div>

              {/* Animated Read More Button */}
              <div className="pt-6">
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group hover:scale-105 transition-all duration-300"
                >
                  {isExpanded ? (
                    <>
                      {t("about.readLess")}
                      <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      {t("about.readMore")}
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
