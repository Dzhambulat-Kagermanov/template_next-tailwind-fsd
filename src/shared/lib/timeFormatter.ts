import { TUiTimerFormats } from '@/shared/ui'

type TTimeFormatter = (seconds: number, format: TUiTimerFormats) => string

export const timeFormatter: TTimeFormatter = (seconds, format) => {
  const days = Math.floor(seconds / (24 * 3600))
  const hours = Math.floor((seconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  switch (format) {
    case '*H:MM:SS':
      const totalHours = Math.floor(seconds / 60 / 60)
      return `${String(totalHours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0',
      )} : ${String(secs).padStart(2, '0')}`
    case '*M:SS':
      const totalMinutes = Math.floor(seconds / 60)
      return `${String(totalMinutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

    default:
      return `${String(seconds).padStart(2, '0')}`
  }
}
