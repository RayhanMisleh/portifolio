"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from "./theme-provider"
import { useLanguage } from "./language-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-foreground text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Rayhan Misleh
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Language Switch */}
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium transition-colors ${language === "pt" ? "text-primary" : "text-muted-foreground"}`}>
              PT
            </span>
            <div 
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                language === "pt" ? "bg-primary" : "bg-primary"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
                  language === "pt" ? "translate-x-1" : "translate-x-6"
                }`}
              />
              <span className="sr-only">Toggle language</span>
            </div>
            <span className={`text-xs font-medium transition-colors ${language === "en" ? "text-primary" : "text-muted-foreground"}`}>
              EN
            </span>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-muted-foreground hover:text-foreground text-lg py-2"
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-foreground hover:bg-accent justify-start"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
                  </Button>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Idioma / Language</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium transition-colors ${language === "pt" ? "text-primary" : "text-muted-foreground"}`}>
                        PT
                      </span>
                      <div 
                        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${
                          language === "pt" ? "bg-primary" : "bg-primary"
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition-transform ${
                            language === "pt" ? "translate-x-1" : "translate-x-5"
                          }`}
                        />
                      </div>
                      <span className={`text-xs font-medium transition-colors ${language === "en" ? "text-primary" : "text-muted-foreground"}`}>
                        EN
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
