import React from 'react'
import { ExternalLink } from 'lucide-react'
import content from '../data/content.js'

// Glass card wrapper
export function Card({ children, className = '', style = {} }) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Section label (ALL CAPS small)
export function SectionLabel({ children }) {
  return (
    <p
      className="text-xs font-medium mb-3 tracking-widest"
      style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
    >
      {children}
    </p>
  )
}

// External link button
export function LinkBtn({ linkKey, href, children, variant = 'blue' }) {
  const url = href || (linkKey ? content.links[linkKey] : '#')
  const colors = {
    blue: {
      bg: 'rgba(34, 211, 238, 0.1)',
      border: 'rgba(34, 211, 238, 0.2)',
      color: 'var(--cyan)',
    },
    green: {
      bg: 'rgba(74, 222, 128, 0.1)',
      border: 'rgba(74, 222, 128, 0.2)',
      color: '#4ade80',
    },
    ghost: {
      bg: 'rgba(255,255,255,0.04)',
      border: 'var(--border)',
      color: 'var(--text-secondary)',
    },
  }
  const c = colors[variant] || colors.blue
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="ext-link inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}
    >
      {children}
      <ExternalLink size={11} />
    </a>
  )
}

// Tag / badge
export function Tag({ children, variant = 'default' }) {
  const colors = {
    default: { bg: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' },
    blue:    { bg: 'rgba(34,211,238,0.1)',   color: 'var(--cyan)' },
    green:   { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80' },
    warning: { bg: 'rgba(251,191,36,0.1)',   color: '#fbbf24' },
  }
  const c = colors[variant] || colors.default
  return (
    <span
      className="inline-block text-xs px-2 py-0.5 rounded"
      style={{ background: c.bg, color: c.color }}
    >
      {children}
    </span>
  )
}

// Divider connector (between step rows)
export function Connector() {
  return (
    <div className="flex ml-3 my-1">
      <div style={{ width: 1, height: 12, background: 'var(--border)' }} />
    </div>
  )
}

// Step circle number
export function StepCircle({ num }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-medium mt-0.5"
      style={{
        width: 26,
        height: 26,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
      }}
    >
      {num}
    </div>
  )
}

// Note / info bar
export function Note({ children }) {
  return (
    <div
      className="text-xs rounded-lg px-3 py-2.5 mb-4 leading-relaxed"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
      }}
    >
      {children}
    </div>
  )
}
