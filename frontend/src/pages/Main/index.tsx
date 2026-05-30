import React, { useState } from 'react'
import { ClueMeLogo } from '../../components/Logo/Logo'
import {
  FileText,
  ChevronDown,
  Edit3,
  Trash2,
  Calendar,
  Globe,
  ChevronsDown,
  Thermometer,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  Send,
  Bot,
  Search,
  Database,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Star,
  Lightbulb,
} from 'lucide-react'
import { createInitialMaterialState, MaterialInput, type IMaterialState } from './componets/MaterialInput/MaterialInput'

interface ISourceItem {
  id: string
  type: 'text' | 'url' | 'file'
  title: string
  content: string
  format?: string
  date: string
}

const demoSources: ISourceItem[] = [
  {
    id: '1',
    type: 'text',
    title: 'Рост рынка AI в 2026 году',
    content: 'По данным аналитиков, мировой рынок искусственного интеллекта достиг $320 млрд. Ключевые драйверы: генеративные модели, автоматизация бизнес-процессов и AI-ассистенты. Прогноз на 2027 год — $450 млрд.',
    date: '15 мая 2026',
  },
  {
    id: '2',
    type: 'url',
    title: 'Новый закон о цифровых платформах',
    content: 'https://regulation.gov.ru/digital-platforms-2026',
    format: 'HTML',
    date: '14 мая 2026',
  },
  {
    id: '3',
    type: 'file',
    title: 'Квартальный отчёт продаж Q1',
    content: 'Выручка компании выросла на 24% по сравнению с прошлым кварталом. Лидеры продаж: продукт A (+32%), продукт B (+18%). Регион-лидер: Москва и Центральный округ.',
    format: 'XML',
    date: '12 мая 2026',
  },
  {
    id: '4',
    type: 'text',
    title: 'Интервью с CEO: стратегия на 2026',
    content: 'Генеральный директор объявил о запуске трёх новых продуктов и выходе на рынок Юго-Восточной Азии. Инвестиции в R&D увеличены вдвое. Компания нанимает 500 разработчиков.',
    date: '10 мая 2026',
  },
  {
    id: '5',
    type: 'url',
    title: 'Тренды финтеха: обзор ЦБ РФ',
    content: 'https://cbr.ru/analytics/fintech-trends-2026',
    format: 'HTML',
    date: '08 мая 2026',
  },
  {
    id: '6',
    type: 'text',
    title: 'Запуск ClueMe на рынке СНГ',
    content: 'AI-справочник ClueMe официально запущен. Первые клиенты отмечают точность ответов и удобство добавления источников. Доступны форматы: текст, URL, файлы HTML/XML/JSON/TXT.',
    date: '05 мая 2026',
  },
]

const SourceIcon: React.FC<{ type: ISourceItem['type'] }> = ({ type }) => {
  const iconProps = { size: 16, strokeWidth: 1.6 }
  switch (type) {
    case 'text': return <FileText {...iconProps} color="#00D2FF" />
    case 'url': return <Globe {...iconProps} color="#6C5CE7" />
    case 'file': return <FileText {...iconProps} color="#FFC048" />
  }
}

const ScrollHint: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col items-center gap-1.5 py-6" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
    <span className="font-mono text-[#6E6E8A] text-xs tracking-widest uppercase">{text}</span>
    <ChevronsDown size={16} strokeWidth={1.6} color="#6E6E8A" />
  </div>
)

const SlideSplash: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6">
    <div className="flex-1 flex flex-col items-center justify-center gap-8" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
      <div className="flex flex-col items-center gap-6">
        <div className="transform scale-125 sm:scale-150">
          <ClueMeLogo size={72} showText={false} />
        </div>
        <div className="text-center">
          <h1
            className="font-accent font-bold text-[#F0F0FF] leading-none"
            style={{ fontSize: 'clamp(36px, 9vw, 72px)', letterSpacing: '-0.03em' }}
          >
            ClueMe
          </h1>
          <p
            className="font-mono text-[#8A8AA0] tracking-widest uppercase mt-3"
            style={{ fontSize: 'clamp(11px, 1.8vw, 15px)', letterSpacing: '+0.2em' }}
          >
            MVP - AI справочник
          </p>
        </div>
      </div>
      <ScrollHint text="О проекте" />
    </div>
  </section>
)

