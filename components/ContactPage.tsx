import Link from 'next/link'
import React from 'react'
import Bookmark from './Bookmark'

export type Props = {
  go: () => void
}

const ContactPage = ({
  go,
}: Props) => {
  return (
    <>
      <div className="bg-paper-white py-10 px-16 relative">
        <span className="absolute bottom-full right-8">
          <Bookmark color="red" title="Contact" go={go} />
        </span>
        <h2 className="text-4xl my-2">Get In Touch</h2>
        <p className="mb-8 text-xl">I am casually looking for new opportunities as a full-time, part-time, or freelance software engineer.</p>
        <Link
          className="py-2 px-4 border-blue border-2 bg-white text-xl"
          href="mailto:jethrocabaluna310@gmail.com"
          target="_blank"
        >
          Email Me
        </Link>
      </div>
      <div className="bg-paper-white relative">
        <span className="absolute bottom-full left-8">
          <Bookmark color="red" title="Contact" go={go} />
        </span>
      </div>
    </>
  )
}

export default ContactPage
