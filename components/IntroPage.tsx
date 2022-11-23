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
        <span className="absolute bottom-full left-6">
          <Bookmark color="blue" title="About Me" go={go} />
        </span>
        <Image
          className="my-0 mx-auto pointer-events-none"
          src={mePic}
          alt="Myself"
          height={250}
        />
        <h2 className="text-2xl sm:text-4xl my-2">What I do?</h2>
        {
          introSummaries.map((s, i) => <p key={i} className="searchable sm:mb-1 text-base sm:text-xl">{s}</p>)
        }
      </div>
      <div className="hidden sm:block bg-paper-white">
        <span className="absolute bottom-full right-6">
          <Bookmark color="blue" title="About Me" go={go} />
        </span>
      </div>
    </>
  )
}

export default IntroPage
