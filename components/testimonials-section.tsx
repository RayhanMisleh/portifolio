"use client"

import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: "Marcelo Bardi",
      role: t("testimonials.marcelo.role"),
      company: "Tech Solutions",
      image: "/images/testimonials/marcelo-bardi.jpg",
      testimonial: t("testimonials.marcelo.text"),
      rating: 5
    },
    {
      id: 2,
      name: "Ana Silva",
      role: t("testimonials.ana.role"),
      company: "Marketing Pro",
      image: "/images/testimonials/ana-silva.jpg",
      testimonial: t("testimonials.ana.text"),
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Santos",
      role: t("testimonials.carlos.role"),
      company: "StartupLab",
      image: "/images/testimonials/carlos-santos.jpg",
      testimonial: t("testimonials.carlos.text"),
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground mb-8 leading-relaxed italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback para quando a imagem não existir
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-bold">
                            ${testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background"></div>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground text-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>{t("testimonials.cta")}</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
