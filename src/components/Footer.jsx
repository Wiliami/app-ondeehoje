export default function Footer() {
  return (
    <footer>
      {/* <div className="footer-app">
        <div className="footer-app-label">Baixe o App</div>
        <div className="app-btns">
          <a href="#" className="app-btn">🍎 App Store</a>
          <a href="#" className="app-btn">▶ Google Play</a>
        </div>
      </div> */}
      <div className="footer-logo">
        <img src="/logo.png" alt="Onde é hoje?" className="footer-logo-img" />
        <small>Santarém</small>
      </div>
      <div className="footer-social">
        <div className="footer-social-label">Siga a gente</div>
        <div className="social-btns">
          <a href="#" className="social-btn" title="Instagram">📸</a>
          <a href="#" className="social-btn" title="TikTok">🎵</a>
          <a href="#" className="social-btn" title="WhatsApp">💬</a>
        </div>
      </div>
    </footer>
  )
}
