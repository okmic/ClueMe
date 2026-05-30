import React, { useState, useRef, useEffect } from 'react'
import {
  BookOpen,
  ArrowRight,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Link2,
  Upload,
  FileText,
  FileCode,
  ChevronDown,
} from 'lucide-react'

type MaterialType = 'url' | 'file' | 'text'
type FileFormat = 'html' | 'xml' | 'json' | 'txt'

export interface IAttachedUrl {
  type: 'url'
  url: string
  format: FileFormat
}

export interface IAttachedFile {
  type: 'file'
  name: string
  format: FileFormat
}

export interface IMaterialState {
  mode: MaterialType
  text: string
  url: string
  urlFormat: FileFormat
  file: IAttachedFile | null
}

export interface IMaterialInputProps {
  value: IMaterialState
  onChange: (value: IMaterialState) => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  error?: string
  success?: string
  hint?: string
  label?: string
  placeholder?: string
  onSubmit?: () => void
  className?: string
}

interface IDims {
  height: number
  fontSize: number
  paddingX: number
  paddingY: number
  iconSize: number
  radius: number
  chipHeight: number
  textMinHeight: number
}

const sizeMap: Record<string, IDims> = {
  sm: { height: 44, fontSize: 14, paddingX: 14, paddingY: 12, iconSize: 16, radius: 12, chipHeight: 30, textMinHeight: 140 },
  md: { height: 54, fontSize: 16, paddingX: 18, paddingY: 14, iconSize: 20, radius: 14, chipHeight: 34, textMinHeight: 180 },
  lg: { height: 64, fontSize: 18, paddingX: 22, paddingY: 18, iconSize: 24, radius: 16, chipHeight: 40, textMinHeight: 220 },
}

const formats: { value: FileFormat; label: string; color: string }[] = [
  { value: 'html', label: 'HTML', color: '#FF6B9D' },
  { value: 'xml', label: 'XML', color: '#FFC048' },
  { value: 'json', label: 'JSON', color: '#00D2FF' },
  { value: 'txt', label: 'TXT', color: '#6C5CE7' },
]

const iconForFormat = (format: FileFormat): string =>
  formats.find((f) => f.value === format)?.color || '#8A8AA0'

const labelForFormat = (format: FileFormat): string =>
  formats.find((f) => f.value === format)?.label || format.toUpperCase()

const getDims = (size: 'sm' | 'md' | 'lg'): IDims => sizeMap[size]

