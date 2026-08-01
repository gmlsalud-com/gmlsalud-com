"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " nav-open" : ""}`}>
      <a className="brand" href="#inicio" aria-label="GML Salud, inicio" onClick={close}>
        <img src="/gml-logo.png" alt="GML" />
        <span>GML <b>SALUD</b></span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#inicio" onClick={close}>Inicio</a>
        <a href="#nosotros" onClick={close}>Nosotros</a>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#consejos" onClick={close}>Consejos de salud</a>
        <a href="#sucursales" onClick={close}>Sucursales</a>
      </nav>
      <a className="pill dark desktop-cta" href="#sucursales"><MapPinned size={18} aria-hidden="true" /> Cómo llegar</a>
      <button className="menu" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
    </header>
  );
}
