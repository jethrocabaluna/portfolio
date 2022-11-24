import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

export type BookmarkColor = 'red' | 'blue' | 'yellow'

type Props = {
  color: BookmarkColor
  title: string
  go: () => void
}

const colorMap = {
  red: 'bg-red',
  blue: 'bg-blue',
  yellow: 'bg-bookmark-yellow',
}

const Bookmark = ({
  color,
  title,
  go,
}: Props) => {
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent))
  }, [])

  const className = clsx(
    colorMap[color],
    isSafari ? 'text-base' : 'text-lg',
    'hidden lg:block text-pure-white px-4 font-bold pb-4 pt-2 -mb-2',
  )
  return <button onClick={go} className={className}>{title}</button>
}

export default Bookmark
