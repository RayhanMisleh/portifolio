"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { X, Sparkles } from 'lucide-react'

interface WelcomeAlertProps {
  onClose: () => void
}

export function WelcomeAlert({ onClose }: WelcomeAlertProps) {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
      isVisible ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className={`bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl transition-all duration-500 ${
        isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
      }`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-3">
            {t("welcome.title")}
          </h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t("welcome.message")}
          </p>
          
          <Button
            onClick={handleClose}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            {t("welcome.close")}
          </Button>
        </div>
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
