"use client";

import { useState } from "react";
import { MapPin, MapPinned, Smartphone } from "lucide-react";

const branches = [
  {
    name: "Farmacias Alhué",
    address: "21 de Mayo 423, Alhué",
    phone: "+56 9 1234 5678",
    query: "Farmacias Alhué, 21 de Mayo 423, Alhué, Chile",
  },
  {
    name: "Almacén Farmacéutico La Línea",
    address: "La Línea, Alhué",
    phone: "+56 9 1234 5678",
    query: "Almacén Farmacéutico La Línea, Alhué, Chile",
  },
  {
    name: "Almacén Farmacéutico Pumanque",
    address: "Pumanque",
    phone: "+56 9 1234 5678",
    query: "Almacén Farmacéutico Pumanque, Chile",
  },
];

export default function Locations() {
  const [selected, setSelected] = useState(0);
  const branch = branches[selected];
  const query = encodeURIComponent(branch.query);
  const phone = branch.phone.replace(/\s/g, "");

  return (
    <section className="location-selector" id="sucursales">
      <div className="location-panel">
        <span className="eyebrow">Visítanos</span>
        <h2>Estamos aquí para ti</h2>
        <div className="branch-list" role="list" aria-label="Selecciona una sucursal">
          {branches.map((item, index) => (
            <button
              className={`branch-option${selected === index ? " active" : ""}`}
              type="button"
              key={item.name}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              <MapPin className="branch-pin" size={20} aria-hidden="true" />
              <span>
                <strong>{item.name}</strong>
                <small>{item.address}</small>
                <small>{item.phone}</small>
              </span>
            </button>
          ))}
        </div>
        <div className="location-actions">
          <a className="pill teal" href={`https://www.google.com/maps/dir/?api=1&destination=${query}`} target="_blank" rel="noreferrer"><MapPinned size={19} aria-hidden="true" /> Cómo llegar</a>
          <a className="pill light" href={`tel:${phone}`}><Smartphone size={19} aria-hidden="true" /> Llámanos</a>
        </div>
      </div>
      <div className="real-map">
        <iframe
          key={branch.query}
          title={`Mapa de ${branch.name}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
