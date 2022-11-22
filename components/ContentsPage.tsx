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
      <div className="bg-paper-white py-10 px-16">
        <span className="absolute bottom-full left-32">
          <Bookmark color="red" title="Contents" go={go} />
        </span>
        <h2 className="text-4xl my-2">Content</h2>
        {
          contents.map(content => (
            <Fragment key={content.title}>
              <button
                className="block text-blue mt-2 mb-1 hover:underline"
                onClick={content.go}
              >
                {content.title}
              </button>
              {
                content.subContents?.map(subContent => (
                  <button
                    className="block text-blue ml-4 mb-1 hover:underline"
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
      <div className="bg-paper-white">
        <span className="absolute bottom-full right-32">
          <Bookmark color="red" title="Contents" go={go} />
        </span>
      </div>
    </>
  )
}

export default ContentsPage
