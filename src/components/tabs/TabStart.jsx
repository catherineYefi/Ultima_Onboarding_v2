import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Card, SectionLabel, LinkBtn } from '../UI.jsx'
import content from '../../data/content.js'

export default function TabStart({ goToTab }) {
  return (
    <div className="space-y-5">

      {/* Hero */}
      <div
        className="rounded-2xl p-6 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(232,121,249,0.06) 100%)',
          border: '1px solid rgba(34,211,238,0.15)',
        }}
      >
        <p className="text-xs tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
          ДОБРО ПОЖАЛОВАТЬ
        </p>
        <h1 className="text-xl font-semibold mb-2">
          Ты в{' '}
          <span className="gradient-text">ULTIMA 9.0</span>
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Мы всё обсудили на встрече. Здесь — всё что нужно<br />
          для работы в программе. Начни с двух шагов ниже.
        </p>
      </div>

      {/* Urgent steps */}
      <div>
        <SectionLabel>Сделай прямо сейчас</SectionLabel>
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <p className="text-xs font-medium mb-1" style={{ color: '#fbbf24' }}>
              Шаг 1 — срочно
            </p>
            <p className="text-sm font-medium mb-1">Подпиши документы</p>
            <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
              НДА и все организационные документы
            </p>
            <LinkBtn linkKey="nda" variant="blue">Документы</LinkBtn>
          </Card>

          <Card>
            <p className="text-xs font-medium mb-1" style={{ color: '#fbbf24' }}>
              Шаг 2 — срочно
            </p>
            <p className="text-sm font-medium mb-1">Скачай презентацию к СС</p>
            <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
              Шаблон 9.0 — будешь заполнять с БИ
            </p>
            <LinkBtn linkKey="ssTemplate" variant="green">Google Slides</LinkBtn>
          </Card>
        </div>
      </div>

      {/* Next block */}
      <Card>
        <p className="text-sm font-medium mb-1.5">Дальше — подготовка к Start-СС</p>
        <p className="text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
          3 групповых встречи с БИ по 1.5 часа, затем AI-наставник для финальной
          проверки. Всё об этом — во вкладке «Подготовка к СС».
        </p>
        <button
          onClick={() => goToTab('prepss')}
          className="ext-link flex items-center gap-2 text-xs px-3 py-2 rounded-lg w-full"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
          }}
        >
          <span className="flex-1 text-left">Перейти к подготовке к СС</span>
          <ArrowRight size={14} />
        </button>
      </Card>

    </div>
  )
}
