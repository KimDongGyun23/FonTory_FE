import type { Font, FontMetadata } from '@/shared/types/font'

type Progress = {
  createdAt: string
  status: 'PROGRESS' | 'COMPLETE'
}

export type FontProgress = (Pick<Font, 'id' | 'name'> & Progress)[]
export type FontRanking = (FontMetadata & Omit<Font, 'writerName'>)[]