const SlideAdd: React.FC = () => {
  const [material, setMaterial] = useState<IMaterialState>(createInitialMaterialState())

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2
            className="font-accent font-bold text-[#F0F0FF] leading-tight"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
          >
            Как это может работать
          </h2>
          <p
            className="font-primary text-[#8A8AA0] mt-3 max-w-lg mx-auto"
            style={{ fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.6 }}
          >
            Добавляем данные из любых источников — текст, ссылки или файлы.
            ClueMe будет использовать эту базу знаний как промт для выдачи ответов на вопросы AI Агенту
          </p>
        </div>

        <MaterialInput
          value={material}
          onChange={setMaterial}
          size="lg"
          label="Новый материал"
          hint={
            material.mode === 'text'
              ? 'Добавьте текст в базу знаний'
              : material.mode === 'url'
                ? 'Укажите ссылку на документ'
                : 'Загрузите файл HTML, XML, JSON или TXT'
          }
          placeholder={
            material.mode === 'text'
              ? 'Введите содержимое справочника...'
              : material.mode === 'url'
                ? 'https://example.com/documentation.html'
                : undefined
          }
        />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {[
            { format: 'HTML', color: '#FF6B9D' },
            { format: 'XML', color: '#FFC048' },
            { format: 'JSON', color: '#00D2FF' },
            { format: 'TXT', color: '#6C5CE7' },
          ].map(({ format, color }) => (
            <div key={format} className="flex items-center gap-2">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
              <span className="font-mono text-[#8A8AA0] text-xs tracking-wider">{format}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollHint text="Управление источниками" />
    </section>
  )
}

const SlideList: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const handleEdit = (source: ISourceItem) => {
    setEditingId(source.id)
    setEditValue(source.content)
    setExpandedId(source.id)
  }

  const handleSave = () => {
    setEditingId(null)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2
            className="font-accent font-bold text-[#F0F0FF] leading-tight"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
          >
            Управление источниками
          </h2>
          <p
            className="font-primary text-[#8A8AA0] mt-3 max-w-lg mx-auto"
            style={{ fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.6 }}
          >
            Каждый источник можно будет открыть, отредактировать или удалить.
            Полный контроль над базой знаний.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {demoSources.map((source, index) => {
            const isExpanded = expandedId === source.id
            const isEditing = editingId === source.id

            return (
              <div
                key={source.id}
                className="rounded-xl transition-all duration-300"
                style={{
                  border: isExpanded
                    ? '1px solid rgba(108, 92, 231, 0.25)'
                    : '1px solid rgba(240, 240, 255, 0.06)',
                  animation: `fadeInUp 0.4s ease-out ${index * 0.06}s both`,
                }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : source.id)}
                >
                  <SourceIcon type={source.type} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-[#F0F0FF] truncate">{source.title}</div>
                    <div className="font-mono text-xs text-[#6E6E8A] mt-0.5 flex items-center gap-2">
                      <Calendar size={10} strokeWidth={1.6} />
                      {source.date}
                      {source.format && (
                        <span style={{ color: source.format === 'HTML' ? '#FF6B9D' : '#FFC048' }}>
                          • {source.format}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleEdit(source) }}
                      className="p-1.5 rounded-lg transition-all"
                    >
                      <Edit3 size={13} strokeWidth={1.6} color="#8A8AA0" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation() }}
                      className="p-1.5 rounded-lg transition-all"
                    >
                      <Trash2 size={13} strokeWidth={1.6} color="#FF4757" />
                    </button>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.8}
                      color="#8A8AA0"
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4" style={{ animation: 'fadeIn 0.25s ease-out' }}>
                    <div
                      className="rounded-lg p-4 text-sm"
                      style={{
                        border: '1px solid rgba(240, 240, 255, 0.05)',
                        color: '#E4E4F0',
                        lineHeight: 1.7,
                      }}
                    >
                      {isEditing ? (
                        <div>
                          <textarea
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full outline-none resize-none text-sm rounded-lg p-3"
                            style={{
                              color: '#F0F0FF',
                              lineHeight: 1.7,
                              minHeight: 80,
                              border: '1px solid rgba(240, 240, 255, 0.08)',
                            }}
                            autoFocus
                          />
                          <div className="flex justify-end gap-2 mt-3">
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ color: '#8A8AA0' }}
                            >
                              Отмена
                            </button>
                            <button
                              onClick={handleSave}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ background: '#6C5CE7', color: '#F0F0FF' }}
                            >
                              Сохранить
                            </button>
                          </div>
                        </div>
                      ) : (
                        source.content
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <ScrollHint text="Выбор модели" />
    </section>
  )
}

