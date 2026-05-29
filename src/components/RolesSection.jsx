import { useState } from 'react'

const roles = [
  {
    id: 1,
    emoji: '🍻',
    bg: 'linear-gradient(135deg, #1a2e1a, #0d1a0d)',
    emojiColor: '#39FF14',
    image: '/balcao.jpg',
    badge: 'Aberto agora',
    name: 'Balcão 360',
    tipo: 'Bar',
    bairro: 'Orla do Tapajós',
    pessoas: 238,
    distancia: '1,3 km',
    vibe: { classe: 'vibe-bom', texto: '🌿 Clima bom' },
  },
  {
    id: 2,
    emoji: '🎶',
    bg: 'linear-gradient(135deg, #1f0d0d, #2e1a0d)',
    image: '/bar.jpg',
    badge: 'Aberto agora',
    name: 'Estação 96',
    tipo: 'Bar',
    bairro: 'Caranazal',
    pessoas: 196,
    distancia: '2,1 km',
    vibe: { classe: 'vibe-bom', texto: '✨ Vibe boa' },
  },
  {
    id: 3,
    emoji: '🎭',
    bg: 'linear-gradient(135deg, #0d0d1f, #0d1a2e)',
    badge: 'Aberto agora',
    name: 'Cais Lounge',
    tipo: 'Lounge',
    bairro: 'Orla do Tapajós',
    pessoas: 152,
    distancia: '1,7 km',
    vibe: { classe: 'vibe-tranquilo', texto: '💧 Tranquilo' },
  },
  {
    id: 4,
    emoji: '🔥',
    bg: 'linear-gradient(135deg, #1f1a0d, #2e0d0d)',
    badge: 'Aberto agora',
    name: 'Galpão 66',
    tipo: 'Pub',
    bairro: 'Prainha',
    pessoas: 171,
    distancia: '2,4 km',
    vibe: { classe: 'vibe-animado', texto: '🔥 Animado' },
  },
  {
    id: 5,
    emoji: '🪗',
    bg: 'linear-gradient(135deg, #0a1f0a, #1a2e10)',
    badge: 'Aberto agora',
    name: 'Ranchão da Aldeia',
    tipo: 'Forró',
    bairro: 'Aldeia',
    pessoas: 310,
    distancia: '3,2 km',
    vibe: { classe: 'vibe-animado', texto: '🔥 Animado' },
  },
  {
    id: 6,
    emoji: '🎸',
    bg: 'linear-gradient(135deg, #150d2e, #0d0d1a)',
    badge: 'Aberto agora',
    name: 'Tapajós Rock Club',
    tipo: 'Rock',
    bairro: 'Centro',
    pessoas: 89,
    distancia: '0,8 km',
    vibe: { classe: 'vibe-bom', texto: '🎸 Pesado' },
  },
  {
    id: 7,
    emoji: '🌊',
    bg: 'linear-gradient(135deg, #0d1a1f, #0a2e2e)',
    badge: 'Aberto agora',
    name: 'Mirante Tapajós',
    tipo: 'Bar',
    bairro: 'Orla do Tapajós',
    pessoas: 127,
    distancia: '1,1 km',
    vibe: { classe: 'vibe-tranquilo', texto: '💧 Relaxado' },
  },
  {
    id: 8,
    emoji: '💜',
    bg: 'linear-gradient(135deg, #1f0a1a, #2e0d20)',
    badge: 'Abre às 23h',
    name: 'Club Amazônia',
    tipo: 'Eletrônico',
    bairro: 'Caranazal',
    pessoas: null,
    distancia: '2,9 km',
    vibe: { classe: 'vibe-animado', texto: '🔥 After' },
  },
]

function RoleCard({ role }) {
  const [favoritado, setFavoritado] = useState(false)

  return (
    <div className="role-card">
      {role.image ? (
        <img className="role-card-img" src={role.image} alt={role.name} />
      ) : (
        <div
          className="role-card-img-placeholder"
          style={{ background: role.bg, color: role.emojiColor || 'inherit', fontSize: '2.5rem' }}
        >
          {role.emoji}
        </div>
      )}
      <div className="role-card-overlay"></div>
      <div className="role-card-badge">
        <div className="dot"></div>
        {role.badge}
      </div>
      <div
        className={`role-card-fav${favoritado ? ' ativo' : ''}`}
        onClick={(e) => { e.stopPropagation(); setFavoritado(!favoritado) }}
      >
        {favoritado ? '♥' : '♡'}
      </div>
      <div className="role-card-body">
        <div className="role-card-name">{role.name}</div>
        <div className="role-card-tipo">{role.tipo} · <span>{role.bairro}</span></div>
        <div className="role-card-meta">
          <div className="meta-chip">👥 {role.pessoas ?? '—'}</div>
          <div className="meta-chip">📍 {role.distancia}</div>
          <div className={`vibe-chip ${role.vibe.classe}`}>{role.vibe.texto}</div>
        </div>
      </div>
    </div>
  )
}

export default function RolesSection({ query = '', categoria = 'Todos' }) {
  const q = query.trim().toLowerCase()

  const filtrados = roles.filter((role) => {
    const matchQuery = !q || [role.name, role.tipo, role.bairro]
      .some((campo) => campo.toLowerCase().includes(q))

    const matchCategoria = categoria === 'Todos' ||
      role.tipo.toLowerCase() === categoria.toLowerCase()

    return matchQuery && matchCategoria
  })

  return (
    <section className="section" id="roles">
      <div className="section-header">
        <div className="section-title">
          <span>🌿</span> Rolês Agora
          {filtrados.length !== roles.length && (
            <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--cinza)', marginLeft: 8 }}>
              {filtrados.length} resultado{filtrados.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <a href="#" className="ver-todos">Ver todos »</a>
      </div>

      {filtrados.length > 0 ? (
        <div className="roles-grid">
          {filtrados.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      ) : (
        <div style={{
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--cinza)',
          background: 'var(--grafite2)',
          borderRadius: 18,
          border: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>
            Nenhum rolê encontrado
          </div>
          <div style={{ fontSize: '0.85rem' }}>
            Tente outro nome, bairro ou categoria.
          </div>
        </div>
      )}
    </section>
  )
}
