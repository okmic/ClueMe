export interface ISourceItem {
  id: string
  type: 'text' | 'url' | 'file'
  title: string
  content: string
  format?: string
  date: string
}
