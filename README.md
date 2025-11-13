# Portfólio de Rayhan Misleh

## Descrição

Este é o portfólio pessoal de Rayhan Misleh, um estudante de Negócios Digitais na FAE Business School e empreendedor em várias microempresas. O site apresenta suas habilidades, projetos, experiências e informações de contato de forma interativa e moderna.

O portfólio foi desenvolvido utilizando Next.js, TypeScript e Tailwind CSS, com animações proporcionadas pelo Framer Motion. Ele inclui seções como Hero, Sobre Mim, Habilidades, Projetos, Depoimentos e Contato.

## Tecnologias Utilizadas

- **Next.js 15.2.4**: Framework React para produção, com suporte a SSR e SSG.
- **React 19**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript 5**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS 3.4.17**: Framework CSS utilitário para estilização rápida e responsiva.
- **Framer Motion 12.23.12**: Biblioteca para animações em React.
- **Radix UI**: Componentes primitivos para UI acessível (@radix-ui/react-dialog, @radix-ui/react-slot).
- **Lucide React 0.454.0**: Ícones SVG para React.
- **Next Themes 0.4.4**: Gerenciamento de temas (claro/escuro).
- **Class Variance Authority 0.7.1**: Utilitário para variantes de classes CSS.
- **Clsx 2.1.1**: Utilitário para construção de classes CSS condicionais.
- **Tailwind Merge 2.5.5**: Mescla classes Tailwind sem conflitos.
- **Tailwindcss Animate 1.0.7**: Animações CSS para Tailwind.

## Funcionalidades

- **Design Responsivo**: Otimizado para dispositivos móveis, tablets e desktops.
- **Tema Escuro/Claro**: Alternância entre modos de visualização.
- **Animações Suaves**: Transições e efeitos visuais com Framer Motion.
- **Seções Interativas**:
  - **Hero**: Apresentação inicial com texto animado.
  - **Sobre Mim**: Informações pessoais e profissionais.
  - **Habilidades**: Lista de competências técnicas e interpessoais.
  - **Projetos**: Showcase de projetos desenvolvidos.
  - **Depoimentos**: Feedback de clientes ou colaboradores.
  - **Contato**: Formulário e links para redes sociais.
- **Internacionalização**: Suporte para múltiplos idiomas (atualmente em português e inglês).
- **Acessibilidade**: Componentes acessíveis com Radix UI.

## Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm

### Passos para Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/RayhanMisleh/portifolio.git
   cd portifolio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse o site**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Uso

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Constrói a aplicação para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o linter para verificar o código.

### Estrutura do Projeto

```
portifolio/
├── app/                          # Diretório da aplicação Next.js
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página inicial
├── components/                   # Componentes React
│   ├── ui/                      # Componentes de UI reutilizáveis
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── sheet.tsx
│   │   ├── textarea.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── about-section.tsx        # Seção Sobre Mim
│   ├── animated-section.tsx     # Componente para animações de seção
│   ├── contact-section.tsx      # Seção de Contato
│   ├── header.tsx               # Cabeçalho do site
│   ├── hero-section.tsx         # Seção Hero
│   ├── language-provider.tsx    # Provedor de idioma
│   ├── projects-section.tsx     # Seção de Projetos
│   ├── skills-section.tsx       # Seção de Habilidades
│   ├── testimonials-section.tsx # Seção de Depoimentos
│   ├── theme-provider.tsx       # Provedor de tema
│   ├── typewriter-text.tsx      # Texto com efeito máquina de escrever
│   └── welcome-alert.tsx        # Alerta de boas-vindas
├── lib/                         # Utilitários
│   └── utils.ts                 # Funções utilitárias
├── public/                      # Arquivos estáticos
│   └── images/
│       └── testimonials/        # Imagens de depoimentos
├── components.json              # Configuração de componentes
├── favicon-generator.html       # Gerador de favicon
├── next-env.d.ts                # Tipos Next.js
├── next.config.mjs              # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── sobremim.md                  # Conteúdo sobre mim
├── tailwind.config.ts           # Configuração Tailwind CSS
└── tsconfig.json                # Configuração TypeScript
```

## Sobre o Desenvolvedor

Olá! Meu nome é Rayhan Misleh. Atualmente, curso o 4º período de Negócios Digitais na FAE Business School, onde desenvolvo habilidades em gestão, marketing e transformação digital. Sou sócio de três microempresas e atuo em posições de liderança estratégica:

- **CEO e Diretor de Marketing da LRM Solutions**: empresa de software sob medida que cria aplicativos, sites e automações personalizadas para negócios.
- **Fundador e CEO da R Misleh**: agência de geração de leads focada em soluções de marketing digital de alta conversão.
- **Consultor de Marketing para as marcas Produtiva Modas e Modella Moda Íntima**: ajudando a posicionar seus produtos e otimizar campanhas online.

Tenho formação em comportamento humano pelo curso Dale Carnegie (turma 512), o que me dá uma visão profunda sobre relacionamento, comunicação e liderança.

Minha trajetória acadêmica internacional inclui o ensino médio completo na Harborside Academy, em Kenosha, Wisconsin (EUA), onde me formei em 2024. Sou fluente em inglês — estudei por 7 anos no CCAA — e trago essa bagagem bilíngue para projetos globais e colaborações internacionais.

Combino conhecimento técnico em programação e ferramentas digitais com expertise em marketing estratégico. Minha paixão é transformar ideias em soluções digitais que gerem resultados reais e mensuráveis, sempre com foco em inovação, criatividade e atendimento humanizado.

## Contribuição

Contribuições são bem-vindas! Se você encontrar bugs ou quiser sugerir melhorias:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é privado e não possui licença pública. Todos os direitos reservados a Rayhan Misleh.

## Contato

- **Email**: [seu-email@exemplo.com] (substitua pelo seu email)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/rayhanmisleh)
- **GitHub**: [RayhanMisleh](https://github.com/RayhanMisleh)
- **Site**: [rayhanmisleh.com](https://rayhanmisleh.com)

---

Desenvolvido com ❤️ por Rayhan Misleh.