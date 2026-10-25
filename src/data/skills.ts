// ✏️ level: 'project' = usado en proyectos · 'academic' = visto en estudios · 'learning' = aprendiendo ahora
export type Level = 'project' | 'academic' | 'learning';
export const LEVEL_LABEL: Record<Level, string> = {
  project: 'En proyectos',
  academic: 'Académico',
  learning: 'Aprendiendo',
};
export const skills: { category: string; items: { name: string; level: Level }[] }[] = [
  { category: 'Sistemas operativos', items: [
    { name: 'Linux', level: 'academic' },
    { name: 'Windows Server', level: 'academic' },
  ]},
  { category: 'Redes e infraestructura', items: [
    { name: 'Redes (Cisco, ASIR)', level: 'academic' },
    { name: 'pfSense', level: 'project' },
    { name: 'Virtualización', level: 'academic' },
  ]},
  { category: 'Ciberseguridad defensiva', items: [
    { name: 'Suricata (IDS/IPS)', level: 'project' },
    { name: 'Cowrie (honeypot)', level: 'project' },
    { name: 'Análisis de logs', level: 'project' },
    { name: 'TryHackMe', level: 'learning' },
  ]},
  { category: 'Scripting y automatización', items: [
    { name: 'Python', level: 'project' },
  ]},
  { category: 'Herramientas de laboratorio', items: [
    { name: 'DockerLabs', level: 'learning' },
    { name: 'Docker', level: 'learning' },
  ]},
];
