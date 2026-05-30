import { useState } from "react"
import type { ISourceItem } from "../main.types"
import { demoSources } from "../main.constant"
import { ScrollHint, SourceIcon } from "./Source"
import { Calendar, ChevronDown, Edit3, Trash2 } from "lucide-react"

export const SlideList: React.FC = () => {
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
