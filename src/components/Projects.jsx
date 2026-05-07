import React from 'react';
import { motion } from 'framer-motion';
import projeto1 from '../assets/projeto1.webp';
import projeto2 from '../assets/projeto2.webp';
import {
  ExternalLink,
  Github,
  BadgeCheck,
  Calendar,
  Code2,
} from 'lucide-react';

// Lista de projetos a serem exibidos na seção
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
    image: projeto2,
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
            Hoje meu projeto com maior densidade técnica é o catálogo da feira —
            todos têm demo e código no GitHub. Novos projetos entram conforme eu
            for publicando repos e deploy.
          </p>
        </motion.div>

        {/* Lista de projetos animada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative"
            >
              {/* Brilho ao redor do card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur transition duration-300 group-hover:opacity-30" />

              {/* Card do projeto */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 overflow-hidden">
                  {/* Imagem do projeto com efeito de zoom no hover */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="600"
                      height="400"
                      className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                    />
                    {/* Gradiente escuro sobre a imagem no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Conteúdo do card */}
                  <div className="p-8 space-y-6">
                    {/* Título e descrição */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      {project.problem && (
                        <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            Problema:{' '}
                          </span>
                          {project.problem}
                        </p>
                      )}
                      {project.responsibilities && (
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
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
                          <ul className="mt-2 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                            {project.highlights.map((line, hi) => (
                              <li key={hi}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Informações adicionais: data, função e tamanho da equipe */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                      {project.teamSize != null && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                      )}
                    </div>

                    {/* Tecnologias utilizadas */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {project.techs.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          variants={techBadgeVariants}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Botões de visualização e código-fonte */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        Ver Projeto
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Github size={18} />
                        Código
                      </motion.a>
                    </div>
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
