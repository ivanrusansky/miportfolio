import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="proyectos" className="section">
          <div className="container">
            <p className="section-label">proyectos</p>
            <Projects />
          </div>
        </section>

        <section id="acerca" className="section">
          <div className="container">
            <p className="section-label">acerca de mí</p>
            <About />
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <p className="section-label">contacto</p>
            <Contact />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