const ModeSelector: React.FC<{
  mode: MaterialType
  onSelect: (mode: MaterialType) => void
  dims: IDims
}> = ({ mode, onSelect, dims }) => {
  const modes: { type: MaterialType; icon: React.ElementType; label: string }[] = [
    { type: 'text', icon: FileText, label: 'Текст' },
    { type: 'url', icon: Link2, label: 'URL' },
    { type: 'file', icon: Upload, label: 'Файл' },
  ]

  return (
    <div className="flex gap-1.5 flex-shrink-0">
      {modes.map(({ type, icon: Icon, label }) => {
        const active = mode === type
        return (
          <button
            key={type}
            type="button"
            onClick={() => onSelect(type)}
            className="flex items-center gap-1.5 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
            style={{
              height: dims.chipHeight,
              paddingLeft: dims.paddingX * 0.7,
              paddingRight: dims.paddingX * 0.7,
              fontSize: dims.fontSize * 0.72,
              background: active ? 'rgba(108, 92, 231, 0.15)' : 'transparent',
              border: active ? '1px solid rgba(108, 92, 231, 0.35)' : '1px solid transparent',
              color: active ? '#F0F0FF' : '#8A8AA0',
            }}
          >
            <Icon size={dims.iconSize * 0.65} strokeWidth={1.8} color={active ? '#6C5CE7' : '#8A8AA0'} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

const FormatSelector: React.FC<{
  value: FileFormat
  onChange: (format: FileFormat) => void
  dims: IDims
}> = ({ value, onChange, dims }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative flex-shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
        style={{
          height: dims.chipHeight,
          paddingLeft: dims.paddingX * 0.6,
          paddingRight: dims.paddingX * 0.4,
          fontSize: dims.fontSize * 0.72,
          background: 'rgba(240, 240, 255, 0.04)',
          border: '1px solid rgba(240, 240, 255, 0.1)',
          color: iconForFormat(value),
          fontWeight: 600,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: iconForFormat(value),
            boxShadow: `0 0 6px ${iconForFormat(value)}`,
          }}
        />
        {labelForFormat(value)}
        <ChevronDown size={dims.iconSize * 0.55} strokeWidth={2} color={iconForFormat(value)} />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 mt-1.5 rounded-xl p-1 z-50"
          style={{
            background: '#1E1E3A',
            border: '1px solid rgba(240, 240, 255, 0.1)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            minWidth: 130,
          }}
        >
          {formats.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => {
                onChange(f.value)
                setOpen(false)
              }}
              className="flex items-center gap-2.5 w-full rounded-lg px-3 py-2 transition-colors duration-150 cursor-pointer"
              style={{
                fontSize: dims.fontSize * 0.7,
                color: value === f.value ? '#F0F0FF' : '#8A8AA0',
                background: value === f.value ? 'rgba(240, 240, 255, 0.06)' : 'transparent',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: f.color,
                  boxShadow: `0 0 6px ${f.color}`,
                }}
              />
              {f.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const TextModeInput: React.FC<{
  value: string
  onChange: (value: string) => void
  placeholder: string
  dims: IDims
  disabled: boolean
}> = ({ value, onChange, placeholder, dims, disabled }) => (
  <div style={{ padding: `0 ${dims.paddingX}px` }}>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full bg-transparent outline-none font-primary resize-y rounded-lg p-4"
      style={{
        fontSize: dims.fontSize,
        color: disabled ? '#8A8AA0' : '#F0F0FF',
        lineHeight: 1.7,
        minHeight: dims.textMinHeight,
        border: '1px solid rgba(240, 240, 255, 0.08)',
        cursor: disabled ? 'not-allowed' : 'text',
      }}
    />
  </div>
)

const UrlModeInput: React.FC<{
  url: string
  onChange: (url: string) => void
  format: FileFormat
  placeholder: string
  dims: IDims
  disabled: boolean
}> = ({ url, onChange, format, placeholder, dims, disabled }) => (
  <div className="px-[18px] sm:px-[22px]">
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <div
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 flex-shrink-0 w-fit"
        style={{
          height: dims.chipHeight,
          background: 'rgba(240, 240, 255, 0.04)',
          border: '1px solid rgba(240, 240, 255, 0.08)',
          fontSize: dims.fontSize * 0.72,
          color: iconForFormat(format),
          fontWeight: 600,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: iconForFormat(format),
            boxShadow: `0 0 6px ${iconForFormat(format)}`,
          }}
        />
        {labelForFormat(format)}
      </div>
      <input
        type="url"
        value={url}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 bg-transparent outline-none font-primary rounded-xl px-4 py-2.5"
        style={{
          fontSize: dims.fontSize,
          color: disabled ? '#8A8AA0' : '#F0F0FF',
          border: '1px solid rgba(240, 240, 255, 0.08)',
          cursor: disabled ? 'not-allowed' : 'text',
        }}
      />
    </div>
  </div>
)

const FileModeInput: React.FC<{
  file: IAttachedFile | null
  onAttach: () => void
  onRemove: () => void
  dims: IDims
  disabled: boolean
}> = ({ file, onAttach, onRemove, dims, disabled }) => (
  <div style={{ padding: `0 ${dims.paddingX}px` }}>
    {file ? (
      <div
        className="flex items-center gap-3 sm:gap-4 rounded-xl px-4 sm:px-5 py-3 sm:py-4 w-full"
        style={{
          background: 'rgba(240, 240, 255, 0.04)',
          border: '1px solid rgba(240, 240, 255, 0.1)',
        }}
      >
        <FileCode size={dims.iconSize * 1.4} strokeWidth={1.4} color={iconForFormat(file.format)} />
        <div className="flex-1 min-w-0">
          <div
            className="font-medium truncate"
            style={{ fontSize: dims.fontSize * 0.9, color: '#F0F0FF' }}
          >
            {file.name}
          </div>
          <div
            className="font-mono"
            style={{ fontSize: dims.fontSize * 0.65, color: iconForFormat(file.format) }}
          >
            {labelForFormat(file.format)}
          </div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer flex-shrink-0"
          style={{
            width: dims.iconSize + 8,
            height: dims.iconSize + 8,
            background: 'rgba(240, 240, 255, 0.06)',
          }}
        >
          <X size={dims.iconSize * 0.7} strokeWidth={2} color="#FF4757" />
        </button>
      </div>
    ) : (
      <button
        type="button"
        onClick={onAttach}
        disabled={disabled}
        className="flex flex-col items-center gap-3 rounded-xl w-full transition-colors duration-200 cursor-pointer"
        style={{
          padding: dims.paddingY * 3,
          border: '2px dashed rgba(240, 240, 255, 0.12)',
          borderRadius: dims.radius,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Upload size={dims.iconSize * 1.6} strokeWidth={1.2} color="#8A8AA0" />
        <span
          className="font-medium text-center px-4"
          style={{ fontSize: dims.fontSize * 0.85, color: '#8A8AA0' }}
        >
          Нажмите для загрузки HTML, XML, JSON или TXT
        </span>
      </button>
    )}
  </div>
)

export const MaterialInput: React.FC<IMaterialInputProps> = ({
  value,
  onChange,
  size = 'md',
  disabled = false,
  loading = false,
  error,
  success,
  hint,
  label,
  placeholder,
  onSubmit,
  className = '',
}) => {
  const [focused, setFocused] = useState(false)
  const [contentHeight, setContentHeight] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const dims = getDims(size)

  useEffect(() => {
    if (contentRef.current) {
      const h = contentRef.current.scrollHeight
      if (contentHeight === null || Math.abs(h - contentHeight) > 2) {
        setContentHeight(h)
      }
    }
  }, [value.mode, value.text, value.url, value.file, contentHeight])

  const hasError = !!error
  const hasSuccess = !!success
  const showStatus = hasError || hasSuccess || loading

  const borderColor = hasError
    ? 'rgba(255, 71, 87, 0.5)'
    : hasSuccess
      ? 'rgba(0, 210, 255, 0.5)'
      : focused
        ? 'rgba(108, 92, 231, 0.45)'
        : 'rgba(240, 240, 255, 0.08)'

  const shadow = hasError
    ? '0 0 20px rgba(255, 71, 87, 0.12)'
    : hasSuccess
      ? '0 0 20px rgba(0, 210, 255, 0.12)'
      : focused
        ? '0 0 20px rgba(108, 92, 231, 0.15), inset 0 0 20px rgba(108, 92, 231, 0.04)'
        : 'none'

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const ext = file.name.split('.').pop()?.toLowerCase() as FileFormat
    const validFormats: FileFormat[] = ['html', 'xml', 'json', 'txt']
    const format: FileFormat = validFormats.includes(ext) ? ext : 'txt'
    onChange({ ...value, file: { type: 'file', name: file.name, format } })
    e.target.value = ''
  }

  const isSubmitEnabled = (() => {
    if (disabled || loading) return false
    switch (value.mode) {
      case 'text': return value.text.trim().length > 0
      case 'url': return value.url.trim().length > 0
      case 'file': return value.file !== null
    }
  })()

  const statusIcon = hasError && !loading ? (
    <AlertCircle size={dims.iconSize} strokeWidth={1.6} color="#FF4757" />
  ) : hasSuccess && !loading ? (
    <CheckCircle2 size={dims.iconSize} strokeWidth={1.6} color="#00D2FF" />
  ) : loading ? (
    <Loader2 size={dims.iconSize} strokeWidth={1.6} color="#6C5CE7" className="animate-spin" />
  ) : null

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center mb-2" style={{ paddingLeft: dims.paddingX }}>
          <span
            className="font-accent font-medium leading-none"
            style={{
              fontSize: dims.fontSize * 0.75,
              color: hasError ? '#FF4757' : '#8A8AA0',
              letterSpacing: '+0.02em',
            }}
          >
            {label}
          </span>
        </div>
      )}

      <div
        className="relative w-full transition-all duration-300"
        style={{
          borderRadius: dims.radius,
          border: `1px solid ${borderColor}`,
          boxShadow: shadow,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div
          className="flex items-center justify-between gap-2"
          style={{
            paddingLeft: dims.paddingX,
            paddingRight: dims.paddingX,
            paddingTop: dims.paddingY * 0.75,
            paddingBottom: dims.paddingY * 0.75,
          }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <BookOpen
              size={dims.iconSize}
              strokeWidth={1.6}
              color={hasError ? '#FF4757' : hasSuccess ? '#00D2FF' : '#6C5CE7'}
              style={{ opacity: focused ? 1 : 0.6, flexShrink: 0 }}
            />
            <ModeSelector mode={value.mode} onSelect={(m) => onChange({ ...value, mode: m })} dims={dims} />
          </div>

          {value.mode === 'url' && (
            <FormatSelector
              value={value.urlFormat}
              onChange={(f) => onChange({ ...value, urlFormat: f })}
              dims={dims}
            />
          )}
        </div>

        <div
          ref={contentRef}
          className="w-full overflow-hidden transition-all duration-300"
          style={{ height: contentHeight !== null ? contentHeight : 'auto' }}
        >
          {value.mode === 'text' && (
            <TextModeInput
              value={value.text}
              onChange={(t) => onChange({ ...value, text: t })}
              placeholder={placeholder || 'Введите текст материала...'}
              dims={dims}
              disabled={disabled}
            />
          )}
          {value.mode === 'url' && (
            <div style={{ paddingBottom: dims.paddingY * 0.75 }}>
              <UrlModeInput
                url={value.url}
                onChange={(u) => onChange({ ...value, url: u })}
                format={value.urlFormat}
                placeholder={placeholder || 'https://example.com/data.html'}
                dims={dims}
                disabled={disabled}
              />
            </div>
          )}
          {value.mode === 'file' && (
            <div style={{ paddingBottom: dims.paddingY * 0.75 }}>
              <FileModeInput
                file={value.file}
                onAttach={() => fileInputRef.current?.click()}
                onRemove={() => onChange({ ...value, file: null })}
                dims={dims}
                disabled={disabled}
              />
            </div>
          )}
        </div>

        <div
          className="flex items-center justify-between gap-3"
          style={{
            paddingLeft: dims.paddingX,
            paddingRight: dims.paddingX,
            paddingTop: dims.paddingY * 0.5,
            paddingBottom: dims.paddingY * 0.75,
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            {showStatus && (
              <div className="flex items-center justify-center flex-shrink-0" style={{ width: dims.iconSize + 8, height: dims.iconSize + 8 }}>
                {statusIcon}
              </div>
            )}
            {(hint || error || success) && (
              <span
                className="font-primary leading-tight truncate"
                style={{
                  fontSize: dims.fontSize * 0.7,
                  color: error ? '#FF4757' : success ? '#00D2FF' : '#8A8AA0',
                }}
              >
                {error || success || hint}
              </span>
            )}
          </div>

          {isSubmitEnabled && (
            <button
              type="button"
              onClick={onSubmit}
              disabled={disabled || loading}
              className="flex items-center justify-center gap-2 rounded-xl transition-colors duration-200 font-medium flex-shrink-0 cursor-pointer"
              style={{
                height: dims.chipHeight,
                paddingLeft: dims.paddingX,
                paddingRight: dims.paddingX,
                background: '#6C5CE7',
                opacity: disabled || loading ? 0.4 : 1,
                fontSize: dims.fontSize * 0.8,
                color: '#F0F0FF',
                cursor: disabled || loading ? 'not-allowed' : 'pointer',
              }}
            >
              <ArrowRight size={dims.iconSize * 0.75} strokeWidth={2.5} color="#F0F0FF" />
              Добавить
            </button>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".html,.xml,.json,.txt"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <style>{`
        textarea::placeholder, input::placeholder {
          color: #8A8AA0;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        textarea:focus::placeholder, input:focus::placeholder {
          opacity: 0.35;
        }
        textarea:disabled, input:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}

export const createInitialMaterialState = (): IMaterialState => ({
  mode: 'text',
  text: '',
  url: '',
  urlFormat: 'html',
  file: null,
})