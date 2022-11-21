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
  return <button onClick={go} className={`${colorMap[color]} text-pure-white px-4 text-lg font-bold pb-4 pt-2 -mb-2`}>{title}</button>
}

export default Bookmark
