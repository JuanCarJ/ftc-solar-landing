import { useState, useRef, useCallback, useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

const WHATSAPP_NUMBER = '573023754780'
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me interesa información sobre paneles solares.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const PROJECTS = [
  {
    image: '/foto1.jpg',
    title: 'Proyecto 1',
    location: 'Marinilla, Antioquia',
    capacity: '8.5 kWp',
    type: 'Residencial',
  },
  {
    image: '/foto2.jpg',
    title: 'Proyecto 2',
    location: 'Marinilla, Antioquia',
    capacity: '45 kWp',
    type: 'Comercial',
  },
  {
    image: '/foto3.jpg',
    title: 'Proyecto 3',
    location: 'Marinilla, Antioquia',
    capacity: '22 kWp',
    type: 'Residencial',
  },
  {
    image: '/foto4.jpg',
    title: 'Proyecto 4',
    location: 'Marinilla, Antioquia',
    capacity: '120 kWp',
    type: 'Comercial',
  },
  {
    image: '/foto5.jpg',
    title: 'Proyecto 5',
    location: 'Marinilla, Antioquia',
    capacity: '35 kWp',
    type: 'Residencial',
  },
]

function App() {
  const pageRef = useScrollReveal(0.12)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollCarousel = useCallback((direction) => {
    const track = carouselRef.current
    if (!track) return
    const cardWidth = track.querySelector('.carousel-card')?.offsetWidth || 300
    track.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' })
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div ref={pageRef} className="overflow-x-hidden">
      {/* ════════════════════════════════════════════
          NAVIGATION — Transparent → solid on scroll
      ════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Editorial gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-solar via-solar/60 to-transparent" />

        <div
          className={`flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-500 ease-out ${
            scrolled
              ? 'py-2.5 bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20'
              : 'py-4 bg-gradient-to-b from-navy/50 to-transparent'
          }`}
        >
          {/* Logo lockup */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <img
              src="/logo.png.jpeg"
              alt="FTC Solar"
              className={`rounded-full object-cover ring-2 ring-solar/30 transition-all duration-500 ${
                scrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}
            />
            <div className="flex flex-col">
              <span className={`font-display text-ice leading-none tracking-wide transition-all duration-500 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                FTC Solar
              </span>
              <span className={`text-[10px] text-ice/40 tracking-[0.2em] uppercase mt-0.5 transition-all duration-500 ${
                scrolled ? 'opacity-0 h-0' : 'opacity-100'
              }`}>
                Marinilla, Antioquia
              </span>
            </div>
          </a>

          {/* Desktop nav links + social */}
          <div className="hidden md:flex items-center">
            <a href="#servicios" className="text-[13px] text-ice/75 hover:text-ice transition-colors duration-300 tracking-[0.12em] uppercase font-medium no-underline px-4 py-2">
              Servicios
            </a>
            <span className="text-ice/20 text-xs">/</span>
            <a href="#proyectos" className="text-[13px] text-ice/75 hover:text-ice transition-colors duration-300 tracking-[0.12em] uppercase font-medium no-underline px-4 py-2">
              Proyectos
            </a>
            <span className="text-ice/20 text-xs">/</span>
            <a href="#testimonios" className="text-[13px] text-ice/75 hover:text-ice transition-colors duration-300 tracking-[0.12em] uppercase font-medium no-underline px-4 py-2">
              Testimonios
            </a>
            <span className="text-ice/20 text-xs">/</span>
            <a
              href="#contacto"
              className="text-[13px] text-solar hover:text-solar-light transition-colors duration-300 tracking-[0.12em] uppercase font-semibold no-underline px-4 py-2 border-b border-solar/40 hover:border-solar pb-0.5"
            >
              Contacto
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-ice/15">
              <a
                href="https://www.facebook.com/p/FTC-Solar-61559433457767/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ice/40 hover:text-ice transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ftcsolarcolombia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ice/40 hover:text-ice transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-ice"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-navy/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#servicios" onClick={closeMenu} className="font-display text-3xl text-ice no-underline hover:text-blue-light transition-colors">
            Servicios
          </a>
          <a href="#proyectos" onClick={closeMenu} className="font-display text-3xl text-ice no-underline hover:text-blue-light transition-colors">
            Proyectos
          </a>
          <a href="#testimonios" onClick={closeMenu} className="font-display text-3xl text-ice no-underline hover:text-blue-light transition-colors">
            Testimonios
          </a>
          <a href="#contacto" onClick={closeMenu} className="font-display text-2xl text-solar no-underline hover:text-solar-light transition-colors">
            Contacto
          </a>
          {/* Mobile social */}
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.facebook.com/p/FTC-Solar-61559433457767/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ice/50 hover:text-ice transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ftcsolarcolombia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ice/50 hover:text-ice transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════
          HERO — Full-bleed composition
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=85"
            alt="Instalación de paneles solares bajo la luz dorada del atardecer"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-16 md:pb-24 pt-40">
          {/* Location trust marker */}
          <p className="text-ice/70 text-sm uppercase tracking-[0.2em] mb-6 font-medium">
            Marinilla, Antioquia &mdash; Energía solar de confianza
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ice leading-[1.05] max-w-4xl mb-6">
            Energía limpia
            <br />
            <span className="text-solar">para el futuro</span>
          </h1>

          <p className="text-lg md:text-xl text-ice/85 max-w-xl mb-10 font-light leading-relaxed">
            Transformamos la luz del sol en el motor de tu hogar y tu negocio.
            Venta, instalación y mantenimiento de sistemas fotovoltaicos
            de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center bg-green text-white font-semibold text-base px-8 py-4 rounded-full tracking-wide no-underline"
            >
              Solicita tu presupuesto
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#proyectos"
              className="cta-secondary inline-flex items-center justify-center border border-ice/30 text-ice font-medium text-base px-8 py-4 rounded-full tracking-wide no-underline"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROJECTS — Carousel
      ════════════════════════════════════════════ */}
      <section id="proyectos" className="relative bg-ice">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

        <div className="px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="animate-on-scroll flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-tight max-w-3xl mb-4">
                Proyectos que transforman paisajes
              </h2>
              <p className="text-midnight-light text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Cada instalación es una pieza de ingeniería diseñada para integrarse
                con la arquitectura y el entorno natural del Oriente Antioqueño.
              </p>
            </div>

            {/* Carousel controls */}
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Proyecto anterior"
                className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-ice transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Proyecto siguiente"
                className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-ice transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="animate-on-scroll scale-in">
            <div ref={carouselRef} className="carousel-track">
              {PROJECTS.map((project, i) => (
                <article key={i} className="carousel-card group">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6 pt-16">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-solar bg-navy/60 px-3 py-1 rounded-full mb-3">
                        {project.type}
                      </span>
                      <h3 className="font-display text-2xl text-ice mb-1">{project.title}</h3>
                      <div className="flex items-center gap-4 text-ice/80 text-sm">
                        <span>{project.location}</span>
                        <span className="text-solar font-semibold">{project.capacity}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-on-scroll mt-12 flex flex-wrap gap-8 md:gap-16 justify-center md:justify-start">
            <div>
              <span className="font-display text-3xl md:text-5xl text-navy">+500</span>
              <p className="text-midnight-light text-sm mt-1">Instalaciones completadas</p>
            </div>
            <div>
              <span className="font-display text-3xl md:text-5xl text-solar">12MW</span>
              <p className="text-midnight-light text-sm mt-1">Capacidad instalada</p>
            </div>
            <div>
              <span className="font-display text-3xl md:text-5xl text-navy">98%</span>
              <p className="text-midnight-light text-sm mt-1">Satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ¿SABÍAS QUE? — Beneficios tributarios Colombia
      ════════════════════════════════════════════ */}
      <section className="bg-navy relative overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(232,168,56,0.08) 0%, transparent 50%)',
          }}
        />

        <div className="relative px-6 md:px-16 lg:px-24 py-20 md:py-28">
          <div className="animate-on-scroll max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14 md:mb-20">
              <span className="text-solar text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                ¿Sabías que?
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-ice leading-tight mb-5">
                Invertir en solar tiene
                <br />
                <span className="text-solar">respaldo de ley</span>
              </h2>
              <p className="text-ice/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Colombia ofrece incentivos tributarios reales para quienes apuesten
                por la energía solar. No es solo ahorro en tu factura — es política de Estado.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Benefit 1 — Deducción de renta */}
              <div className="animate-on-scroll flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-solar/10 flex items-center justify-center">
                  <span className="font-display text-2xl text-solar">50%</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ice mb-2">Deducción en renta</h3>
                  <p className="text-ice/75 text-sm leading-relaxed">
                    Deduce el <strong className="text-ice">50% de tu inversión</strong> del
                    impuesto de renta, distribuido en hasta 15 años.
                  </p>
                  <p className="text-blue-light text-xs mt-2">
                    Art. 11, Ley 1715 de 2014
                  </p>
                </div>
              </div>

              {/* Benefit 2 — Exclusión de IVA */}
              <div className="animate-on-scroll delay-1 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-solar/10 flex items-center justify-center">
                  <span className="font-display text-2xl text-solar">0%</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ice mb-2">Exclusión total del IVA</h3>
                  <p className="text-ice/75 text-sm leading-relaxed">
                    Los paneles, inversores y equipos solares están <strong className="text-ice">exentos del 19% de IVA</strong>.
                    Ahorro directo desde la compra.
                  </p>
                  <p className="text-blue-light text-xs mt-2">
                    Art. 12, Ley 1715 / Ley 2099 de 2021
                  </p>
                </div>
              </div>

              {/* Benefit 3 — Depreciación acelerada */}
              <div className="animate-on-scroll delay-2 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-solar/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ice mb-2">Depreciación acelerada</h3>
                  <p className="text-ice/75 text-sm leading-relaxed">
                    Deprecia tus activos solares <strong className="text-ice">hasta un 33.33% anual</strong>,
                    reduciendo tu base gravable significativamente.
                  </p>
                  <p className="text-blue-light text-xs mt-2">
                    Art. 14, Ley 1715 de 2014
                  </p>
                </div>
              </div>

              {/* Benefit 4 — Ahorro en factura */}
              <div className="animate-on-scroll delay-3 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-solar/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ice mb-2">Hasta 60% menos en tu factura</h3>
                  <p className="text-ice/75 text-sm leading-relaxed">
                    Según el Ministerio de Minas y Energía, un sistema fotovoltaico
                    puede <strong className="text-ice">reducir tu factura de luz hasta en un 60%</strong>.
                  </p>
                  <p className="text-blue-light text-xs mt-2">
                    MinEnergía — Programa Colombia Solar
                  </p>
                </div>
              </div>
            </div>

            {/* Vigencia note */}
            <div className="animate-on-scroll mt-14 text-center">
              <p className="text-ice/50 text-sm max-w-xl mx-auto">
                Estos beneficios están vigentes por <strong className="text-ice/70">30 años</strong> a
                partir de julio de 2021 (Ley 2099). Requieren certificación UPME.
                Nosotros te acompañamos en todo el trámite.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center bg-solar text-navy font-semibold text-base px-8 py-4 rounded-full tracking-wide no-underline mt-8"
              >
                Calcula tu ahorro gratis
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES — One job per block
      ════════════════════════════════════════════ */}
      <section id="servicios" className="bg-navy text-ice">
        <div className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
          <div className="animate-on-scroll mb-20 md:mb-28">
            <div className="accent-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-4">
              Todo lo que necesitas,{' '}
              <span className="text-solar">bajo el sol</span>
            </h2>
            <p className="text-ice/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Un servicio integral desde el primer cálculo hasta el último kilovatio generado.
            </p>
          </div>

          {/* Service 1 — Venta */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <div>
              <span className="font-display text-8xl md:text-9xl text-blue/15 leading-none select-none">
                01
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-ice -mt-8 md:-mt-10 mb-6">
                Venta y Asesoría
              </h3>
              <p className="text-ice/80 text-base md:text-lg leading-relaxed max-w-lg">
                Analizamos tu consumo, diseñamos la solución óptima y te presentamos
                un plan financiero transparente. Trabajamos con paneles de última generación
                y garantía extendida.
              </p>
            </div>
            <div className="animate-on-scroll slide-left rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80"
                alt="Consultoría y planificación de sistemas solares"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Service 2 — Instalación */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <div className="order-2 lg:order-1 animate-on-scroll slide-left rounded-xl overflow-hidden">
              <img
                src="/instalacion.jpg"
                alt="Instalación profesional de paneles solares por FTC Solar"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-display text-8xl md:text-9xl text-blue/15 leading-none select-none">
                02
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-ice -mt-8 md:-mt-10 mb-6">
                Instalación Profesional
              </h3>
              <p className="text-ice/80 text-base md:text-lg leading-relaxed max-w-lg">
                Nuestro equipo certificado ejecuta cada proyecto con precisión
                milimétrica. Garantizamos plazos, seguridad y una integración
                estética con tu propiedad.
              </p>
            </div>
          </div>

          {/* Service 3 — Mantenimiento */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-display text-8xl md:text-9xl text-blue/15 leading-none select-none">
                03
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-ice -mt-8 md:-mt-10 mb-6">
                Mantenimiento Continuo
              </h3>
              <p className="text-ice/80 text-base md:text-lg leading-relaxed max-w-lg">
                Monitoreo remoto en tiempo real, limpieza programada y soporte técnico
                24/7. Tu sistema siempre operando al máximo rendimiento.
              </p>
            </div>
            <div className="animate-on-scroll slide-left rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80"
                alt="Mantenimiento de paneles solares"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SOCIAL PROOF — Clean testimonial
      ════════════════════════════════════════════ */}
      <section id="testimonios" className="bg-ice-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

        <div className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <div className="accent-line mx-auto mb-8" />

            <span className="font-display text-8xl md:text-9xl text-solar/25 leading-none select-none block mb-2">
              &ldquo;
            </span>

            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-navy leading-snug -mt-12 md:-mt-16 mb-10">
              FTC Solar no solo instaló nuestros paneles — transformó
              nuestra relación con la energía. En 18 meses recuperamos
              la inversión completa.
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue/20 flex items-center justify-center">
                <span className="font-display text-xl text-navy">MR</span>
              </div>
              <div className="text-left">
                <p className="text-midnight font-semibold text-base">María Rodríguez</p>
                <p className="text-midnight-light text-sm">Directora, Hotel Bosque Verde</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-on-scroll mt-20 md:mt-28 flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75">
            <div className="flex items-center gap-2 text-midnight-light">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium tracking-wider uppercase">ISO 9001</span>
            </div>
            <div className="flex items-center gap-2 text-midnight-light">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium tracking-wider uppercase">Certificación NABCEP</span>
            </div>
            <div className="flex items-center gap-2 text-midnight-light">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium tracking-wider uppercase">10 años de garantía</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA FINAL + CONTACT
      ════════════════════════════════════════════ */}
      <section id="contacto" className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(232,168,56,0.12) 0%, transparent 60%)',
          }}
        />

        <div className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36">
          <div className="animate-on-scroll max-w-3xl">
            <div className="accent-line mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice leading-tight mb-6">
              Comienza tu transición
              <br />
              <span className="text-solar">energética hoy</span>
            </h2>
            <p className="text-ice/80 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
              Agenda una consulta gratuita. Nuestro equipo en Marinilla, Antioquia
              evaluará tu proyecto y te presentará una propuesta personalizada sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center bg-green text-white font-semibold text-base px-8 py-4 rounded-full tracking-wide no-underline"
              >
                Escríbenos por WhatsApp
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="tel:+573023754780"
                className="cta-secondary inline-flex items-center justify-center border border-ice/30 text-ice font-medium text-base px-8 py-4 rounded-full tracking-wide no-underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                302 375 4780
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════ */}
      <footer className="bg-midnight text-ice/70">
        <div className="px-6 md:px-16 lg:px-24 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png.jpeg"
                alt="FTC Solar"
                className="h-10 w-10 rounded-full object-cover opacity-70"
              />
              <span className="font-display text-xl text-ice/70">FTC Solar</span>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href="#servicios" className="hover:text-ice transition-colors no-underline text-ice/60">Servicios</a>
              <a href="#proyectos" className="hover:text-ice transition-colors no-underline text-ice/60">Proyectos</a>
              <a href="#testimonios" className="hover:text-ice transition-colors no-underline text-ice/60">Testimonios</a>
              <a href="#contacto" className="hover:text-ice transition-colors no-underline text-ice/60">Contacto</a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/p/FTC-Solar-61559433457767/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ice/50 hover:text-ice transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ftcsolarcolombia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ice/50 hover:text-ice transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-ice/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-xs">
                &copy; 2026 FTC Solar. Todos los derechos reservados.
              </p>
              <p className="text-xs mt-1">
                Marinilla, Antioquia — Colombia
              </p>
            </div>
            <p className="text-xs">
              Creado por{' '}
              <a
                href="https://dautia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-solar/70 hover:text-solar transition-colors no-underline"
              >
                DautIA
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ════════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ════════════════════════════════════════════ */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        className="whatsapp-float fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-110 transition-transform duration-300"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}

export default App
