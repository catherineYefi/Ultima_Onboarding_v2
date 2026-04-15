import React from 'react'
import { ExternalLink } from 'lucide-react'
import { SectionLabel } from '../UI.jsx'
import content from '../../data/content.js'

function MatCard({ item }) {
  const isNew = item.badge === 'new'
  const isUpdated = item.badge === 'updated'

  const badgeStyle = isNew
    ? { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.2)' }
    : isUpdated
    ? { color: 'var(--cyan)', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)' }
    : null

  const url = item.linkKey ? content.links[item.linkKey] : null
  const isClickable = url && url !== '#'

  const inner = (
    <div
      className="rounded-xl p-3 h-full transition-all duration-150"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: badgeStyle
          ? `1px solid ${badgeStyle.border}`
          : '1px solid var(--border)',
        cursor: isClickable ? 'pointer' : 'default',
      }}
    >
      {badgeStyle ? (
        <p className="text-xs mb-1" style={{ color: badgeStyle.color }}>
          {isNew ? 'Новый' : 'Обновлён'}
        </p>
      ) : (
        <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
          {item.label}
        </p>
      )}
      <div className="flex items-start justify-between gap-1">
        <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
          {item.title}
        </p>
        {isClickable && (
          <ExternalLink size={11} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 1 }} />
        )}
      </div>
    </div>
  )

  if (isClickable) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    )
  }
  return <div>{inner}</div>
}

export default function TabMaterials() {
  return (
    <div className="space-y-5">
      {content.materials.sections.map(section => (
        <div key={section.title}>
          <SectionLabel>{section.title}</SectionLabel>
          <div className="grid grid-cols-2 gap-2">
            {section.items.map(item => (
              <MatCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
