export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="18" rx="14" ry="14" fill="rgba(57,255,20,0.08)" stroke="rgba(57,255,20,0.3)" strokeWidth="1"/>
          <path d="M18 8 C14 10, 10 13, 10 18 C10 23, 14 26, 18 28 C22 26, 26 23, 26 18 C26 13, 22 10, 18 8Z" fill="none" stroke="#39FF14" strokeWidth="1.2"/>
          <path d="M18 12 C15 14, 13 16, 13 18 C13 20, 15 22, 18 23 C21 22, 23 20, 23 18 C23 16, 21 14, 18 12Z" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1"/>
          <circle cx="18" cy="18" r="2.5" fill="#39FF14"/>
          <path d="M18 8 L18 6 M18 30 L18 28 M8 18 L6 18 M30 18 L28 18" stroke="#39FF14" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <div className="nav-logo-text">
          <span>Onde É Hoje</span>
          <span>Santarém</span>
        </div>
      </a>
      <div className="nav-links">
        <a href="#" className="ativo">Início</a>
        <a href="#">Eventos</a>
        <a href="#">Locais</a>
        <a href="#">Mapa</a>
        <a href="#">Blog</a>
      </div>
      <div className="nav-actions">
        <button title="Buscar">🔍</button>
        <button title="Notificações">🔔</button>
        <button className="btn-entrar">Entrar</button>
      </div>
    </nav>
  )
}
