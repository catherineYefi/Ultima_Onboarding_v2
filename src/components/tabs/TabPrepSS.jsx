import React from 'react'
import { Note, StepCircle, Connector, LinkBtn, Tag } from '../UI.jsx'
import content from '../../data/content.js'

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
        className="text-xs font-medium mb-1 tracking-wider"
        style={{ color: '#4ade80', letterSpacing: '0.06em' }}
      >
        {fork.label.toUpperCase()}
      </p>
      <p className="text-sm font-medium mb-1">{fork.title}</p>
      <p className="text-xs mb-2.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {fork.desc}
      </p>
      <LinkBtn linkKey={fork.linkKey} variant="green">{fork.linkText}</LinkBtn>
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
            <div className="flex flex-col items-center">
              <StepCircle num={step.num} />
              {i < steps.length - 1 && (
                <div
                  style={{ width: 1, flex: 1, minHeight: 16, background: 'var(--border)', marginTop: 4 }}
                />
              )}
            </div>

            <div className="pb-5 flex-1 min-w-0">
              <p className="text-sm font-medium mb-1">{step.title}</p>
              <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                {step.desc}
              </p>

              {/* Tag */}
              {step.tag && (
                <Tag variant="default">{step.tag}</Tag>
              )}

              {/* Links */}
              {step.links && step.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {step.links.map((link, li) => (
                    <LinkBtn key={li} linkKey={link.key} variant={link.style || 'blue'}>
                      {link.text}
                    </LinkBtn>
                  ))}
                </div>
              )}

              {/* Fork */}
              {step.fork && <Fork fork={step.fork} />}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
