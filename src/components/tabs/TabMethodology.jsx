import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import content from '../../data/content.js'

// ─── Иконки ─────────────────────────────────────────────
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconTarget() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="8" width="3" height="6" rx="1" fill="currentColor"/>
      <rect x="6.5" y="5" width="3" height="9" rx="1" fill="currentColor"/>
      <rect x="11" y="2" width="3" height="12" rx="1" fill="currentColor"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1.5 13c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 9c1.5.3 2.5 1.5 2.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 1v4M11 1v4M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconRules() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2l1.5 4.5H14l-3.7 2.7 1.4 4.3L8 11l-3.7 2.5 1.4-4.3L2 6.5h4.5z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Конфиг карточек хаба ───────────────────────────────
const CARDS = [
  {
    key: '4dx',
    title: '4DX',
    sub: 'Основа работы в программе',
    tag: 'методология',
    iconBg: 'rgba(34,211,238,0.12)',
    iconColor: '#22d3ee',
    Icon: IconClock,
  },
  {
    key: 'wig',
    title: 'WIG-декларация',
    sub: 'Главная цель на 6 месяцев',
    tag: 'цель',
    iconBg: 'rgba(74,222,128,0.12)',
    iconColor: '#4ade80',
    Icon: IconTarget,
  },
  {
    key: 'panel',
    title: 'Приборы контроля',
    sub: 'Метрики и дашборды',
    tag: 'метрики',
    iconBg: 'rgba(251,191,36,0.12)',
    iconColor: '#fbbf24',
    Icon: IconChart,
  },
  {
    key: 'roles',
    title: 'Роли в программе',
    sub: 'Кто за что отвечает',
    tag: 'команда',
    iconBg: 'rgba(255,255,255,0.07)',
    iconColor: 'var(--text-secondary)',
    Icon: IconUsers,
  },
  {
    key: 'meeting',
    title: 'Структура встречи',
    sub: '30–45 мин, 4 блока, ритм',
    tag: 'ритм',
    iconBg: 'rgba(255,255,255,0.07)',
    iconColor: 'var(--text-secondary)',
    Icon: IconCalendar,
  },
  {
    key: 'rules',
    title: 'Правила',
    sub: 'Дисциплина и последствия',
    tag: 'регламент',
    iconBg: 'rgba(248,113,113,0.12)',
    iconColor: '#f87171',
    Icon: IconRules,
  },
]

// ─── Кнопка-ссылка ──────────────────────────────────────
function LinkBtn({ linkKey, children }) {
  const url = content.links[linkKey]
  if (!url || url === '#') return null
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg mr-2 mt-2"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--text-secondary)',
      }}
    >
      {children}
      <ExternalLink size={11} />
    </a>
  )
}

