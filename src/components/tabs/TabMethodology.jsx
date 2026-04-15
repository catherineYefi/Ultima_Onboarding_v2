import React from 'react'
import { Card, Note } from '../UI.jsx'

const items = [
  {
    title: '4DX',
    text: '4 дисциплины исполнения: WIG, Lead/Lag-метрики, Scoreboard, Accountability-встречи.',
  },
  {
    title: 'WIG-декларация',
    text: 'Wildly Important Goal — главная цель сезона. Формат: «От X до Y к дате». Шаблон и примеры внутри.',
  },
  {
    title: 'Цикл встреч',
    text: 'Трекер-встреча раз в 2 нед, лидер-встреча раз в 2 нед, бадди-созвон. Как устроена каждая и что приносить.',
  },
  {
    title: 'Твёрдые инструменты',
    text: '8 инструментов: P&L weekly, ДДС-прогноз, оргструктура, KPI-карта, CRM-воронка, стандарты качества, воронка найма.',
  },
  {
    title: 'Роли в программе',
    text: 'Трекер, лидер группы, бизнес-инженер, адвайзери-борд — зоны ответственности каждого.',
  },
  {
    title: 'Правила Ультимы',
    text: 'Посещаемость, дедлайны, конфиденциальность, критерии кейса, правила десятки.',
  },
]

export default function TabMethodology() {
  return (
    <div className="space-y-4">
      <Note>
        Справочник — не обязательно читать всё сразу. Возвращайся когда нужно.
      </Note>
      <div className="space-y-3">
        {items.map(item => (
          <Card key={item.title}>
            <p className="text-sm font-medium mb-1">{item.title}</p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}
