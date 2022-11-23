import clsx from 'clsx'
import React from 'react'

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
  const className = clsx(
    colorMap[color],
    'hidden sm:block text-pure-white px-4 text-lg font-bold pb-4 pt-2 -mb-2',
  )
  return <button onClick={go} className={className}>{title}</button>
}

export default Bookmark
