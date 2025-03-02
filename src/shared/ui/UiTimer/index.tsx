'use client'
import { FC, useEffect, useState } from 'react'
import { timeFormatter } from '@/shared/lib'

type TUiTimerFormats = '*M:SS' | '*H:MM:SS'

interface TUiTimerProps {
  remainSeconds: number
  format: TUiTimerFormats
  onRemain?: () => void
}
const UiTimer: FC<TUiTimerProps> = ({ format, remainSeconds, onRemain }) => {
  const [seconds, setSeconds] = useState<number>(remainSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((cur) => {
        if (cur - 1 >= 0) {
          return cur - 1
        }
        if (cur === 0) {
          onRemain && onRemain()
          clearInterval(interval)
        }
        return cur
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <>{timeFormatter(seconds, format)}</>
}

export { UiTimer, type TUiTimerProps, type TUiTimerFormats }
