const services = [
  { icon: "✚", title: "Medicamentos", text: "Amplia variedad de medicamentos y genéricos." },
  { icon: "♡", title: "Orientación farmacéutica", text: "Te ayudamos a resolver tus dudas." },
  { icon: "♧", title: "Control de presión arterial", text: "Monitoreo rápido y seguro." },
  { icon: "◒", title: "Vitaminas y suplementos", text: "Soluciones para sentirte mejor." },
  { icon: "☆", title: "Productos infantiles", text: "Todo para el cuidado de los más pequeños." },
  { icon: "♙", title: "Cuidado personal", text: "Higiene, prevención y bienestar." },
];

const branches = [
  { name: "Farmacias Alhué", address: "21 de Mayo 423, Alhué", phone: "+56 9 1234 5678" },
  { name: "Almacén Farmacéutico La Línea", address: "La Línea, Alhué", phone: "+56 9 1234 5678" },
  { name: "Almacén Farmacéutico Pumanque", address: "Pumanque", phone: "+56 9 1234 5678" },
];

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
        <div className="hero-photo" role="img" aria-label="Atención cercana en una farmacia moderna" />
        <div className="hero-content">
          <span className="eyebrow">Tu salud, más cerca</span>
          <h1>Cuidamos<br /><em>tu bienestar</em></h1>
          <p>Atención cercana y profesional, siempre que nos necesites.</p>
          <div className="actions">
            <a className="pill teal" href="#sucursales">⌖ Cómo llegar</a>
            <a className="pill light" href="tel:+56912345678">⌕ Llámanos</a>
          </div>
        </div>
      </section>

      <section className="intro section" id="nosotros">
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h2>Más cerca de las personas</h2>
          <p>En GML Salud trabajamos cada día para entregar un servicio farmacéutico de calidad, con atención profesional y productos confiables para tu salud y la de tu familia.</p>
        </div>
        <div className="care-mark" aria-hidden="true">♧<span>♡</span></div>
      </section>

      <section className="purpose section">
        <article><span>01</span><h3>Misión</h3><p>Mejorar la salud y calidad de vida de las personas, facilitando el acceso a medicamentos, productos y soluciones de bienestar, especialmente en comunas con menor disponibilidad.</p></article>
        <article><span>02</span><h3>Visión</h3><p>Ser una red referente en salud y bienestar, reconocida por acercar soluciones de calidad, creciendo de manera cercana y sostenible.</p></article>
        <article><span>03</span><h3>Valores</h3><p><b>Confianza</b>, innovación y crecimiento sostenible guían cada una de nuestras decisiones.</p></article>
      </section>

      <section className="services section" id="servicios">
        <div className="center-title">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Estamos para ayudarte</h2>
          <p>Una atención integral pensada para ti y tu familia.</p>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title}>
              <i aria-hidden="true">{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products section">
        <div className="product-photo" />
        <div>
          <span className="eyebrow">Productos y beneficios</span>
          <h2>Soluciones confiables para tu cuidado diario</h2>
          <p>Ofrecemos medicamentos, cuidado personal, higiene, prevención, bienestar e insumos. Complementamos nuestra oferta con orientación personalizada, convenios de salud y programas de descuentos para clientes inscritos.</p>
          <a className="text-link" href="#sucursales">Conoce nuestras sucursales →</a>
        </div>
      </section>

      <section className="advice section" id="consejos">
        <div className="section-heading">
          <div><span className="eyebrow">Consejos de salud</span><h2>Te recomendamos</h2></div>
          <a href="#servicios">Ver todos los consejos →</a>
        </div>
        <div className="cards">
          <article><div className="card-image pills" /><div><small>Uso responsable</small><h3>Cómo usar correctamente los medicamentos</h3><p>Consejos prácticos para obtener el máximo beneficio de tus tratamientos.</p><a href="#servicios">Leer más →</a></div></article>
          <article><div className="card-image winter" /><div><small>Prevención</small><h3>Cuídate durante el invierno</h3><p>Recomendaciones para cuidar tu salud durante los meses más fríos.</p><a href="#servicios">Leer más →</a></div></article>
          <article><div className="card-image children" /><div><small>Bienestar</small><h3>La importancia de la adherencia</h3><p>Sigue tu tratamiento de forma segura con acompañamiento profesional.</p><a href="#servicios">Leer más →</a></div></article>
        </div>
      </section>

      <section className="locations section" id="sucursales">
        <div className="location-info">
          <span className="eyebrow">Visítanos</span>
          <h2>Estamos aquí para ti</h2>
          {branches.map((branch) => (
            <article key={branch.name}>
              <i>⌖</i><div><h3>{branch.name}</h3><p>{branch.address}</p><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></div>
            </article>
          ))}
          <div className="actions">
            <a className="pill teal" href="https://maps.google.com/?q=21+de+Mayo+423+Alhue">⌖ Cómo llegar</a>
            <a className="pill light" href="tel:+56912345678">⌕ Llámanos</a>
          </div>
        </div>
        <div className="map" aria-label="Mapa referencial de sucursales"><span>●</span><b>GML Salud</b></div>
      </section>

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
