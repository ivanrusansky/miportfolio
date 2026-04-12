const projects = [
  
  {
    id: 0,
    name: 'marco ruffolo',
    img: '/img/marcoruffolocv.png',
    url: 'https://marcoruffoloportfolio.netlify.app/',
    description: 'cv de desarrollador web',
  },
  {
    id: 1,
    name: 'micaela pucheta',
    img: '/img/micadesktiofinal.png',
    url: 'https://micaelapucheta.netlify.app/',
    description: 'portfolio web de cerámica.',
  },
  {
    id: 2,
    name: 'brvtal',
    img: '/img/muestra-brvtal.png',
    url: 'https://brvtal.netlify.app/',
    description: 'estudio de arquitectura dedicado al brutalismo.',
  },
  {
    id: 3,
    name: 'galería de arte',
    img: '/img/gallerycaratula2.png',
    url: 'https://gallerydotdot.netlify.app/',
    description: 'espacio de curaduría y eventos creativos.',
  },
  {
    id: 4,
    name: 'miguel messina estudio',
    img: '/img/migue03.png',
    url: 'https://miguelmessinaestudio.com/',
    description: 'estudio de arquitectura ubicado en san isidro.',
  },
  {
    id: 5,
    name: 'agrimensura parral',
    img: '/img/parralhor2.png',
    url: 'https://agrimensuraparral.com',
    description: 'servicios de agrimensura y topografía.',
  },
  {
    id: 6,
    name: 'taekwondohoy',
    img: '/img/taehor.png',
    url: 'https://taekwondohoy.com.ar',
    description: 'clases de taekwondo en martín coronado.',
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
          </div>
        </div>
      ))}
      <p className="projects-note">+3 proyectos en curso</p>
    </div>
  )
}
