import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import content from '../../data/content.js'

// ─── Глоссарий аккордеон ────────────────────────────────
function GlossaryItem({ term, definition, example }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="mb-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-150"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-xs font-medium" style={{ color: '#22d3ee' }}>
          {term}
        </span>
        {open
          ? <ChevronUp size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          : <ChevronDown size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
        }
      </div>
      {open && (
        <div className="px-4 pb-3">
          <p
            className="text-xs leading-relaxed mb-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {definition}
          </p>
          <p
            className="text-xs px-2.5 py-2 rounded-lg"
            style={{
              background: 'rgba(34,211,238,0.05)',
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

// ─── Данные таймлайна ────────────────────────────────────
const STAGES = [
  {
    label: 'Онбординг',
    duration: '2–3 недели',
    description: '3 встречи с БИ, сбор фактов и цифр, подготовка всех материалов для Start-СС.',
  },
  {
    label: 'Start-СС',
    duration: '2 дня offline',
    description: 'Определение WIG, приборов контроля и дорожной карты на 6 месяцев. Вся группа + трекер.',
  },
  {
    label: '6 мес. работы',
    duration: '6 месяцев',
    description: 'Встречи раз в 2 недели, золотые задачи, бадди-поддержка, еженедельное обновление метрик.',
  },
  {
    label: 'Final-СС',
    duration: '1 день',
    description: 'Защита результатов, анализ итогов, планирование нового цикла роста.',
  },
]

// ─── Статистики ─────────────────────────────────────────
const STATS = [
  { num: '6', unit: 'мес', label: 'длина программы' },
  { num: '8', unit: '',    label: 'участников в группе' },
  { num: '2', unit: '',    label: 'стратсессии' },
  { num: '2', unit: 'нед', label: 'ритм встреч' },
]

// ─── Главный компонент ───────────────────────────────────
export default function TabAbout() {
  const [activeStage, setActiveStage] = useState(1)
  const { about, glossary } = content
  const stage = STAGES[activeStage]

  return (
    <div className="space-y-4">

      {/* ── HERO ─────────────────────────────────────── */}
      <div
        className="rounded-2xl px-5 py-6 text-center"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs tracking-widest mb-3 uppercase"
          style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
        >
          ULTIMA 9.0 — твёрдый контур Нечто
        </p>

        {/* Headline */}
        <h1 className="text-xl font-medium mb-3 leading-snug">
          6 месяцев.{' '}
          <br />
          Один{' '}
          <span style={{ color: '#22d3ee' }}>WIG</span>
          .{' '}
          Система неизбежности.
        </h1>

        {/* Sub */}
        <p
          className="text-xs leading-relaxed mb-4 mx-auto"
          style={{ color: 'var(--text-secondary)', maxWidth: 300 }}
        >
          {about.what}
        </p>

        {/* Criteria pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}
          >
            Доход от{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>300 тыс/мес</span>
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}
          >
            Команда от{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>3 человек</span>
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}
          >
            Группа{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>8 участников</span>
          </span>
        </div>

        {/* NOT block */}
        <p
          className="text-xs leading-relaxed px-4 py-2.5 rounded-xl text-left"
          style={{
            color: 'var(--text-secondary)',
            background: 'rgba(255,255,255,0.03)',
            borderLeft: '2px solid rgba(255,255,255,0.12)',
          }}
        >
          {about.whatNot}
        </p>
      </div>

      {/* ── STATS ────────────────────────────────────── */}
      <div className="grid grid-cols-4 gap-2">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="rounded-xl py-3 px-2 text-center"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p className="font-medium leading-none mb-1" style={{ fontSize: 20 }}>
              {s.num}
              {s.unit && (
                <span className="text-xs font-normal" style={{ color: 'var(--text-muted)' }}>
                  {s.unit}
                </span>
              )}
            </p>
            <p className="text-xs leading-tight" style={{ color: 'var(--text-secondary)', fontSize: 10 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <div>
        <p
          className="text-xs font-medium mb-3 tracking-widest uppercase"
          style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          Роудмап сезона
        </p>

        {/* Track */}
        <div className="relative px-2">
          {/* Horizontal line */}
          <div
            className="absolute"
            style={{
              top: 14,
              left: 28,
              right: 28,
              height: 1,
              background: 'rgba(255,255,255,0.1)',
            }}
          />

          {/* Dots row */}
          <div className="grid grid-cols-4 relative" style={{ zIndex: 1 }}>
            {STAGES.map((s, i) => {
              const isDone = i < activeStage
              const isActive = i === activeStage
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 cursor-pointer"
                  onClick={() => setActiveStage(i)}
                >
                  <div
                    className="flex items-center justify-center rounded-full text-xs font-medium transition-all duration-200"
                    style={{
                      width: 28,
                      height: 28,
                      flexShrink: 0,
                      background: isDone
                        ? '#22d3ee'
                        : isActive
                        ? 'rgba(34,211,238,0.15)'
                        : 'rgba(255,255,255,0.06)',
                      border: isDone
                        ? '1.5px solid #22d3ee'
                        : isActive
                        ? '1.5px solid #22d3ee'
                        : '1.5px solid rgba(255,255,255,0.15)',
                      color: isDone
                        ? '#080c14'
                        : isActive
                        ? '#22d3ee'
                        : 'var(--text-muted)',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-center"
                    style={{
                      fontSize: 10,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                      lineHeight: 1.3,
                      maxWidth: 64,
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detail card */}
        <div
          className="mt-3 rounded-xl p-4"
          style={{
            background: 'rgba(34,211,238,0.04)',
            border: '1px solid rgba(34,211,238,0.2)',
          }}
        >
          <div className="flex items-baseline gap-2 mb-1.5">
            <p className="text-sm font-medium">{stage.label}</p>
            <span className="text-xs" style={{ color: '#22d3ee' }}>{stage.duration}</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {stage.description}
          </p>
        </div>
      </div>

      {/* ── GLOSSARY ─────────────────────────────────── */}
      <div>
        <p
          className="text-xs font-medium mb-3 tracking-widest uppercase"
          style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          Словарь терминов
        </p>
        {glossary.map(item => (
          <GlossaryItem key={item.term} {...item} />
        ))}
      </div>

    </div>
  )
}