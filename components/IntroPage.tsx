import React from 'react'
import Image from 'next/image'
import mePic from '../public/me.jpeg'
import Bookmark from './Bookmark'
import { introSummaries } from '@/utils/intro'

type Props = {
  go: () => void,
}

const IntroPage = ({
  go,
}: Props) => {
  return (
    <>
      <div className="bg-paper-white p-8 sm:py-10 sm:px-16">
        <span className="absolute bottom-full left-2">
          <Bookmark color="blue" title="About Me" go={go} />
        </span>
        <Image
          className="my-0 mx-auto"
          src={mePic}
          alt="Myself"
          height={250}
        />
        <h2 className="text-2xl sm:text-4xl my-2">What I do?</h2>
        {
          introSummaries.map((s, i) => <p key={i} className="searchable mb-1 text-lg sm:text-xl">{s}</p>)
        }
      </div>
      <div className="bg-paper-white">
        <span className="absolute bottom-full right-2">
          <Bookmark color="blue" title="About Me" go={go} />
        </span>
      </div>
    </>
  )
}

export default IntroPage
