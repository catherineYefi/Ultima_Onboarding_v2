import React from 'react'

export default function TabBar({ tabs, activeTab, setActiveTab }) {
  return (
    <div
      className="tab-bar flex overflow-x-auto"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'rgba(13, 19, 33, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-shrink-0 px-4 py-3 text-xs font-medium transition-all duration-150 whitespace-nowrap"
            style={{
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: isActive
                ? '2px solid var(--cyan)'
                : '2px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
