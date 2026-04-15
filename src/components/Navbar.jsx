import React from 'react'
import content from '../data/content.js'

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-3"
      style={{
        background: 'rgba(8, 12, 20, 0.92)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-sm font-semibold tracking-widest gradient-text"
          style={{ letterSpacing: '0.12em' }}
        >
          ULTIMA
        </span>
        <span
          className="text-xs px-1.5 py-0.5 rounded"
          style={{
            background: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            color: 'var(--cyan)',
            letterSpacing: '0.04em',
          }}
        >
          9.0
        </span>
      </div>

      <a
        href={content.links.nda}
        target="_blank"
        rel="noopener noreferrer"
        className="ext-link text-xs px-3 py-1.5 rounded"
        style={{
          color: 'var(--text-secondary)',
          border: '1px solid var(--border)',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        Документы
      </a>
    </header>
  )
}