const SlideModel: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('yandexgpt')

  const models = [
    {
      id: 'yandexgpt',
      name: 'YandexGPT 5 Pro',
      badge: 'Рекомендую',
      temp: '0',
      price: 'Низкая',
      quality: '5/5',
      description: 'Лучшее соотношение цены и качества для русскоязычных задач. Быстрый, точный, понимает контекст. Мой выбор по умолчанию.',
      color: '#6C5CE7',
    },
    {
      id: 'gpt',
      name: 'GPT-4o',
      temp: '0–1',
      price: 'Высокая',
      quality: '5/5',
      description: 'Флагманская модель OpenAI. Высочайшее качество. Если нужен максимум — обсудим и подключим.',
      color: '#00D2FF',
    },
    {
      id: 'copilot',
      name: 'Microsoft Copilot',
      temp: '0–1',
      price: 'Средняя',
      quality: '4/5',
      description: 'Интеграция с Microsoft 365. Хорош для корпоративных клиентов в экосистеме Microsoft.',
      color: '#FFC048',
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      temp: '0–1.5',
      price: 'Низкая',
      quality: '4/5',
      description: 'Открытая модель. Сильна в математике и коде. Вариант для технических команд.',
      color: '#FF6B9D',
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lightbulb size={22} strokeWidth={1.6} color="#FFC048" />
            <span className="font-mono text-[#6E6E8A] text-xs tracking-widest uppercase">Предложение</span>
          </div>
          <h2
            className="font-accent font-bold text-[#F0F0FF] leading-tight"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
          >
            Выбираем ИИ-модель вместе
          </h2>
          <p
            className="font-primary text-[#8A8AA0] mt-3 max-w-lg mx-auto"
            style={{ fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.6 }}
          >
            Я рекомендую YandexGPT 5 Pro как оптимальный вариант.
            Но готов реализовать на любой другой модели — договоримся и выберем лучшую под ваши задачи.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {models.map((model, index) => {
            const isSelected = selectedModel === model.id
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className="rounded-xl p-5 text-left transition-all duration-300 w-full"
                style={{
                  border: isSelected
                    ? `1px solid ${model.color}40`
                    : '1px solid rgba(240, 240, 255, 0.06)',
                  animation: `fadeInUp 0.4s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="font-accent font-bold text-base sm:text-lg"
                        style={{ color: isSelected ? model.color : '#F0F0FF' }}
                      >
                        {model.name}
                      </span>
                      {model.badge && (
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: `${model.color}20`,
                            color: model.color,
                            border: `1px solid ${model.color}30`,
                          }}
                        >
                          {model.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-primary text-[#8A8AA0] mt-1.5 text-sm leading-relaxed">
                      {model.description}
                    </p>
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <Thermometer size={13} strokeWidth={1.6} color="#8A8AA0" />
                        <span className="font-mono text-xs text-[#8A8AA0]">t° = {model.temp}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star size={13} strokeWidth={1.6} color="#8A8AA0" />
                        <span className="font-mono text-xs text-[#8A8AA0]">{model.quality}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs text-[#8A8AA0]">Цена: {model.price}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1"
                    style={{
                      borderColor: isSelected ? model.color : 'rgba(240, 240, 255, 0.15)',
                      background: isSelected ? model.color : 'transparent',
                    }}
                  >
                    {isSelected && <CheckCircle2 size={12} strokeWidth={3} color="#1A1A2E" />}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div
          className="mt-6 rounded-xl p-5 w-full"
          style={{ border: '1px solid rgba(255, 192, 72, 0.2)' }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} strokeWidth={1.6} color="#FFC048" style={{ marginTop: 1 }} />
            <div>
              <div className="font-accent font-medium text-sm text-[#FFC048] mb-1">
                Готовый ИИ-агент из Cloud
              </div>
              <p className="font-primary text-[#8A8AA0] text-sm leading-relaxed">
                Технически можно подключить предобученного агента.
                <span className="text-[#FFC048] font-medium"> Не рекомендую</span> — двойная работа с промптами,
                потеря контроля над поведением бота. Прямая интеграция модели даёт больше гибкости.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center font-primary text-[#8A8AA0] mt-6" style={{ fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
          Модель можно будет сменить в любой момент. Все данные сохранятся.
        </p>
      </div>
      <ScrollHint text="Вопросы боту" />
    </section>
  )
}

const SlideAsk: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircle size={22} strokeWidth={1.6} color="#00D2FF" />
          <span className="font-mono text-[#6E6E8A] text-xs tracking-widest uppercase">Telegram Bot</span>
        </div>
        <h2
          className="font-accent font-bold text-[#F0F0FF] leading-tight"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
        >
          Как можно будет задавать вопросы
        </h2>
        <p
          className="font-primary text-[#8A8AA0] mt-3 max-w-lg mx-auto"
          style={{ fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.6 }}
        >
          Бот будет работать прямо в Telegram. Просто напишите вопрос —
          и получите точный ответ на основе вашей базы знаний.
        </p>
      </div>

      <div
        className="rounded-2xl p-5 sm:p-6 w-full"
        style={{ border: '1px solid rgba(240, 240, 255, 0.08)' }}
      >
        <div className="flex items-center gap-2.5 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(240, 240, 255, 0.06)' }}>
          <Bot size={18} strokeWidth={1.6} color="#00D2FF" />
          <span className="font-accent font-medium text-[#F0F0FF] text-sm">@ClueMeBot</span>
          <span className="font-mono text-xs text-[#6E6E8A] ml-auto">online</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#6C5CE7' }}>
              <span className="text-xs font-bold text-[#F0F0FF]">Я</span>
            </div>
            <div
              className="rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]"
              style={{ background: '#6C5CE7', color: '#F0F0FF' }}
            >
              <p className="text-sm leading-relaxed">
                Какие ключевые драйверы роста рынка AI в 2026 году и какие прогнозы на следующий год?
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#00D2FF' }}>
              <Bot size={16} strokeWidth={2} color="#1A1A2E" />
            </div>
            <div
              className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]"
              style={{ border: '1px solid rgba(0, 210, 255, 0.2)', color: '#E4E4F0' }}
            >
              <p className="text-sm leading-relaxed">
                По данным аналитиков, мировой рынок AI достиг <span style={{ color: '#FFC048' }}>$320 млрд</span> в 2026 году.
                Ключевые драйверы: генеративные модели, автоматизация бизнес-процессов и AI-ассистенты.
                Прогноз на 2027 год — <span style={{ color: '#FFC048' }}>$450 млрд</span>.
              </p>
              <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: '1px solid rgba(240, 240, 255, 0.06)' }}>
                <button className="p-1 rounded transition-all"><Copy size={12} strokeWidth={1.6} color="#8A8AA0" /></button>
                <button className="p-1 rounded transition-all"><ThumbsUp size={12} strokeWidth={1.6} color="#8A8AA0" /></button>
                <button className="p-1 rounded transition-all"><ThumbsDown size={12} strokeWidth={1.6} color="#8A8AA0" /></button>
                <button className="p-1 rounded transition-all ml-auto"><RotateCcw size={12} strokeWidth={1.6} color="#8A8AA0" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5 pt-4" style={{ borderTop: '1px solid rgba(240, 240, 255, 0.06)' }}>
          <input
            type="text"
            value="Что такое ClueMe?"
            readOnly
            className="flex-1 outline-none font-primary text-sm rounded-xl px-4 py-2.5"
            style={{
              color: '#F0F0FF',
              border: '1px solid rgba(240, 240, 255, 0.1)',
              cursor: 'default',
            }}
          />
          <button
            className="flex items-center justify-center rounded-xl w-10 h-10 flex-shrink-0"
            style={{ background: '#00D2FF' }}
          >
            <Send size={16} strokeWidth={2} color="#1A1A2E" />
          </button>
        </div>
      </div>

      <p className="text-center font-primary text-[#8A8AA0] mt-6" style={{ fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
        Вопросы на естественном языке. Бот будет понимать контекст и выдавать точные ответы,
        опираясь только на загруженные источники.
      </p>
    </div>
    <ScrollHint text="Интерфейс проекта" />
  </section>
)

const SlideDashboard: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
      <div className="text-center mb-8">
        <h2
          className="font-accent font-bold text-[#F0F0FF] leading-tight"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
        >
          Как это может выглядеть в проекте
        </h2>
        <p
          className="font-primary text-[#8A8AA0] mt-3 max-w-lg mx-auto"
          style={{ fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.6 }}
        >
          Пример интерфейса панели управления. Источники, поиск и настройки —
          всё в одном окне.
        </p>
      </div>

      <div
        className="rounded-2xl w-full overflow-hidden"
        style={{ border: '1px solid rgba(240, 240, 255, 0.08)' }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid rgba(240, 240, 255, 0.06)' }}
        >
          <div className="flex items-center gap-3">
            <Database size={18} strokeWidth={1.6} color="#6C5CE7" />
            <span className="font-accent font-bold text-[#F0F0FF] text-sm">ClueMe</span>
            <span className="font-mono text-xs text-[#6E6E8A]">• База знаний</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#6E6E8A]">{demoSources.length} источников</span>
          </div>
        </div>

        <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(240, 240, 255, 0.06)' }}>
          <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ border: '1px solid rgba(240, 240, 255, 0.08)' }}>
            <Search size={14} strokeWidth={1.6} color="#8A8AA0" />
            <input
              type="text"
              value="рост рынка"
              readOnly
              className="flex-1 outline-none font-primary text-sm"
              style={{ color: '#F0F0FF', cursor: 'default' }}
            />
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="flex flex-col gap-1.5">
            {demoSources.slice(0, 4).map((source, index) => (
              <div
                key={source.id}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                style={{
                  border: index === 0 ? '1px solid rgba(108, 92, 231, 0.2)' : '1px solid transparent',
                  background: index === 0 ? 'rgba(108, 92, 231, 0.06)' : 'transparent',
                }}
              >
                <SourceIcon type={source.type} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-xs text-[#F0F0FF] truncate">{source.title}</div>
                  <div className="font-mono text-[10px] text-[#6E6E8A] mt-0.5">{source.date}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Edit3 size={11} strokeWidth={1.6} color="#8A8AA0" />
                  <Trash2 size={11} strokeWidth={1.6} color="#FF4757" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: '1px solid rgba(240, 240, 255, 0.06)' }}
        >
          <span className="font-mono text-[10px] text-[#6E6E8A]">CLUEME AI СПРАВОЧНИК v1.0</span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[#6E6E8A]">YandexGPT 5 Pro</span>
            <span className="w-2 h-2 rounded-full" style={{ background: '#00D2FF', boxShadow: '0 0 6px #00D2FF' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const MainPage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        * { box-sizing: border-box; }
      `}</style>

      <SlideSplash />
      <SlideAdd />
      <SlideList />
      <SlideModel />
      <SlideAsk />
      <SlideDashboard />
    </div>
  )
}