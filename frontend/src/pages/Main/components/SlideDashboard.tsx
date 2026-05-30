import { Database, Edit3, Search, Trash2 } from "lucide-react";
import type React from "react";
import { demoSources } from "../main.constant";
import { SourceIcon } from "./Source";

export const SlideDashboard: React.FC = () => (
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
