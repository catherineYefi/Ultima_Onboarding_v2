import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { Card, Note, SectionLabel, LinkBtn } from '../UI.jsx'
import content from '../../data/content.js'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl mb-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
      <button className="w-full flex items-center justify-between px-4 py-3 text-left" onClick={() => setOpen(!open)}>
        <span className="text-sm font-medium">{title}</span>
        {open ? <ChevronUp size={14} style={{ color: 'var(--text-muted)' }} /> : <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

function DisciplineCard({ d }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl mb-3 cursor-pointer" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }} onClick={() => setOpen(!open)}>
      <div className="flex items-start gap-3 px-4 py-3">
        <div className="flex-shrink-0 flex items-center justify-center rounded-lg text-xs font-bold" style={{ width: 28, height: 28, background: 'rgba(34,211,238,0.1)', color: 'var(--cyan)', border: '1px solid rgba(34,211,238,0.2)' }}>{d.number}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium mb-0.5">{d.title}</p>
          <p className="text-xs" style={{ color: 'var(--cyan)' }}>{d.subtitle}</p>
        </div>
        {open ? <ChevronUp size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} /> : <ChevronDown size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
      </div>
      {open && (
        <div className="px-4 pb-4 space-y-3">
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{d.description}</p>
          <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.1)' }}>
            <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>В ULTIMA:</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{d.inUltima}</p>
          </div>
          <div>
            <p className="text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Формула: <span style={{ color: 'var(--cyan)' }}>{d.formula}</span></p>
            {d.examples.map((ex, i) => (
              <p key={i} className="text-xs mb-1 pl-2" style={{ color: 'var(--text-secondary)', borderLeft: '1px solid var(--border)' }}>→ {ex}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function TabMethodology() {
  const { fourDX, wigDeclaration, controlPanel, roles, meetingCycle, rules, links } = content

  return (
    <div className="space-y-5">
      <Note>Справочник — не обязательно читать всё сразу. Возвращайся когда нужно.</Note>

      {/* 4DX */}
      <div>
        <SectionLabel>4 Дисциплины Исполнения (4DX)</SectionLabel>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{fourDX.intro}</p>
        {fourDX.disciplines.map(d => <DisciplineCard key={d.number} d={d} />)}
        <p className="text-xs mt-1 px-3 py-2 rounded-lg" style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', fontStyle: 'italic' }}>{fourDX.note}</p>
      </div>

      {/* WIG Declaration */}
      <div>
        <SectionLabel>WIG-декларация</SectionLabel>
        <Card>
          <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{wigDeclaration.definition}</p>
          <div className="rounded-lg px-3 py-2.5 mb-3" style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Формула:</p>
            <p className="text-sm font-medium" style={{ color: 'var(--cyan)' }}>{wigDeclaration.formula.template}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Пример: {wigDeclaration.formula.example}</p>
          </div>
          <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Критерии хорошего WIG:</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {wigDeclaration.criteria.map((c, i) => (
              <div key={i} className="rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                <p className="text-xs font-medium mb-0.5">{c.title}</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{c.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Типичные ошибки:</p>
          {wigDeclaration.mistakes.map((m, i) => (
            <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>✗ {m}</p>
          ))}
          <div className="mt-3">
            <LinkBtn linkKey="wigDeclaration" variant="ghost">Скачать шаблон декларации</LinkBtn>
          </div>
        </Card>
      </div>

      {/* Control Panel */}
      <div>
        <SectionLabel>Приборы контроля</SectionLabel>
        <Card>
          <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{controlPanel.purpose}</p>
          {controlPanel.categories.map((cat, ci) => (
            <div key={ci} className="mb-3">
              <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>{cat.title}</p>
              <div className="space-y-1">
                {cat.metrics.map((m, mi) => (
                  <div key={mi} className="flex justify-between text-xs px-2 py-1.5 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{m.name}</span>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>{m.formula}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-xs font-medium mb-2 mt-3" style={{ color: 'var(--text-muted)' }}>Правила:</p>
          {controlPanel.rules.map((r, i) => (
            <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {r}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-3">
            {controlPanel.templates.map((t, i) => (
              <LinkBtn key={i} linkKey={t.linkKey} variant="ghost">{t.title}</LinkBtn>
            ))}
          </div>
        </Card>
      </div>

      {/* Roles */}
      <div>
        <SectionLabel>Роли в программе</SectionLabel>
        <div className="space-y-2">
          {roles.map((role, i) => (
            <Accordion key={i} title={role.title}>
              <p className="text-xs mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{role.description}</p>
              {role.responsibilities.map((r, ri) => (
                <p key={ri} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {r}</p>
              ))}
            </Accordion>
          ))}
        </div>
      </div>

      {/* Meeting Cycle */}
      <div>
        <SectionLabel>Структура встречи</SectionLabel>
        <Card>
          <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>{meetingCycle.overview}</p>
          {meetingCycle.stages.map((stage, i) => (
            <div key={i} className="mb-3 pb-3" style={{ borderBottom: i < meetingCycle.stages.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-xs font-medium">{stage.title}</p>
                <span className="text-xs" style={{ color: 'var(--cyan)' }}>{stage.duration}</span>
              </div>
              <p className="text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>{stage.description}</p>
              {stage.questions.map((q, qi) => (
                <p key={qi} className="text-xs" style={{ color: 'var(--text-muted)' }}>— {q}</p>
              ))}
            </div>
          ))}
          <div className="rounded-lg p-3 mt-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Ритм встреч:</p>
            <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>Мес 1: {meetingCycle.rhythm.month1}</p>
            <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Мес 2–6: {meetingCycle.rhythm.months26}</p>
            {meetingCycle.rhythm.additional.map((a, i) => (
              <p key={i} className="text-xs" style={{ color: 'var(--text-muted)' }}>• {a}</p>
            ))}
          </div>
        </Card>
      </div>

      {/* Rules */}
      <div>
        <SectionLabel>Правила ULTIMA</SectionLabel>
        <Card>
          <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Принципы:</p>
          {rules.principles.map((p, i) => (
            <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {p}</p>
          ))}
          <p className="text-xs font-medium mt-3 mb-2" style={{ color: 'var(--text-muted)' }}>5 правил дисциплины:</p>
          {rules.discipline.map((d, i) => (
            <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>{i + 1}. {d}</p>
          ))}
          <p className="text-xs font-medium mt-3 mb-2" style={{ color: '#f87171' }}>Последствия нарушений:</p>
          {rules.consequences.map((c, i) => (
            <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {c}</p>
          ))}
          <div className="mt-3">
            <LinkBtn linkKey={rules.fullRulesLink} variant="ghost">Полные правила в Notion</LinkBtn>
          </div>
        </Card>
      </div>

    </div>
  )
}
