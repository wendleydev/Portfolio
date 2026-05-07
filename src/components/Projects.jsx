import React from 'react';
import { motion } from 'framer-motion';
import projeto1 from '../assets/projeto1.webp';
import projeto2 from '../assets/projeto2.webp';
import projeto3 from '../assets/projeto3.webp';
import {
  ExternalLink,
  Github,
  BadgeCheck,
  Calendar,
  Code2,
  Users,
} from 'lucide-react';

// Lista de projetos a serem exibidos na seção (ordem: 1 feira, 2 blog, 3 portfólio acadêmico)
const projects = [
  {
    title: 'Catálogo Web (Feira Livre)',
    description:
      'Sistema para gestão de feirantes e produtos em uma feira municipal, com uso em campo e painel administrativo.',
    problem:
      'Organizar dados de feirantes/produtos e simplificar comunicação entre equipe e vendedores, com acesso rápido no celular.',
    responsibilities:
      'Desenvolvimento front-end inteiro da aplicação (telas, fluxos de cadastro/consulta, responsividade). Integração com Firebase (auth e dados) e hospedagem com deploy público.',
    highlights: [
      'Login social com Firebase Authentication (Google)',
      'CRUD com Firestore (feirantes, produtos e categorias)',
      'Painel admin e foco mobile-first para uso durante a feira',
      'Integração com WhatsApp e interface com Tailwind CSS',
    ],
    image: projeto1,
    link: 'https://feiralivre.vercel.app/',
    github: 'https://github.com/wendleydev/catalogo-web',
    techs: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    date: '2024',
    role: 'Front-end · projeto autoral',
  },
  {
    title: 'Extraord1nário — Blog pessoal',
    description:
      'Aplicação SPA em React com foco em experiência visual, navegação fluida e componentização. Utiliza React Router para roteamento dinâmico e Framer Motion para transições animadas entre páginas, com ênfase em UI moderna e responsividade.',
    problem:
      'Disponibilizar leitura confortável e navegação previsível (home, posts, categorias e sobre) em desktop e mobile, mantendo conteúdo estático no front com arquitetura preparada para evolução futura.',
    responsibilities:
      'Atuei como desenvolvedor front-end de ponta a ponta: componentização da interface, rotas e páginas com React Router, microinterações e transições com Framer Motion, estilização responsiva com Tailwind e publicação com deploy contínuo na Vercel ligado ao repositório no GitHub.',
    highlights: [
      'SPA com roteamento dinâmico (home, post, categorias, sobre) e rewrites para produção na Vercel',
      'Transições animadas entre rotas com Framer Motion alinhadas à navegação',
      'Componentização e assets via Vite para build previsível em produção',
      'Deploy automático a partir do GitHub (integração contínua com a Vercel)',
    ],
    image: projeto2,
    link: 'https://extraod1nario-blog.vercel.app/',
    github: 'https://github.com/wendleydev/Extraod1nario-blog',
    techs: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
      'React Icons',
    ],
    date: '2026',
    role: 'Desenvolvedor front-end · SPA autoral',
  },
  {
    title: 'Portfólio acadêmico (HTML, CSS e JavaScript)',
    description:
      'Trabalho acadêmico em tecnologias web puras — estruturação de páginas, estilização e interações sem framework.',
    problem:
      'Demonstrar bases sólidas de marcação e estilo, com comportamento pontual via JavaScript, sem ferramentas de build.',
    responsibilities:
      'HTML semântico, CSS (layout responsivo), JavaScript vanilla para interações; deploy público para entrega.',
    highlights: [
      'Página(s) estruturadas em HTML semântico',
      'CSS responsivo (layout e media queries)',
      'Interações com JavaScript puro',
      'Publicação via Vercel para apresentação e portfólio acadêmico',
    ],
    image: projeto3,
    link: 'https://trabalho-academico-portfolio.vercel.app/',
    github: 'https://github.com/wendleydev/Trabalho-Academico-Portfolio',
    techs: ['HTML', 'CSS', 'JavaScript'],
    date: '2022',
    role: 'Front-end · projeto autoral',
  },
];

// Animações para o container de projetos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animação para cada projeto individual
const projectVariants = {
  hidden: { opacity: 0, y: 30 }, // inicia invisível e um pouco abaixo
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

// Animação para os badges das tecnologias
const techBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Componente principal de projetos
export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Grade de fundo com efeito visual */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      {/* Gradiente de fundo sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />

      {/* Container centralizado */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <BadgeCheck className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Os projetos com maior densidade técnica aqui são o catálogo da feira
            (Firebase) e o blog Extraord1nário (SPA com rotas e deploy contínuo).
            Todos têm demo e código no GitHub. Novos projetos entram conforme eu
            for publicando repos e deploy.
          </p>
        </motion.div>

        {/* Lista de projetos animada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map(project => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group relative flex h-full flex-col"
            >
              {/* Brilho ao redor do card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur transition duration-300 group-hover:opacity-30" />

              {/* Card: capa com título sobre imagem; corpo com descrição (sem repetir) */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-800">
                {/* Capa: escurecimento geral + gradiente para leitura do título */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52">
                  <img
                    src={project.image}
                    alt=""
                    role="presentation"
                    loading="lazy"
                    width={600}
                    height={320}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-black/55"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/80 to-black/45"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-lg font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Conteúdo abaixo da imagem */}
                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    {project.problem && (
                      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Problema:{' '}
                        </span>
                        {project.problem}
                      </p>
                    )}
                    {project.responsibilities && (
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Meu papel:{' '}
                        </span>
                        {project.responsibilities}
                      </p>
                    )}
                    {project.highlights?.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          Decisões e entregas
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                          {project.highlights.map((line, hi) => (
                            <li key={hi}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex min-w-0 items-start gap-1">
                      <Code2 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="leading-snug">{project.role}</span>
                    </div>
                    {project.teamSize != null && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 shrink-0" />
                        <span>{project.teamSize}</span>
                      </div>
                    )}
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {project.techs.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        variants={techBadgeVariants}
                        className="rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-sm font-medium text-purple-800 backdrop-blur-sm dark:from-purple-900/40 dark:to-pink-900/40 dark:text-purple-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-1">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all min-[400px]:flex-initial"
                    >
                      <ExternalLink size={18} />
                      Ver projeto
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all dark:bg-gray-700 min-[400px]:flex-initial"
                    >
                      <Github size={18} />
                      Código
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
