import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, SectionLabel } from '../UI.jsx'
import content from '../../data/content.js'

// Аккордеон для глоссария
function GlossaryItem({ term, definition, example }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl mb-2 cursor-pointer transition-all duration-150"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-medium gradient-text">{term}</span>
        {open
          ? <ChevronUp size={14} style={{ color: 'var(--text-muted)' }} />
          : <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
        }
      </div>

      {open && (
        <div className="px-4 pb-3">
          <p
            className="text-xs mb-1.5 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {definition}
          </p>
          <p
            className="text-xs px-2 py-1.5 rounded"
            style={{
              background: 'rgba(34,211,238,0.06)',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
            }}
          >
            Пример: {example}
          </p>
        </div>
      )}
    </div>
  )
}

export default function TabAbout() {
  const { about, glossary } = content

  return (
    <div className="space-y-5">

      {/* Что такое ULTIMA */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(232,121,249,0.06) 100%)',
          border: '1px solid rgba(34,211,238,0.12)',
        }}
      >
        <p className="text-sm font-medium mb-2">Что такое ULTIMA 9.0</p>
        <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          {about.what}
        </p>
        <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          {about.why}
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{
            color: 'var(--text-muted)',
            borderLeft: '2px solid rgba(34,211,238,0.3)',
            paddingLeft: '10px',
          }}
        >
          {about.whatNot}
        </p>
      </div>

      {/* Формат работы */}
      <Card>
        <p className="text-sm font-medium mb-2">Формат работы</p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {about.format}
        </p>
      </Card>

      {/* Для кого */}
      <Card>
        <p className="text-sm font-medium mb-2">Для кого</p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {about.forWhom}
        </p>
      </Card>

      {/* Роудмап */}
      <div>
        <SectionLabel>Роудмап сезона</SectionLabel>
        <Card>
          <div className="space-y-3">
            {about.roadmap.map((stage, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg text-xs font-medium"
                  style={{
                    width: 28,
                    height: 28,
                    background: 'rgba(34,211,238,0.1)',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <p className="text-sm font-medium">{stage.title}</p>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {stage.duration}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Глоссарий */}
      <div>
        <SectionLabel>Словарь терминов — нажми чтобы раскрыть</SectionLabel>
        {glossary.map(item => (
          <GlossaryItem key={item.term} {...item} />
        ))}
      </div>

    </div>
  )
}
