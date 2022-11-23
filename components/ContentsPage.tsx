import React, { Fragment } from 'react'
import Bookmark from './Bookmark'

export type Props = {
  go: () => void
  contents: {
    title: string
    subContents?: {
      title: string
      go: () => void
    }[]
    go: () => void
  }[]
}

const ContentsPage = ({
  go,
  contents,
}: Props) => {
  return (
    <>
      <div className="bg-paper-white p-8 sm:py-10 sm:px-16">
        <span className="absolute bottom-full left-36">
          <Bookmark color="red" title="Contents" go={go} />
        </span>
        <h2 className="text-4xl">Content</h2>
        {
          contents.map(content => (
            <Fragment key={content.title}>
              <button
                className="block text-blue mt-2 mb-1 hover:underline text-left"
                onClick={content.go}
              >
                {content.title}
              </button>
              {
                content.subContents?.map(subContent => (
                  <button
                    className="block text-blue ml-4 mb-1 hover:underline text-left"
                    key={subContent.title}
                    onClick={subContent.go}
                  >
                    {subContent.title}
                  </button>
                ))
              }
            </Fragment>
          ))
        }
      </div>
      <div className="hidden sm:block bg-paper-white">
        <span className="absolute bottom-full right-36">
          <Bookmark color="red" title="Contents" go={go} />
        </span>
      </div>
    </>
  )
}

export default ContentsPage
