// ═══════════════════════════════════════════════════
// ULTIMA 9.0 — ONBOARDING PORTAL
// Single source of truth for all content and links
// ═══════════════════════════════════════════════════

const content = {

  // ─── LINKS ──────────────────────────────────────
  links: {
    // Документы
    nda: 'https://drive.google.com/file/d/1loZLTyAOv4n86nBAZN3OTWQf_3yv7oYn/view',

    // Шаблон презентации к СС (новый 9.0)
    ssTemplate: 'https://docs.google.com/presentation/d/1aGPjR50FmMKzS2vYGmhF8_8yOK-CYdT435dnHdNesqs/edit?usp=sharing',

    // Шаблон Точка А и Б для видео-визитки
    abTemplate: 'https://docs.google.com/presentation/d/1z_oHesd8fBq88aRzIpjaTCGa8-yCgw8ViFpYUsNJIAY/edit?slide=id.g3147509ae09_1_0#slide=id.g3147509ae09_1_0',

    // AI-наставник для проверки СС (прямая ссылка на GPT)
    aiMentor: 'https://chatgpt.com/g/g-69d4ead5867881918b9b1fcb1158c1ad-ii-nastavnik-nechto-ultima-dlia-podgotovki-k-ss',

    // GPT-ассистент по оцифровке бизнеса
    digitizeGpt: '#', // TODO: ссылка на GPT по оцифровке (создаём позже)

    // Калькуляторы
    unitEconomics: 'https://catherineyefi.github.io/ultima-unit-calculator/',
    decomp: 'https://catherineyefi.github.io/Decomp_calcul/',
  },

  // ─── CHECKLIST ──────────────────────────────────
  checklist: {
    baseSteps: [
      {
        id: 'nda',
        title: 'Подписать NDA',
        sub: 'Договор о неразглашении и организационные документы',
        linkText: 'Открыть документы',
        linkKey: 'nda',
        linkColor: 'blue',
      },
      {
        id: 'chats',
        title: 'Вступить в чаты группы',
        sub: 'Ссылки пришлём в рабочий чат',
        linkText: null,
        linkKey: null,
      },
      {
        id: 'ab',
        title: 'Заполнить шаблон «Точка А и Б»',
        sub: '3 слайда — основа для видео-визитки',
        hint: [
          'Слайд 1 — имя, название десятки, фото',
          'Слайд 2 — точка А: что сейчас в бизнесе и жизни',
          'Слайд 3 — точка Б: что будет через 10 недель',
        ],
        linkText: 'Скачать шаблон',
        linkKey: 'abTemplate',
        linkColor: 'green',
      },
      {
        id: 'video',
        title: 'Записать видео-визитку',
        sub: 'До 2 минут — по заполненным слайдам. Рассказываешь о себе и своём бизнесе.',
        linkText: null,
        linkKey: null,
      },
    ],
    ssStep: {
      id: 'ss',
      title: 'Подготовить материалы для Start-СС',
      sub: '3 встречи с БИ + работа над презентацией',
    },
  },

  // ─── PREP SS ────────────────────────────────────
  prepSS: {
    steps: [
      {
        num: '1',
        title: 'Скачай шаблон презентации',
        desc: 'Шаблон 9.0 — 17 слайдов. Скачай до первой встречи с БИ.',
        links: [
          { text: 'Шаблон → Google Slides', key: 'ssTemplate', style: 'blue' },
        ],
        tag: null,
      },
      {
        num: '2',
        title: 'Встреча с БИ №1',
        desc: 'БИ объясняет слайды 1–10 и даёт задание: заполнить их до следующей встречи.',
        tag: 'групповая, 1.5 часа',
        links: [],
      },
      {
        num: '3',
        title: 'Заполни слайды 1–10 самостоятельно',
        desc: 'Нужны реальные цифры: выручка, расходы, команда, метрики.',
        tag: null,
        links: [],
        fork: {
          label: 'Застрял? Нет цифр?',
          title: 'GPT-ассистент по оцифровке',
          desc: 'Поможет собрать P&L, ДДС и метрики за 30–40 мин. Важно самому понять откуда каждая цифра — не делегируй полностью.',
          linkText: 'Открыть GPT',
          linkKey: 'digitizeGpt',
        },
      },
      {
        num: '4',
        title: 'Встреча с БИ №2',
        desc: 'Разбор слайдов 1–10, работа над слайдами 11–17.',
        tag: 'групповая, 1.5 часа',
        links: [],
      },
      {
        num: '5',
        title: 'Встреча с БИ №3 — финализация',
        desc: 'Финальная доработка всей презентации.',
        tag: 'групповая, 1.5 часа',
        links: [],
      },
      {
        num: '6',
        title: 'AI-наставник — финальная проверка',
        desc: 'Строгий трекер проверит каждый слайд на 3 уровнях. Вердикт: «Готово» или список правок. Не иди на СС без этого шага.',
        tag: null,
        links: [
          { text: 'Открыть AI-наставника', key: 'aiMentor', style: 'blue' },
        ],
      },
    ],
  },

  // ─── MATERIALS ──────────────────────────────────
  materials: {
    sections: [
      {
        title: 'Документы',
        items: [
          { label: 'Договор и НДА', title: 'Документы участника', linkKey: 'nda' },
          { label: 'Шаблон', title: 'Точка А и Б (3 слайда)', linkKey: 'abTemplate' },
          { label: 'Презентация к Start-СС', title: 'Шаблон 9.0', linkKey: 'ssTemplate' },
        ],
      },
      {
        title: 'AI-ассистенты',
        items: [
          { label: 'Обновлён', title: 'GPT: AI-наставник для проверки СС', linkKey: 'aiMentor', badge: 'updated' },
          { label: 'Новый', title: 'GPT: Оцифровка бизнеса', linkKey: 'digitizeGpt', badge: 'new' },
        ],
      },
      {
        title: 'Калькуляторы',
        items: [
          { label: 'Калькулятор', title: 'Unit Economics', linkKey: 'unitEconomics' },
          { label: 'Калькулятор', title: 'Декомпозиция цели', linkKey: 'decomp' },
        ],
      },
      {
        title: 'Шаблоны',
        items: [
          { label: 'Таблица', title: 'P&L weekly', linkKey: null },
          { label: 'Таблица', title: 'ДДС-прогноз', linkKey: null },
          { label: 'Шаблон', title: 'KPI-карта и мотивация', linkKey: null },
          { label: 'Шаблон', title: 'WIG-декларация', linkKey: null },
        ],
      },
    ],
  },

}

export default content
