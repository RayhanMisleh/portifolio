"use client"

import { createContext, useContext, useState } from "react"

type Language = "pt" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.skills": "Habilidades", 
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    
    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Rayhan Misleh",
    "hero.title": "Estudante de Programação & Marketing",
    "hero.description": "Criando soluções digitais inovadoras que conectam tecnologia e estratégia de marketing para gerar resultados extraordinários.",
    "hero.cta": "Vamos conversar",
    
    // About
    "about.title": "Sobre Mim",
    "about.subtitle": "Conheça minha jornada",
    "about.badge": "Empreendedor Digital",
    "about.mainTitle": "CEO, Estudante & Visionário Digital",
    "about.intro": "Aos 19 anos, já lidero 3 empresas e curso Negócios Digitais na FAE Business School. Com formação internacional nos EUA e fluência bilíngue, transformo ideias em soluções digitais que geram resultados reais e mensuráveis.",
    "about.expanded1": "Minha formação em comportamento humano pelo Dale Carnegie (turma 512) me dá uma visão única sobre relacionamento e liderança. Combino conhecimento técnico em programação com expertise em marketing estratégico para criar experiências digitais que não apenas funcionam bem tecnicamente, mas também convertem e engajam.",
    "about.expanded2": "Acredito que o futuro dos negócios está na intersecção entre tecnologia e estratégia humana. Por isso, estou constantemente aprendendo e aplicando conhecimentos em projetos reais, sempre com foco em inovação, criatividade e resultados extraordinários.",
    "about.keywords.ceo": "CEO de 3 empresas",
    "about.keywords.student": "estudante internacional", 
    "about.keywords.bilingual": "bilíngue",
    "about.business1.title": "LRM Solutions - CEO & Diretor de Marketing",
    "about.business1.desc": "Software sob medida, apps e automações personalizadas",
    "about.business2.title": "R Misleh - Fundador & CEO", 
    "about.business2.desc": "Agência de geração de leads e marketing digital",
    "about.business3.title": "Consultor de Marketing",
    "about.business3.desc": "Produtiva Modas e Modella Moda Íntima",
    "about.readMore": "Ver mais",
    "about.readLess": "Ver menos",
    
    // About - Education & Achievements
    "about.education.title": "Formação & Conquistas",
    "about.education.dale.title": "Dale Carnegie",
    "about.education.dale.desc": "Turma 512 - Comportamento Humano",
    "about.education.harborside.title": "Harborside Academy",
    "about.education.harborside.desc": "Wisconsin, EUA - 2024",
    "about.education.ccaa.title": "CCAA English",
    "about.education.ccaa.desc": "7 anos - Fluência Bilíngue",
    "about.education.fae.title": "Negócios Digitais",
    "about.education.fae.desc": "FAE Business School - 4º Período",
    
    // Skills
    "skills.title": "Habilidades",
    "skills.subtitle": "Tecnologias que domino",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.marketing": "Marketing",
    "skills.tools": "Ferramentas",
    
    // Skills descriptions
    "skills.html.description": "Estrutura e semântica web",
    "skills.css.description": "Design e estilização",
    "skills.javascript.description": "Interatividade dinâmica",
    "skills.react.description": "Componentes reativos",
    "skills.nextjs.description": "Framework full-stack",
    "skills.tailwind.description": "Utility-first CSS",
    "skills.nodejs.description": "Runtime JavaScript",
    "skills.python.description": "Desenvolvimento versátil",
    "skills.express.description": "Framework web rápido",
    "skills.mongodb.description": "Base de dados NoSQL",
    "skills.postgresql.description": "Base de dados relacional",
    "skills.googleads.description": "Publicidade digital",
    "skills.facebookads.description": "Marketing social",
    "skills.seo.description": "Otimização para motores de busca",
    "skills.analytics.description": "Análise de dados",
    "skills.emailmarketing.description": "Campanhas por email",
    "skills.git.description": "Controle de versão",
    "skills.figma.description": "Design de interfaces",
    "skills.photoshop.description": "Edição de imagens",
    "skills.aws.description": "Infraestrutura na nuvem",
    "skills.evolution": "Sempre em evolução e aprendendo novas tecnologias",
    
    // Testimonials
    "testimonials.title": "Depoimentos",
    "testimonials.subtitle": "O que dizem sobre meu trabalho",
    "testimonials.cta": "Seja o próximo a trabalhar comigo",
    "testimonials.marcelo.role": "Diretor de Tecnologia",
    "testimonials.marcelo.text": "Rayhan demonstrou excelente capacidade técnica e criatividade em nossos projetos. Sua combinação única de programação e marketing trouxe resultados excepcionais para nossa empresa.",
    "testimonials.ana.role": "Gerente de Marketing",
    "testimonials.ana.text": "Trabalhar com Rayhan foi uma experiência incrível. Ele entende tanto de tecnologia quanto de estratégia de marketing, criando soluções que realmente convertem e engajam nosso público.",
    "testimonials.carlos.role": "CEO",
    "testimonials.carlos.text": "Rayhan é um profissional dedicado e inovador. Sua visão estratégica e habilidades técnicas ajudaram nossa startup a crescer exponencialmente. Recomendo fortemente seus serviços.",
    
    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "Alguns dos meus trabalhos",
    "projects.viewCode": "Ver Código",
    "projects.viewLive": "Ver Projeto",
    "projects.ecommerce.title": "E-commerce Landing Page",
    "projects.ecommerce.description": "Landing page responsiva para e-commerce com foco em conversão e UX otimizada.",
    "projects.dashboard.title": "Marketing Dashboard",
    "projects.dashboard.description": "Dashboard para análise de campanhas de marketing digital com métricas em tempo real.",
    
    // Contact
    "contact.title": "Vamos Trabalhar Juntos",
    "contact.subtitle": "Entre em contato comigo",
    "contact.badge": "Vamos Conectar",
    "contact.form.title": "Envie sua Mensagem",
    "contact.form.subtitle": "Transforme sua ideia em realidade",
    "contact.form.name": "Nome Completo",
    "contact.form.namePlaceholder": "Seu nome completo",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "seu@email.com",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.whatsappOptional": "(opcional)",
    "contact.form.whatsappPlaceholder": "+55 (11) 99999-9999",
    "contact.form.message": "Mensagem",
    "contact.form.messagePlaceholder": "Conte-me sobre seu projeto ou ideia...",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.social": "Ou me encontre nas redes:",
    "contact.socialTitle": "Conecte-se Comigo",
    "contact.info.email": "Email",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.location": "Localização",
    "contact.info.locationValue": "Curitiba, PR - Brasil",
    
    // Welcome
    "welcome.title": "Bem-vindo ao meu portfólio!",
    "welcome.message": "Explore meus projetos e descubra como posso ajudar você.",
    "welcome.close": "Começar",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects", 
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Rayhan Misleh",
    "hero.title": "Programming & Marketing Student",
    "hero.description": "Creating innovative digital solutions that connect technology and marketing strategy to generate extraordinary results.",
    "hero.cta": "Let's talk",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "Get to know my journey",
    "about.badge": "Digital Entrepreneur",
    "about.mainTitle": "CEO, Student & Digital Visionary",
    "about.intro": "At 19, I already lead 3 companies and study Digital Business at FAE Business School. With international education in the USA and bilingual fluency, I transform ideas into digital solutions that generate real and measurable results.",
    "about.expanded1": "My training in human behavior through Dale Carnegie (class 512) gives me a unique perspective on relationships and leadership. I combine technical programming knowledge with strategic marketing expertise to create digital experiences that not only work well technically, but also convert and engage.",
    "about.expanded2": "I believe the future of business lies at the intersection of technology and human strategy. That's why I'm constantly learning and applying knowledge in real projects, always focusing on innovation, creativity and extraordinary results.",
    "about.keywords.ceo": "CEO of 3 companies",
    "about.keywords.student": "international student",
    "about.keywords.bilingual": "bilingual",
    "about.business1.title": "LRM Solutions - CEO & Marketing Director",
    "about.business1.desc": "Custom software, apps and personalized automations",
    "about.business2.title": "R Misleh - Founder & CEO",
    "about.business2.desc": "Lead generation agency and digital marketing",
    "about.business3.title": "Marketing Consultant",
    "about.business3.desc": "Produtiva Modas and Modella Moda Íntima",
    "about.readMore": "Read more",
    "about.readLess": "Read less",
    
    // About - Education & Achievements
    "about.education.title": "Education & Achievements",
    "about.education.dale.title": "Dale Carnegie",
    "about.education.dale.desc": "Class 512 - Human Behavior",
    "about.education.harborside.title": "Harborside Academy",
    "about.education.harborside.desc": "Wisconsin, USA - 2024",
    "about.education.ccaa.title": "CCAA English",
    "about.education.ccaa.desc": "7 years - Bilingual Fluency",
    "about.education.fae.title": "Digital Business",
    "about.education.fae.desc": "FAE Business School - 4th Period",
    
    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies I master",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend", 
    "skills.marketing": "Marketing",
    "skills.tools": "Tools",
    
    // Skills descriptions
    "skills.html.description": "Web structure and semantics",
    "skills.css.description": "Design and styling",
    "skills.javascript.description": "Dynamic interactivity",
    "skills.react.description": "Reactive components",
    "skills.nextjs.description": "Full-stack framework",
    "skills.tailwind.description": "Utility-first CSS",
    "skills.nodejs.description": "JavaScript runtime",
    "skills.python.description": "Versatile development",
    "skills.express.description": "Fast web framework",
    "skills.mongodb.description": "NoSQL database",
    "skills.postgresql.description": "Relational database",
    "skills.googleads.description": "Digital advertising",
    "skills.facebookads.description": "Social marketing",
    "skills.seo.description": "Search engine optimization",
    "skills.analytics.description": "Data analysis",
    "skills.emailmarketing.description": "Email campaigns",
    "skills.git.description": "Version control",
    "skills.figma.description": "Interface design",
    "skills.photoshop.description": "Image editing",
    "skills.aws.description": "Cloud infrastructure",
    "skills.evolution": "Always evolving and learning new technologies",
    
    // Testimonials
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What they say about my work",
    "testimonials.cta": "Be the next to work with me",
    "testimonials.marcelo.role": "Technology Director",
    "testimonials.marcelo.text": "Rayhan demonstrated excellent technical skills and creativity in our projects. His unique combination of programming and marketing brought exceptional results to our company.",
    "testimonials.ana.role": "Marketing Manager",
    "testimonials.ana.text": "Working with Rayhan was an incredible experience. He understands both technology and marketing strategy, creating solutions that truly convert and engage our audience.",
    "testimonials.carlos.role": "CEO",
    "testimonials.carlos.text": "Rayhan is a dedicated and innovative professional. His strategic vision and technical skills helped our startup grow exponentially. I highly recommend his services.",
    
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Some of my work",
    "projects.viewCode": "View Code",
    "projects.viewLive": "View Project",
    "projects.ecommerce.title": "E-commerce Landing Page",
    "projects.ecommerce.description": "Responsive e-commerce landing page focused on conversion and optimized UX.",
    "projects.dashboard.title": "Marketing Dashboard",
    "projects.dashboard.description": "Dashboard for digital marketing campaign analysis with real-time metrics.",
    
    // Contact
    "contact.title": "Let's Work Together",
    "contact.subtitle": "Get in touch with me",
    "contact.badge": "Let's Connect",
    "contact.form.title": "Send Your Message",
    "contact.form.subtitle": "Transform your idea into reality",
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.whatsapp": "WhatsApp",
    "contact.form.whatsappOptional": "(optional)",
    "contact.form.whatsappPlaceholder": "+55 (11) 99999-9999",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project or idea...",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.social": "Or find me on social:",
    "contact.socialTitle": "Connect With Me",
    "contact.info.email": "Email",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Curitiba, PR - Brazil",
    
    // Welcome
    "welcome.title": "Welcome to my portfolio!",
    "welcome.message": "Explore my projects and discover how I can help you.",
    "welcome.close": "Get Started",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  
  const t = (key: string): string => {
    return translations[language][key] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
