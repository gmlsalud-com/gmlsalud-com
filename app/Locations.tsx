"use client";

import { useState } from "react";
import { MapPin, MapPinned, Smartphone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const branches = [
  {
    name: "Farmacias Alhué",
    address: "21 de Mayo 423, Alhué",
    phone: "+56 9 1234 5678",
    query: "21 de Mayo 423, Alhué, Chile",
    facebook: "https://www.facebook.com/share/1DbT8CHWd3/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/farmacia_alhue?igsh=MXV2ZWl5c3R6aWdhZg==",
  },
  {
    name: "Almacén Farmacéutico La Línea",
    address: "La Línea, Alhué",
    phone: "+56 9 1234 5678",
    query: "La Línea, Alhué, Chile",
    instagram: "https://www.instagram.com/aflalinea?igsh=MTN1M2xsdngyZWljcg==",
  },
  {
    name: "Almacén Farmacéutico Pumanque",
    address: "Pumanque",
    phone: "+56 9 1234 5678",
    query: "Pumanque, Chile",
    facebook: "https://www.facebook.com/share/1Jco2qwWk/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/afpumanque?igsh=MTV2dmprYzdxYmN1OQ==",
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
            <div className={`branch-row${selected === index ? " active" : ""}`} role="listitem" key={item.name}>
              <button
                className="branch-option"
                type="button"
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
              <div className="branch-social" aria-label={`Redes sociales de ${item.name}`}>
                {item.facebook && <a className="social-link facebook" href={item.facebook} target="_blank" rel="noreferrer" aria-label={`Facebook de ${item.name}`}><FaFacebookF aria-hidden="true" /></a>}
                {item.instagram && <a className="social-link instagram" href={item.instagram} target="_blank" rel="noreferrer" aria-label={`Instagram de ${item.name}`}><FaInstagram aria-hidden="true" /></a>}
              </div>
            </div>
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
          src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map-selected-marker" role="status" aria-live="polite">
          <span className="map-marker-pin"><MapPin size={27} aria-hidden="true" /></span>
          <strong>{branch.name}</strong>
          <small>{branch.address}</small>
        </div>
      </div>
    </section>
  );
}
