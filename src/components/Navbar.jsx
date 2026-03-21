export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container">
        <span className="nav-link" onClick={() => scrollTo('proyectos')}>
          proyectos
        </span>
        <span className="nav-link" onClick={() => scrollTo('acerca')}>
          acerca de mí
        </span>
        <span className="nav-link" onClick={() => scrollTo('contacto')}>
          contacto
        </span>
      </div>
    </nav>
  )
}
