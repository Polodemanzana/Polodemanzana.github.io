// ✏️ Edita fechas y textos. No incluyas datos confidenciales de empresas ni clientes.
export type Kind = 'Formación' | 'Prácticas' | 'Experiencia' | 'Complementaria' | 'Certificación' | 'Objetivo';
export const timeline: { date: string; kind: Kind; title: string; place?: string; text: string; hidden?: boolean }[] = [
  { date: 'Actualidad', kind: 'Formación', title: 'CFGS ASIR', place: 'Administración de Sistemas Informáticos en Red',
    text: 'Segundo curso. Base en sistemas Linux y Windows, redes y servicios.' },
  { date: 'Abr 2025 – Feb 2026', kind: 'Experiencia', title: 'Soporte técnico y gestión de equipos', place: 'Soluciones Informáticas Molins S.L.',
    text: 'Montaje y configuración de equipos, diagnóstico de incidencias e instalación de sistemas operativos y software.' },
  { date: 'Jun 2024 – Abr 2025', kind: 'Experiencia', title: 'Desarrollo front-end básico', place: 'SOTELEC',
    text: 'Colaboración en herramientas internas con pequeñas mejoras en interfaces.' },
  { date: '2024', kind: 'Formación', title: 'CFGM Sistemas Microinformáticos y Redes', text: 'Ciclo formativo de grado medio.' },
  { date: 'Complementaria', kind: 'Complementaria', title: 'Cisco · Hack4You · TryHackMe · DockerLabs · WebOpenBinars',
    text: 'Formación de redes (Cisco), introducción a Linux (Hack4You) y laboratorios prácticos de seguridad.' },
  { date: 'Fecha por definir', kind: 'Prácticas', title: 'Prácticas en empresa del sector IT', place: '[Empresa por confirmar]', hidden: true,
    text: 'PLACEHOLDER: describe tareas generales sin datos internos. Quita hidden: true para mostrarlo.' },
  { date: 'Próximos pasos', kind: 'Objetivo', title: 'Objetivos de aprendizaje',
    text: 'Profundizar en Blue Team, detección de amenazas, hardening y automatización con laboratorios propios.' },
];
