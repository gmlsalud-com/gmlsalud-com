import Locations from "./Locations";
import Header from "./Header";
import { Baby, Compass, HeartHandshake, HeartPulse, MapPinned, Pill, PillBottle, ShieldCheck, ShieldPlus, ShoppingBag, Smartphone, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const services = [
  { icon: Pill, title: "Medicamentos", text: "Amplio stock de medicamentos de marca y genéricos." },
  { icon: HeartPulse, title: "Orientación farmacéutica", text: "Te asesoramos en el uso correcto de tus medicamentos." },
  { icon: PillBottle, title: "Vitaminas y suplementos", text: "Encuentra productos para tu bienestar diario." },
  { icon: Baby, title: "Productos infantiles", text: "Todo lo que tu bebé necesita, en un solo lugar." },
  { icon: Sparkles, title: "Cuidado personal", text: "Productos de higiene, belleza y cuidado personal." },
  { icon: ShoppingBag, title: "Todo lo que necesitas", text: "Soluciones pensadas para cuidar tu salud y bienestar." },
];

const socialLinks = [
  { network: "Facebook", branch: "Farmacias Alhué", href: "https://www.facebook.com/share/1DbT8CHWd3/?mibextid=wwXIfr", icon: "facebook" },
  { network: "Instagram", branch: "Farmacias Alhué", href: "https://www.instagram.com/farmacia_alhue?igsh=MXV2ZWl5c3R6aWdhZg==", icon: "instagram" },
  { network: "Instagram", branch: "La Línea", href: "https://www.instagram.com/aflalinea?igsh=MTN1M2xsdngyZWljcg==", icon: "instagram" },
  { network: "Facebook", branch: "Pumanque", href: "https://www.facebook.com/share/1Jco2qwWk/?mibextid=wwXIfr", icon: "facebook" },
  { network: "Instagram", branch: "Pumanque", href: "https://www.instagram.com/afpumanque?igsh=MTV2dmprYzdxYmN1OQ==", icon: "instagram" },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="inicio">
        <div className="hero-live">
          <h1>Nos ocupamos<br /><em>de tu bienestar</em></h1>
          <div className="hero-actions">
            <a className="pill teal" href="https://maps.app.goo.gl/3tkZgS4eCXT8eLjU6" target="_blank" rel="noreferrer"><MapPinned size={19} aria-hidden="true" /> Cómo llegar</a>
            <a className="pill light" href="tel:+56964179731"><Smartphone size={19} aria-hidden="true" /> Llámanos</a>
            <a className="pill whatsapp" href="https://wa.me/56964179731" target="_blank" rel="noreferrer"><FaWhatsapp size={19} aria-hidden="true" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="about-live" id="nosotros">
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h2>Más cerca de las personas</h2>
          <p>En GML SALUD acercamos productos y soluciones de salud a todos nuestros pacientes. A través de nuestra red de farmacias y almacenes farmacéuticos, ofrecemos atención cercana, precios convenientes, convenios de salud y programas de descuentos con beneficios para nuestros clientes.</p>
        </div>
        <div className="care-icon-vector" role="img" aria-label="Manos cuidando un corazón con símbolo de salud"><HeartHandshake aria-hidden="true" /></div>
      </section>

      <section className="services-live" id="servicios">
        <div className="services-heading"><span className="eyebrow">Nuestros servicios</span><h2>Estamos para ayudarte</h2></div>
        <div className="services-list">
          {services.map((service) => { const Icon = service.icon; return <article key={service.title}><i aria-hidden="true"><Icon /></i><h3>{service.title}</h3><p>{service.text}</p></article>; })}
        </div>
      </section>

      <section className="advice-live" id="consejos">
        <span className="eyebrow">Consejos de salud</span>
        <h2>Te recomendamos</h2>
        <div className="advice-cards">
          <article><img src="/consejo-medicamentos.jpg" alt="Persona tomando medicamentos con agua" /><div><h3>Cómo usar correctamente los medicamentos</h3><p>Consejos prácticos para obtener el máximo beneficio de tus tratamientos.</p></div></article>
          <article><img src="/consejo-invierno.png" alt="Mujer resfriada usando un pañuelo durante el invierno" /><div><h3>Prevención durante el invierno</h3><p>Recomendaciones para cuidar tu salud en los días fríos.</p></div></article>
          <article><img src="/consejo-adherencia.png" alt="Manos organizando medicamentos en un pastillero semanal" /><div><h3>Importancia de la adherencia al tratamiento</h3><p>Seguir tu tratamiento mejora tu calidad de vida.</p></div></article>
        </div>
      </section>

      <section className="purpose-modern" aria-label="Misión, visión y valores">
        <article>
          <div className="purpose-icon" aria-hidden="true"><ShieldPlus size={27} /></div>
          <span>01</span>
          <h2>Misión</h2>
          <p>Mejorar la salud y calidad de vida de las personas, facilitando el acceso a medicamentos, productos y soluciones de bienestar, especialmente en comunas con menor disponibilidad.</p>
        </article>
        <article>
          <div className="purpose-icon" aria-hidden="true"><Compass size={27} /></div>
          <span>02</span>
          <h2>Visión</h2>
          <p>Ser una red referente en salud y bienestar, reconocida por acercar soluciones de calidad, creciendo de manera cercana y sostenible.</p>
        </article>
        <article>
          <div className="purpose-icon" aria-hidden="true"><ShieldCheck size={29} /></div>
          <span>03</span>
          <h2>Valores</h2>
          <p>Confianza, innovación y crecimiento sostenible guían cada una de nuestras decisiones.</p>
        </article>
      </section>

      <Locations />

      <footer>
        <div className="footer-brand"><img src="/gml-logo.png" alt="" /><strong>GML SALUD</strong><p>Nos ocupamos de tu bienestar.</p></div>
        <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#sucursales">Sucursales</a></div>
        <div><h3>Información</h3><a href="tel:+56964179731">+56 9 6417 9731</a><a href="https://wa.me/56964179731" target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a><p>contacto@gmlsalud.com</p><p>Lunes a viernes de 09:00 a 18:30</p></div>
        <div><h3>Nuestras sucursales</h3><p>Alhué</p><p>La Línea</p><p>Pumanque</p></div>
        <div className="footer-social"><h3>Síguenos</h3><div>
          {socialLinks.map((social) => (
            <a className="footer-social-link" href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.network} de ${social.branch}`} title={`${social.network} · ${social.branch}`} key={`${social.network}-${social.branch}`}>
              {social.icon === "facebook" ? <FaFacebookF aria-hidden="true" /> : <FaInstagram aria-hidden="true" />}
            </a>
          ))}
        </div></div>
      </footer>

    </main>
  );
}
