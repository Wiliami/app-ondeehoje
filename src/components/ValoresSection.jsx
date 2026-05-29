const valores = [
  { icon: '🌿', titulo: 'Cultura', desc: 'Valorizamos nossa cultura e tradição amazônica' },
  { icon: '👥', titulo: 'Comunidade', desc: 'Conecte-se com sua tribo santarena' },
  { icon: '📍', titulo: 'Explorar', desc: 'Descubra novos lugares e experiências locais' },
  { icon: '👑', titulo: 'Ranking', desc: 'Veja os rolês mais bombados da noite' },
]

export default function ValoresSection() {
  return (
    <section className="section">
      <div className="valores-grid">
        {valores.map((v) => (
          <div className="valor-card" key={v.titulo}>
            <div className="valor-icon">{v.icon}</div>
            <div className="valor-titulo">{v.titulo}</div>
            <div className="valor-desc">{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
