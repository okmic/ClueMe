import { AlertTriangle, CheckCircle2, Lightbulb, Star, Thermometer } from "lucide-react"
import { useState } from "react"
import { ScrollHint } from "./Source"

export const SlideModel: React.FC = () => {
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