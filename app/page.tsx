import Locations from "./Locations";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="GML Salud, inicio">
          <img src="/gml-logo.png" alt="GML" />
          <span>GML <b>SALUD</b></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#consejos">Consejos de salud</a>
          <a href="#sucursales">Sucursales</a>
        </nav>
        <a className="pill dark desktop-cta" href="#sucursales">⌖ Cómo llegar</a>
        <button className="menu" aria-label="Abrir menú">☰</button>
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero-reference"
          src="/hero-gml-salud.png"
          alt="GML Salud. Cuidamos tu bienestar. Atención cercana y profesional, siempre que nos necesites."
        />
        <a className="hero-hotspot hero-hotspot-map" href="#sucursales" aria-label="Cómo llegar" />
        <a className="hero-hotspot hero-hotspot-phone" href="tel:+56912345678" aria-label="Llámanos" />
      </section>

      <section className="about-reference" id="nosotros">
        <img
          src="/sobre-nosotros-gml.png"
          alt="Sobre nosotros. Más cerca de las personas. En GML Salud trabajamos cada día para entregar un servicio farmacéutico de calidad, con orientación profesional y productos confiables para tu salud y la de tu familia."
        />
      </section>

      <section className="services-reference" id="servicios">
        <img
          src="/servicios-gml.png"
          alt="Nuestros servicios. Estamos para ayudarte: medicamentos, orientación farmacéutica, control de presión arterial, vitaminas y suplementos, productos infantiles y cuidado personal."
        />
      </section>

      <section className="advice-reference" id="consejos">
        <img
          src="/consejos-gml.png"
          alt="Consejos de salud. Te recomendamos: cómo usar correctamente los medicamentos, prevención durante el invierno e importancia de la adherencia al tratamiento."
        />
        <span className="advice-link-cover" aria-hidden="true" />
      </section>

      <section className="purpose-modern" aria-label="Misión, visión y valores">
        <article>
          <div className="purpose-icon" aria-hidden="true">⌖</div>
          <span>01</span>
          <h2>Misión</h2>
          <p>Mejorar la salud y calidad de vida de las personas, facilitando el acceso a medicamentos, productos y soluciones de bienestar, especialmente en comunas con menor disponibilidad.</p>
        </article>
        <article>
          <div className="purpose-icon" aria-hidden="true">◉</div>
          <span>02</span>
          <h2>Visión</h2>
          <p>Ser una red referente en salud y bienestar, reconocida por acercar soluciones de calidad, creciendo de manera cercana y sostenible.</p>
        </article>
        <article>
          <div className="purpose-icon" aria-hidden="true">✦</div>
          <span>03</span>
          <h2>Valores</h2>
          <p><strong>Confianza</strong>, innovación y crecimiento sostenible guían cada una de nuestras decisiones.</p>
        </article>
      </section>

      <Locations />

      <footer>
        <div className="footer-brand"><img src="/gml-logo.png" alt="" /><strong>GML SALUD</strong><p>Comprometidos con tu bienestar.</p></div>
        <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#sucursales">Sucursales</a></div>
        <div><h3>Información</h3><p>+56 9 1234 5678</p><p>contacto@gmlsalud.cl</p><p>Lun–Vie 09:00–19:30</p></div>
        <div><h3>Nuestras sucursales</h3><p>Alhué</p><p>La Línea, Alhué</p><p>Pumanque</p></div>
      </footer>

      <div className="mobile-bar">
        <a href="https://maps.google.com/?q=21+de+Mayo+423+Alhue">⌖ Cómo llegar</a>
        <a href="tel:+56912345678">⌕ Llámanos</a>
      </div>
    </main>
  );
}
