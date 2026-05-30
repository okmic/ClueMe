import { useState } from "react"
import { createInitialMaterialState, MaterialInput, type IMaterialState } from "./MaterialInput/MaterialInput"
import { ScrollHint } from "./Source"

export const SlideAdd: React.FC = () => {
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
