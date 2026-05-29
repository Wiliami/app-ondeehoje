export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/helena-lopes.jpg"
          alt=""
          className="hero-bg-photo"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="dot"></div>
          Ao vivo agora · Santarém, PA
        </div>
        <img src="/logo.png" alt="Onde é hoje?" className="hero-logo" />
        <p className="hero-sub">
          Os melhores rolês de <strong>Santarém</strong>,<br/>em tempo real.
        </p>
        <div className="hero-btns">
          <a href="#roles" className="btn-primary">👥 Explorar agora</a>
          <a href="#eventos" className="btn-secondary">Ver eventos »</a>
        </div>
        <div className="energia-chip">
          <div>
            <div className="energia-label">Energia da noite</div>
            <div className="energia-valor">ALTA</div>
          </div>
          <div className="energia-icon">⚡</div>
        </div>
      </div>
      {/* <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </div> */}
    </section>
  )
}
