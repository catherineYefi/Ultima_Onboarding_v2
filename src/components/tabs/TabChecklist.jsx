import React, { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Card, SectionLabel, LinkBtn } from '../UI.jsx'
import content from '../../data/content.js'

function CheckItem({ item, checked, onToggle, children }) {
  return (
    <div
      onClick={onToggle}
      className="rounded-xl p-3.5 cursor-pointer transition-all duration-150 mb-2"
      style={{
        background: checked ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${checked ? 'rgba(255,255,255,0.05)' : 'var(--border)'}`,
        opacity: checked ? 0.55 : 1,
      }}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded mt-0.5 transition-all duration-200"
          style={{
            width: 18,
            height: 18,
            background: checked ? 'var(--cyan)' : 'rgba(255,255,255,0.06)',
            border: checked ? '1px solid var(--cyan)' : '1px solid var(--border)',
          }}
        >
          {checked && <Check size={11} color="#080c14" strokeWidth={2.5} />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium mb-0.5"
            style={{
              color: checked ? 'var(--text-muted)' : 'var(--text-primary)',
              textDecoration: checked ? 'line-through' : 'none',
            }}
          >
            {item.title}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {item.sub}
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function TabChecklist({ goToTab }) {
  const base = content.checklist.baseSteps
  const ss = content.checklist.ssStep
  const total = base.length + 1

  const [checked, setChecked] = useState(
    Object.fromEntries([...base.map(i => [i.id, false]), [ss.id, false]])
  )

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const doneCount = Object.values(checked).filter(Boolean).length
  const pct = Math.round((doneCount / total) * 100)

  return (
    <div className="space-y-4">

      {/* Progress */}
      <Card>
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-sm font-medium">Стартовый чек-лист</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {doneCount} / {total} — {pct}%
          </p>
        </div>
        <div className="rounded-full overflow-hidden" style={{ height: 4, background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full rounded-full progress-fill"
            style={{
              width: `${pct}%`,
              background: pct === 100
                ? 'linear-gradient(90deg, var(--cyan), #4ade80)'
                : 'linear-gradient(90deg, var(--cyan), var(--magenta))',
            }}
          />
        </div>
      </Card>

      {/* Base steps */}
      <div>
        <SectionLabel>Базовые шаги</SectionLabel>
        {base.map(item => (
          <CheckItem
            key={item.id}
            item={item}
            checked={checked[item.id]}
            onToggle={() => toggle(item.id)}
          >
            {/* Hint for Точка А и Б */}
            {item.hint && !checked[item.id] && (
              <div
                className="mt-2 rounded-lg p-2.5"
                style={{ background: 'rgba(255,255,255,0.04)' }}
                onClick={e => e.stopPropagation()}
              >
                {item.hint.map((h, i) => (
                  <div key={i} className="flex gap-2 mb-1 last:mb-0">
                    <span className="text-xs flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                      {i + 1}.
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {/* Link */}
            {item.linkText && !checked[item.id] && (
              <div className="mt-2.5" onClick={e => e.stopPropagation()}>
                <LinkBtn linkKey={item.linkKey} variant={item.linkColor || 'blue'}>
                  {item.linkText}
                </LinkBtn>
              </div>
            )}
          </CheckItem>
        ))}
      </div>

      {/* SS step */}
      <div>
        <SectionLabel>Подготовка к Start-СС</SectionLabel>
        <CheckItem
          item={ss}
          checked={checked[ss.id]}
          onToggle={() => toggle(ss.id)}
        >
          {!checked[ss.id] && (
            <div className="mt-2.5" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => goToTab('prepss')}
                className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg w-full ext-link"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="flex-1 text-left">Перейти к подготовке к СС</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}
        </CheckItem>
      </div>

      {/* Done state */}
      {pct === 100 && (
        <div
          className="rounded-xl p-4 text-center"
          style={{
            background: 'rgba(74,222,128,0.08)',
            border: '1px solid rgba(74,222,128,0.2)',
          }}
        >
          <p className="text-sm font-medium mb-1" style={{ color: '#4ade80' }}>
            Все шаги выполнены
          </p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Ты готов к работе в программе
          </p>
        </div>
      )}

    </div>
  )
}
