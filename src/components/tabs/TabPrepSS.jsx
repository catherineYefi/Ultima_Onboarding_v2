import React from 'react'
import { Note, StepCircle, LinkBtn, Tag } from '../UI.jsx'
import content from '../../data/content.js'

// Блок-развилка "Нет цифр" для шага оцифровки
function Fork({ fork }) {
  return (
    <div
      className="mt-3 rounded-xl p-3"
      style={{
        background: 'rgba(74,222,128,0.06)',
        border: '1px solid rgba(74,222,128,0.15)',
      }}
    >
      <p
        className="text-xs font-medium mb-1 uppercase"
        style={{ color: '#4ade80', letterSpacing: '0.06em' }}
      >
        {fork.label}
      </p>
      <p className="text-sm font-medium mb-1">{fork.title}</p>
      <p
        className="text-xs mb-2.5 leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {fork.desc}
      </p>
      <LinkBtn linkKey={fork.linkKey} variant="green">
        {fork.linkText}
      </LinkBtn>
    </div>
  )
}

export default function TabPrepSS() {
  const steps = content.prepSS.steps

  return (
    <div>
      <Note>
        3 групповых встречи с БИ + самостоятельная работа между ними. Иди по шагам.
      </Note>

      {steps.map((step, i) => (
        <React.Fragment key={step.num}>
          <div className="flex gap-3">

            {/* Левая колонка: номер + вертикальная линия */}
            <div className="flex flex-col items-center">
              <StepCircle num={step.num} />
              {i < steps.length - 1 && (
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    minHeight: 16,
                    background: 'var(--border)',
                    marginTop: 4,
                  }}
                />
              )}
            </div>

            {/* Правая колонка: содержимое шага */}
            <div className="pb-5 flex-1 min-w-0">

              {/* Заголовок */}
              <p className="text-sm font-medium mb-1">{step.title}</p>

              {/* Описание */}
              <p
                className="text-xs leading-relaxed mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {step.desc}
              </p>

              {/* Тег (групповая встреча) */}
              {step.tag && (
                <Tag variant="default">{step.tag}</Tag>
              )}

              {/* Deliverables — что нужно подготовить */}
              {step.deliverables && step.deliverables.length > 0 && (
                <div
                  className="mt-2 rounded-lg p-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {step.deliverables.map((d, di) => (
                    <p
                      key={di}
                      className="text-xs mb-1 last:mb-0"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      • {d}
                    </p>
                  ))}
                </div>
              )}

              {/* Ссылки */}
              {step.links && step.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {step.links.map((link, li) => (
                    <LinkBtn
                      key={li}
                      linkKey={link.key}
                      variant={link.style || 'blue'}
                    >
                      {link.text}
                    </LinkBtn>
                  ))}
                </div>
              )}

              {/* Развилка GPT по оцифровке */}
              {step.fork && <Fork fork={step.fork} />}

            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
