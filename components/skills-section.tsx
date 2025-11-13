"use client"

import { useLanguage } from "./language-provider"

export function SkillsSection() {
  const { t } = useLanguage()

  // Ícones SVG para as categorias
  const CategoryIcons = {
    frontend: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    backend: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    marketing: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3L21 12L3 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tools: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4L16.1 9a1 1 0 0 0 1.4 0L19 7.5a1 1 0 0 0 0-1.4L17.6 4.7a1 1 0 0 0-1.4 0L14.7 6.3Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.5 10c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 21L12 12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }

  // Ícones SVG para as skills individuais
  const SkillIcons = {
    html: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.5 20.5L12 22L18.5 20.5L20 3H4Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    css: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.5 20.5L12 22L18.5 20.5L20 3H4Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8L16 8L15 12L12 13L9 12L8.5 10" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    javascript: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 10V14C14 15.1 13.1 16 12 16S10 15.1 10 14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 14C8 15.1 8.9 16 10 16H14" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    react: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1C15.5 1 22 4.5 22 11C22 17.5 15.5 21 12 21C8.5 21 2 17.5 2 11C2 4.5 8.5 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1C8.5 1 2 6.5 2 11C2 15.5 8.5 21 12 21C15.5 21 22 15.5 22 11C22 6.5 15.5 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    code: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    database: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    server: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    analytics: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9L12 6L16 10L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    design: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.44 11.05L12.25 21.26C11.84 21.67 11.18 21.67 10.77 21.26L2.74 13.23C2.33 12.82 2.33 12.16 2.74 11.75L11.93 2.56" stroke="currentColor" strokeWidth="2"/>
        <path d="M15.5 6.5L17.5 8.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    cloud: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10H19.5C20.88 10 22 11.12 22 12.5S20.88 15 19.5 15H6.5C4.57 15 3 13.43 3 11.5S4.57 8 6.5 8C7.18 8 7.8 8.22 8.29 8.6C9.08 6.02 11.37 4 14.13 4C17.39 4 20 6.61 20 9.87V10H18Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
    )
  }

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: CategoryIcons.frontend,
      skills: [
        { name: "HTML5", icon: SkillIcons.html, description: t("skills.html.description") },
        { name: "CSS3", icon: SkillIcons.css, description: t("skills.css.description") },
        { name: "JavaScript", icon: SkillIcons.javascript, description: t("skills.javascript.description") },
        { name: "React", icon: SkillIcons.react, description: t("skills.react.description") },
        { name: "Next.js", icon: SkillIcons.code, description: t("skills.nextjs.description") },
        { name: "Tailwind CSS", icon: SkillIcons.css, description: t("skills.tailwind.description") },
      ]
    },
    {
      title: t("skills.backend"),
      icon: CategoryIcons.backend,
      skills: [
        { name: "Node.js", icon: SkillIcons.server, description: t("skills.nodejs.description") },
        { name: "Python", icon: SkillIcons.code, description: t("skills.python.description") },
        { name: "Express", icon: SkillIcons.server, description: t("skills.express.description") },
        { name: "MongoDB", icon: SkillIcons.database, description: t("skills.mongodb.description") },
        { name: "PostgreSQL", icon: SkillIcons.database, description: t("skills.postgresql.description") },
      ]
    },
    {
      title: t("skills.marketing"),
      icon: CategoryIcons.marketing,
      skills: [
        { name: "Google Ads", icon: SkillIcons.analytics, description: t("skills.googleads.description") },
        { name: "Facebook Ads", icon: SkillIcons.analytics, description: t("skills.facebookads.description") },
        { name: "SEO", icon: SkillIcons.analytics, description: t("skills.seo.description") },
        { name: "Analytics", icon: SkillIcons.analytics, description: t("skills.analytics.description") },
        { name: "Email Marketing", icon: SkillIcons.analytics, description: t("skills.emailmarketing.description") },
      ]
    },
    {
      title: t("skills.tools"),
      icon: CategoryIcons.tools,
      skills: [
        { name: "Git", icon: SkillIcons.code, description: t("skills.git.description") },
        { name: "Figma", icon: SkillIcons.design, description: t("skills.figma.description") },
        { name: "Photoshop", icon: SkillIcons.design, description: t("skills.photoshop.description") },
        { name: "AWS", icon: SkillIcons.cloud, description: t("skills.aws.description") },
      ]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              style={{
                animationDelay: `${categoryIndex * 150}ms`
              }}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-background/80 hover:border-primary/30 transition-all duration-300"
                      style={{
                        animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center text-muted-foreground group-hover/skill:text-primary group-hover/skill:bg-primary/10 group-hover/skill:border-primary/20 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-lg mb-1 group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground text-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>{t("skills.evolution")}</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
