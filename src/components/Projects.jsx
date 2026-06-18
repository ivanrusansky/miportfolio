const projects = [
  {
    id: 0,
    name: 'Pro-jets',
    img: '/img/pro-jets.png',
    url: 'https://pro-jets-eight.vercel.app/',
    description: 'App web de proyectos colaborativos y personales: planeación, seguimiento de progreso, aprendizaje, organización y resúmenes.',
    tags: ['next.js', 'typescript', 'tailwind-css'],
  },
  {
    id: 1,
    name: 'marco ruffolo',
    img: '/img/marcoruffolocv.png',
    url: 'https://marcoruffoloportfolio.netlify.app/',
    description: 'cv de desarrollador web.',
    tags: ['react', 'html', 'css'],
  },
  {
    id: 2,
    name: 'micaela pucheta',
    img: '/img/micadesktiofinal.png',
    url: 'https://micaelapucheta.netlify.app/',
    description: 'portfolio web de cerámica.',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    name: 'brvtal',
    img: '/img/muestra-brvtal.png',
    url: 'https://brvtal.netlify.app/',
    description: 'estudio de arquitectura dedicado al brutalismo.',
    tags: ['html', 'css'],
  },
  {
    id: 4,
    name: 'galería de arte',
    img: '/img/gallerycaratula2.png',
    url: 'https://gallerydotdot.netlify.app/',
    description: 'espacio de curaduría y eventos creativos.',
    tags: ['html', 'css'],
  },
  {
    id: 5,
    name: 'miguel messina estudio',
    img: '/img/migue03.png',
    url: 'https://miguelmessinaestudio.com/',
    description: 'estudio de arquitectura ubicado en san isidro.',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 6,
    name: 'agrimensura parral',
    img: '/img/parralhor2.png',
    url: 'https://agrimensuraparral.com',
    description: 'servicios de agrimensura y topografía.',
    tags: ['html', 'css'],
  },
  {
    id: 7,
    name: 'taekwondohoy',
    img: '/img/taehor.png',
    url: 'https://taekwondohoy.com.ar',
    description: 'clases de taekwondo en martín coronado.',
    tags: ['html', 'css'],
  },
]

export default function Projects() {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img
            className="project-thumb"
            src={project.img}
            alt={project.name}
          />
          <div className="project-info">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-name"
            >
              {project.name}
            </a>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className={`project-tag project-tag--${tag}`}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <p className="projects-note">+2 proyectos en curso</p>
    </div>
  )
}
