import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import TabBar from './components/TabBar.jsx'
import TabStart from './components/tabs/TabStart.jsx'
import TabChecklist from './components/tabs/TabChecklist.jsx'
import TabAbout from './components/tabs/TabAbout.jsx'
import TabPrepSS from './components/tabs/TabPrepSS.jsx'
import TabMethodology from './components/tabs/TabMethodology.jsx'
import TabMaterials from './components/tabs/TabMaterials.jsx'

const TABS = [
  { id: 'start',      label: 'Старт' },
  { id: 'checklist',  label: 'Чек-лист' },
  { id: 'about',      label: 'Об Ультиме' },
  { id: 'prepss',     label: 'Подготовка к СС' },
  { id: 'method',     label: 'Методология' },
  { id: 'materials',  label: 'Все материалы' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('start')

  const goToTab = (id) => setActiveTab(id)

  const renderTab = () => {
    switch (activeTab) {
      case 'start':      return <TabStart goToTab={goToTab} />
      case 'checklist':  return <TabChecklist goToTab={goToTab} />
      case 'about':      return <TabAbout />
      case 'prepss':     return <TabPrepSS />
      case 'method':     return <TabMethodology />
      case 'materials':  return <TabMaterials />
      default:           return <TabStart goToTab={goToTab} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--navy-950)' }}>
      <Navbar />
      <TabBar tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
        <div className="fade-in" key={activeTab}>
          {renderTab()}
        </div>
      </main>
    </div>
  )
}
