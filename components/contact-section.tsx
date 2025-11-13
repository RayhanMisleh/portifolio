"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "./language-provider"
import { Send, Linkedin, Github, MessageCircle, User, Mail, Phone, MessageSquare, Sparkles, Star, Zap, Heart } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  // Generate floating elements for background animation
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setFloatingElements(elements)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const message = `🚀 *Nova mensagem do portfólio!*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}

💬 *Mensagem:*
${formData.message}

✨ Enviado através do seu portfólio moderno.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5541997660022?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setIsSubmitting(false)
    
    // Reset form after submission
    setFormData({ name: "", email: "", whatsapp: "", message: "" })
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3">
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${3 + element.delay}s`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-medium">{t("contact.badge")}</span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mt-8">
            <Star className="w-6 h-6 text-primary/60 animate-pulse" />
            <Zap className="w-6 h-6 text-primary animate-bounce" />
            <Heart className="w-6 h-6 text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Form */}
          <div className="relative group">
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/60 to-primary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{t("contact.form.title")}</h3>
                </div>
                <p className="text-muted-foreground">{t("contact.form.subtitle")}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <div className="group/input relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-3 transition-colors group-focus-within/input:text-primary">
                    {t("contact.form.name")}
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <Input
                      name="name"
                      placeholder={t("contact.form.namePlaceholder")}
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 rounded-xl text-base"
                    />
                  </div>
                </div>
                
                {/* Email Input */}
                <div className="group/input relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-3 transition-colors group-focus-within/input:text-primary">
                    {t("contact.form.email")}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <Input
                      name="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 rounded-xl text-base"
                    />
                  </div>
                </div>
                
                {/* WhatsApp Input */}
                <div className="group/input relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-3 transition-colors group-focus-within/input:text-primary">
                    {t("contact.form.whatsapp")} <span className="text-muted-foreground text-xs">{t("contact.form.whatsappOptional")}</span>
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'whatsapp' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <Input
                      name="whatsapp"
                      placeholder={t("contact.form.whatsappPlaceholder")}
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('whatsapp')}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 rounded-xl text-base"
                    />
                  </div>
                </div>
                
                {/* Message Textarea */}
                <div className="group/input relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-3 transition-colors group-focus-within/input:text-primary">
                    {t("contact.form.message")}
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <Textarea
                      name="message"
                      placeholder={t("contact.form.messagePlaceholder")}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="pl-12 pt-4 bg-background/50 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/10 transition-all duration-300 rounded-xl text-base resize-none"
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full h-16 bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      {t("contact.form.send")}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

            {/* Enhanced Social & Contact Info */}
            <div className="space-y-8">
              {/* Social Media Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700" />              <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    {t("contact.socialTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.social")}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <a
                    href="https://linkedin.com/in/rayhan-misleh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover/social:opacity-50 transition duration-500" />
                    <div className="relative w-full aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/social:scale-110 group-hover/social:rotate-3 shadow-lg">
                      <Linkedin className="w-6 h-6 text-white transition-transform duration-300 group-hover/social:scale-110" />
                    </div>
                    <p className="text-sm text-center mt-3 text-muted-foreground group-hover/social:text-foreground transition-colors font-medium">
                      LinkedIn
                    </p>
                  </a>
                  
                  <a
                    href="https://github.com/rayhan-misleh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-muted to-muted-foreground rounded-2xl blur opacity-0 group-hover/social:opacity-50 transition duration-500" />
                    <div className="relative w-full aspect-square bg-gradient-to-br from-muted to-muted-foreground rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/social:scale-110 group-hover/social:rotate-3 shadow-lg">
                      <Github className="w-6 h-6 text-white transition-transform duration-300 group-hover/social:scale-110" />
                    </div>
                    <p className="text-sm text-center mt-3 text-muted-foreground group-hover/social:text-foreground transition-colors font-medium">
                      GitHub
                    </p>
                  </a>
                  
                  <a
                    href="https://wa.me/5541997660022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur opacity-0 group-hover/social:opacity-50 transition duration-500" />
                    <div className="relative w-full aspect-square bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover/social:scale-110 group-hover/social:rotate-3 shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover/social:scale-110" />
                    </div>
                    <p className="text-sm text-center mt-3 text-muted-foreground group-hover/social:text-foreground transition-colors font-medium">
                      WhatsApp
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t("contact.info.email")}</h4>
                      <p className="text-muted-foreground text-sm">rayhan.misleh@mail.fae.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t("contact.info.whatsapp")}</h4>
                      <p className="text-muted-foreground text-sm">+55 (41) 99766-0022</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{t("contact.info.location")}</h4>
                      <p className="text-muted-foreground text-sm">{t("contact.info.locationValue")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
