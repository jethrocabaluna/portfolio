import React from 'react'
import Link from 'next/link'

export type PageContent = {
  title: string
  startDate: string
  endDate?: string
  subtitle?: string
  summary: string[]
  link?: string
  summarySize?: 'sm' | 'base' | 'lg'
}

type Props = {
  title?: string
  front: PageContent
  back?: PageContent
  BookmarkFront?: JSX.Element
  BookmarkBack?: JSX.Element
}

type PageProps = {
  title?: string
  content: PageContent
  Bookmark?: JSX.Element
}

const summarySizeMap = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
}

const Page = ({
  title,
  content,
  Bookmark,
}: PageProps) => {
  return (
    <div className="bg-paper-white py-8 px-16">
      {Bookmark}
      <h3 className="text-lg">{title}</h3>
      <h2 className="searchable text-3xl">{content.title}</h2>
      {content.link ? <Link className="text-blue" href={content.link} target="_blank">{content.link}</Link> : ''}
      {content.subtitle ? <p className="searchable text-base">{content.subtitle}</p> : ''}
      <p className="text-sm">{content.startDate}{content.endDate ? ` — ${content.endDate}` : ''}</p>
      <ul className="list-disc text-left mt-1">
        {
          content.summary.map((line, i) => <li key={i} className={`searchable mb-1 ${summarySizeMap[content.summarySize ?? 'lg']}`}>{line}</li>)
        }
      </ul>
    </div>
  )
}

const ExperiencePage = ({
  title = 'Experience',
  front,
  back,
  BookmarkFront,
  BookmarkBack,
}: Props) => {
  return (
    <>
      <Page title={title} content={front} Bookmark={BookmarkFront} />
      {
        back ? (
          <Page title={title} content={back} Bookmark={BookmarkBack} />
        ) : <div className={'bg-paper-white'} />
      }
    </>
  )
}

export default ExperiencePage
