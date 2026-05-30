import { Bot, Copy, MessageCircle, RotateCcw, Send, ThumbsDown, ThumbsUp } from "lucide-react";
import type React from "react";
import { ScrollHint } from "./Source";

export const SlideAsk: React.FC = () => (
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