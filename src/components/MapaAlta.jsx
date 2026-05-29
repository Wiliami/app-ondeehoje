const emAlta = [
  { pos: 1, emoji: '🎶', nome: 'Estação 96', bairro: 'Caranazal', fogo: 312 },
  { pos: 2, emoji: '🍻', nome: 'Balcão 360', bairro: 'Orla do Tapajós', fogo: 289 },
  { pos: 3, emoji: '🔥', nome: 'Galpão 66', bairro: 'Prainha', fogo: 245 },
  { pos: 4, emoji: '🪗', nome: 'Ranchão da Aldeia', bairro: 'Aldeia', fogo: 210 },
  { pos: 5, emoji: '🎭', nome: 'Cais Lounge', bairro: 'Orla do Tapajós', fogo: 178 },
  { pos: 6, emoji: '🌊', nome: 'Mirante Tapajós', bairro: 'Orla do Tapajós', fogo: 143 },
]

function MapaCard() {
  return (
    <div className="mapa-card">
      <div className="mapa-header">
        <div className="mapa-title">📍 Mapa da Noite</div>
        <div className="mapa-sub">Explore os melhores rolês perto de você.</div>
      </div>
      <div className="mapa-visual">
        <svg className="mapa-svg" viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(57,255,20,0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="420" height="280" fill="#0d1a10"/>
          <rect width="420" height="280" fill="url(#grid)"/>
          <path d="M 0 200 Q 100 180, 180 190 Q 260 200, 350 185 Q 400 178, 420 182 L 420 280 L 0 280Z" fill="rgba(20,60,100,0.4)"/>
          <path d="M 0 200 Q 100 180, 180 190 Q 260 200, 350 185 Q 400 178, 420 182" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5"/>
          <line x1="0" y1="120" x2="420" y2="120" stroke="rgba(57,255,20,0.08)" strokeWidth="6"/>
          <line x1="0" y1="160" x2="420" y2="160" stroke="rgba(57,255,20,0.08)" strokeWidth="4"/>
          <line x1="140" y1="0" x2="140" y2="200" stroke="rgba(57,255,20,0.08)" strokeWidth="4"/>
          <line x1="280" y1="0" x2="280" y2="200" stroke="rgba(57,255,20,0.08)" strokeWidth="4"/>
          <text x="60" y="50" fill="rgba(57,255,20,0.3)" fontSize="9" fontFamily="'Syne',sans-serif" letterSpacing="2" textAnchor="middle">CARANAZAL</text>
          <text x="210" y="90" fill="rgba(57,255,20,0.3)" fontSize="9" fontFamily="'Syne',sans-serif" letterSpacing="2" textAnchor="middle">SANTARÉM CENTRO</text>
          <text x="340" y="50" fill="rgba(57,255,20,0.3)" fontSize="9" fontFamily="'Syne',sans-serif" letterSpacing="2" textAnchor="middle">ALDEIA</text>
          <text x="50" y="170" fill="rgba(57,255,20,0.3)" fontSize="8" fontFamily="'Syne',sans-serif" letterSpacing="1" textAnchor="middle">ORLA DO TAPAJÓS</text>
          <text x="350" y="170" fill="rgba(57,255,20,0.3)" fontSize="8" fontFamily="'Syne',sans-serif" letterSpacing="1" textAnchor="middle">PRAINHA</text>
          <circle cx="210" cy="130" r="18" fill="rgba(57,255,20,0.15)" stroke="rgba(57,255,20,0.4)" strokeWidth="1.5"/>
          <circle cx="210" cy="130" r="7" fill="#39FF14"/>
          <circle cx="80" cy="155" r="10" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1.5"/>
          <circle cx="80" cy="155" r="4" fill="#39FF14"/>
          <circle cx="70" cy="100" r="10" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1.5"/>
          <circle cx="70" cy="100" r="4" fill="#39FF14"/>
          <circle cx="350" cy="155" r="10" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1.5"/>
          <circle cx="350" cy="155" r="4" fill="#39FF14"/>
          <circle cx="340" cy="60" r="10" fill="rgba(57,255,20,0.1)" stroke="rgba(57,255,20,0.4)" strokeWidth="1"/>
          <circle cx="340" cy="60" r="3.5" fill="rgba(57,255,20,0.6)"/>
          <text x="210" y="240" fill="rgba(56,189,248,0.5)" fontSize="8" fontFamily="'Syne',sans-serif" letterSpacing="3" textAnchor="middle">RIO TAPAJÓS</text>
        </svg>
        <a className="mapa-abrir" href="#">Abrir mapa ↗</a>
      </div>
    </div>
  )
}

function EmAltaCard() {
  return (
    <div className="mapa-card">
      <div className="mapa-header">
        <div className="mapa-title">🌿 Em Alta</div>
        <div className="mapa-sub">Os rolês mais quentes desta noite.</div>
      </div>
      <div className="alta-list">
        {emAlta.map((item) => (
          <div className="alta-item" key={item.pos}>
            <div className={`alta-num${item.pos <= 3 ? ' top' : ''}`}>{item.pos}</div>
            <div className="alta-img">{item.emoji}</div>
            <div className="alta-info">
              <div className="alta-nome">{item.nome}</div>
              <div className="alta-bairro">{item.bairro}</div>
            </div>
            <div className="alta-fogo">🔥 {item.fogo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MapaAlta() {
  return (
    <div className="mapa-alta">
      <MapaCard />
      <EmAltaCard />
    </div>
  )
}
