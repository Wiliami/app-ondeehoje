const categorias = [
  { icon: '⊞', label: 'Todos' },
  { icon: '🍸', label: 'Bar' },
  { icon: '🎵', label: 'Pagode' },
  { icon: '🔊', label: 'Funk' },
  { icon: '🤠', label: 'Sertanejo' },
  { icon: '🛋️', label: 'Lounge' },
  { icon: '🎤', label: 'Karaokê' },
  { icon: '🎪', label: 'Festival' },
  { icon: '🌙', label: 'After' },
  { icon: '💃', label: 'Forró' },
  { icon: '🎸', label: 'Rock' },
]

export default function Categorias({ categoria, setCategoria }) {
  return (
    <div className="categorias">
      <div className="categorias-scroll">
        {categorias.map((cat) => (
          <div
            key={cat.label}
            className={`cat-item${categoria === cat.label ? ' ativo' : ''}`}
            onClick={() => setCategoria(cat.label)}
          >
            <div className="cat-icon">{cat.icon}</div>
            <div className="cat-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
