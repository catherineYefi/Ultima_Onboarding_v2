import React from 'react'
import { Card, SectionLabel } from '../UI.jsx'

const roadmap = ['Онбординг', 'Start-СС', '24 нед. спринтов', 'Final-СС']

const infoCards = [
  {
    title: 'Что такое Ultima',
    text: 'Твёрдый контур Нечто. Давление на выручку через спринты, трекеров и формат группы. Для тех, кому нужен результат, а не просто поддержка.',
  },
  {
    title: 'Формат работы',
    text: '6 месяцев, встречи раз в 2 недели, группа 8 человек, трекер + лидер группы. Два ключевых события: Start-СС и Final-СС.',
  },
  {
    title: 'Команда и роли',
    text: 'Трекер — ведёт процесс. Лидер группы — держит командный дух. Бизнес-инженер — готовит к СС. Адвайзери-борд — экспертный совет.',
  },
  {
    title: 'Глоссарий',
    text: 'WIG — главная цель сезона. Спринт — рабочая неделя. Декларация — твои обязательства. Десятка — твоя группа. P&L — управленческий отчёт.',
  },
]

export default function TabAbout() {
  return (
    <div className="space-y-5">

      {/* Roadmap */}
      <Card>
        <p className="text-sm font-medium mb-4">Роудмап сезона</p>
        <div className="flex items-center gap-2 flex-wrap">
          {roadmap.map((step, i) => (
            <React.Fragment key={step}>
              <span
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {step}
              </span>
              {i < roadmap.length - 1 && (
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>

      {/* Info cards 2x2 */}
      <div>
        <SectionLabel>О программе</SectionLabel>
        <div className="grid grid-cols-1 gap-3">
          {infoCards.map(card => (
            <Card key={card.title}>
              <p className="text-sm font-medium mb-1.5">{card.title}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {card.text}
              </p>
            </Card>
          ))}
        </div>
      </div>

    </div>
  )
}
