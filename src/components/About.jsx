const tools = [
  { label: '#html',         cls: 'html' },
  { label: '#css',          cls: 'css' },
  { label: '#javascript',   cls: 'javascript' },
  { label: '#typescript',   cls: 'typescript' },
  { label: '#react.js',     cls: 'react' },
  { label: '#next.js',      cls: 'next.js' },
  { label: '#tailwind-css', cls: 'tailwind-css' },
  { label: '#sass',         cls: 'sass' },
  { label: '#bootstrap',    cls: 'bootstrap' },
  { label: '#git',          cls: 'git' },
  { label: '#github',       cls: 'github' },
  { label: '#hostinger',    cls: 'hostinger' },
  { label: '#netlify',      cls: 'netlify' },
  { label: '#vercel',       cls: 'vercel' },
  { label: '#ai',           cls: 'ai' },
]

export default function About() {
  return (
    <div className="about-text">
      <p>
        soy iván rusansky, desarrollador front-end especializado en la creación de sitios web
        modernos, funcionales y adaptados a las necesidades de cada cliente. inicié mi formación
        en 2022 a través de una diplomatura integral en desarrollo web, javascript y react js,
        lo que me permitió adquirir una sólida base técnica y una visión estratégica del
        desarrollo digital. en 2026 realicé el curso oficial de vercel, enfocado en los conceptos
        y uso de next.js para el desarrollo de aplicaciones web modernas.
      </p>
      <p>
        mi experiencia abarca proyectos de diversa índole: e-commerce, páginas informativas,
        sitios empresariales y soluciones para emprendimientos. me mantengo en constante
        actualización profesional, investigando nuevas herramientas para optimizar la calidad y
        eficiencia de mi trabajo.
      </p>
      <div className="about-tools">
        <span className="about-tools-label">principales herramientas:</span>
        <div className="project-tags">
          {tools.map(t => (
            <span key={t.cls} className={`project-tag project-tag--${t.cls}`}>{t.label}</span>
          ))}
        </div>
      </div>
      <p>
        cuento con conocimientos en next.js, typescript y tailwind css, que me permiten construir
        apps web completas, con tipado estático, estilos utilitarios y renderizado optimizado.
        para el despliegue utilizo vercel, aprovechando su integración nativa con next.js para
        entregar proyectos rápidos, escalables y listos para producción.
      </p>
    </div>
  )
}