// ─── Детальные панели ────────────────────────────────────
function Detail4DX() {
  const { fourDX } = content
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div>
      <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {fourDX.intro}
      </p>
      {fourDX.disciplines.map((d, i) => (
        <div
          key={d.number}
          className="mb-2 rounded-xl overflow-hidden cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        >
          <div className="flex items-center gap-3 px-3 py-2.5">
            <span
              className="flex-shrink-0 text-xs font-bold flex items-center justify-center rounded-lg"
              style={{ width: 24, height: 24, background: 'rgba(34,211,238,0.12)', color: '#22d3ee' }}
            >
              {d.number}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium">{d.title}</p>
              <p className="text-xs" style={{ color: '#22d3ee' }}>{d.subtitle}</p>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>
              {openIdx === i ? '▲' : '▼'}
            </span>
          </div>
          {openIdx === i && (
            <div className="px-3 pb-3">
              <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                {d.description}
              </p>
              <div
                className="text-xs px-3 py-2 rounded-lg mb-2"
                style={{ background: 'rgba(34,211,238,0.06)', color: 'var(--text-secondary)' }}
              >
                В ULTIMA: {d.inUltima}
              </div>
              <p className="text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Формула:{' '}
                <span style={{ color: '#22d3ee', fontFamily: 'monospace' }}>{d.formula}</span>
              </p>
              {d.examples.map((ex, ei) => (
                <p key={ei} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
                  → {ex}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="text-xs mt-3 px-3 py-2 rounded-lg" style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', fontStyle: 'italic' }}>
        {fourDX.note}
      </p>
    </div>
  )
}

function DetailWIG() {
  const { wigDeclaration } = content
  return (
    <div>
      <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
        {wigDeclaration.definition}
      </p>
      <div
        className="rounded-xl px-4 py-3 mb-4"
        style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)' }}
      >
        <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Формула:</p>
        <p className="text-sm font-medium mb-1" style={{ color: '#4ade80' }}>
          {wigDeclaration.formula.template}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          Пример: {wigDeclaration.formula.example}
        </p>
      </div>
      <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
        5 критериев хорошего WIG:
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {wigDeclaration.criteria.map((c, i) => (
          <div
            key={i}
            className="rounded-lg p-2.5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
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
        <LinkBtn linkKey="wigDeclaration">Скачать шаблон декларации</LinkBtn>
      </div>
    </div>
  )
}

function DetailPanel() {
  const { controlPanel } = content
  return (
    <div>
      <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
        {controlPanel.purpose}
      </p>
      {controlPanel.categories.map((cat, ci) => (
        <div key={ci} className="mb-3">
          <p className="text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>
            {cat.title}
          </p>
          {cat.metrics.map((m, mi) => (
            <div
              key={mi}
              className="flex justify-between text-xs px-2.5 py-2 rounded-lg mb-1"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>{m.name}</span>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: 11 }}>
                {m.formula}
              </span>
            </div>
          ))}
        </div>
      ))}
      <p className="text-xs font-medium mt-3 mb-2" style={{ color: 'var(--text-muted)' }}>Правила:</p>
      {controlPanel.rules.map((r, i) => (
        <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {r}</p>
      ))}
      <div className="mt-3 flex flex-wrap">
        <LinkBtn linkKey="plDashboard">P&L Dashboard</LinkBtn>
        <LinkBtn linkKey="marketingDashboard">Marketing Dashboard</LinkBtn>
      </div>
    </div>
  )
}

function DetailRoles() {
  const { roles } = content
  const [openIdx, setOpenIdx] = useState(0)
  const initials = ['Т', 'Л', 'Б', 'А']
  const colors = [
    { bg: 'rgba(34,211,238,0.12)', color: '#22d3ee' },
    { bg: 'rgba(74,222,128,0.12)', color: '#4ade80' },
    { bg: 'rgba(251,191,36,0.12)', color: '#fbbf24' },
    { bg: 'rgba(255,255,255,0.07)', color: 'var(--text-secondary)' },
  ]
  return (
    <div>
      {roles.map((role, i) => (
        <div
          key={i}
          className="mb-2 rounded-xl overflow-hidden cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        >
          <div className="flex items-center gap-3 px-3 py-2.5">
            <span
              className="flex-shrink-0 flex items-center justify-center rounded-lg text-xs font-bold"
              style={{ width: 28, height: 28, background: colors[i].bg, color: colors[i].color }}
            >
              {initials[i]}
            </span>
            <div className="flex-1">
              <p className="text-xs font-medium">{role.title}</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{role.description}</p>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>
              {openIdx === i ? '▲' : '▼'}
            </span>
          </div>
          {openIdx === i && (
            <div className="px-3 pb-3">
              {role.responsibilities.map((r, ri) => (
                <p key={ri} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {r}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function DetailMeeting() {
  const { meetingCycle } = content
  return (
    <div>
      <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
        {meetingCycle.overview}
      </p>
      {meetingCycle.stages.map((stage, i) => (
        <div
          key={i}
          className="mb-2 rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex justify-between items-baseline mb-1">
            <p className="text-xs font-medium">{stage.title}</p>
            <span className="text-xs" style={{ color: '#22d3ee' }}>{stage.duration}</span>
          </div>
          <p className="text-xs mb-1.5" style={{ color: 'var(--text-secondary)' }}>{stage.description}</p>
          {stage.questions.map((q, qi) => (
            <p key={qi} className="text-xs" style={{ color: 'var(--text-muted)' }}>— {q}</p>
          ))}
        </div>
      ))}
      <div
        className="mt-3 rounded-xl p-3"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
          Мес 1: {meetingCycle.rhythm.month1}
        </p>
        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
          Мес 2–6: {meetingCycle.rhythm.months26}
        </p>
        {meetingCycle.rhythm.additional.map((a, i) => (
          <p key={i} className="text-xs" style={{ color: 'var(--text-muted)' }}>• {a}</p>
        ))}
      </div>
    </div>
  )
}

function DetailRules() {
  const { rules } = content
  return (
    <div>
      <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Принципы:</p>
      {rules.principles.map((p, i) => (
        <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {p}</p>
      ))}
      <p className="text-xs font-medium mt-4 mb-2" style={{ color: 'var(--text-muted)' }}>
        5 правил дисциплины:
      </p>
      {rules.discipline.map((d, i) => (
        <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>{i + 1}. {d}</p>
      ))}
      <p className="text-xs font-medium mt-4 mb-2" style={{ color: '#f87171' }}>
        Последствия нарушений:
      </p>
      {rules.consequences.map((c, i) => (
        <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>• {c}</p>
      ))}
    </div>
  )
}

const DETAILS = {
  '4dx':    <Detail4DX />,
  wig:      <DetailWIG />,
  panel:    <DetailPanel />,
  roles:    <DetailRoles />,
  meeting:  <DetailMeeting />,
  rules:    <DetailRules />,
}

// ─── Главный компонент ───────────────────────────────────
export default function TabMethodology() {
  const [active, setActive] = useState('4dx')
  const activeCard = CARDS.find(c => c.key === active)

  return (
    <div className="space-y-4">

      {/* Заметка */}
      <p className="text-xs px-3 py-2.5 rounded-lg" style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
        Справочник — возвращайся когда нужно. Нажми на раздел чтобы открыть.
      </p>

      {/* Сетка карточек 2×3 */}
      <div className="grid grid-cols-2 gap-2">
        {CARDS.map(card => {
          const isActive = card.key === active
          return (
            <div
              key={card.key}
              onClick={() => setActive(card.key)}
              className="rounded-xl p-3.5 cursor-pointer transition-all duration-150"
              style={{
                background: isActive ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.04)',
                border: isActive
                  ? '1px solid rgba(34,211,238,0.3)'
                  : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Иконка */}
              <div
                className="flex items-center justify-center rounded-lg mb-2.5"
                style={{ width: 32, height: 32, background: card.iconBg, color: card.iconColor }}
              >
                <card.Icon />
              </div>
              {/* Заголовок */}
              <p className="text-xs font-medium mb-0.5">{card.title}</p>
              {/* Описание */}
              <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                {card.sub}
              </p>
              {/* Тег */}
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: isActive ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.06)',
                  color: isActive ? '#22d3ee' : 'var(--text-muted)',
                }}
              >
                {card.tag}
              </span>
            </div>
          )
        })}
      </div>

      {/* Детальная панель */}
      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Заголовок панели */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{ width: 28, height: 28, background: activeCard.iconBg, color: activeCard.iconColor }}
          >
            <activeCard.Icon />
          </div>
          <p className="text-sm font-medium">{activeCard.title}</p>
        </div>

        {/* Контент */}
        {DETAILS[active]}
      </div>

    </div>
  )
}