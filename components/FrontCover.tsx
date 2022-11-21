import React from 'react'
import Link from 'next/link'
import Github from '../public/github.svg'
import Linkedin from '../public/linkedin.svg'
import Codepen from '../public/codepen.svg'

const FrontCover = () => {
  return (
    <>
      <div className="bg-blue relative border-l-red border-l-4 border-b-paper-white border-b-4 z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-80">
          <h1 className="text-yellow text-6xl mb-4">Jethro Cabaluna</h1>
          <p className="text-white"><strong>Software Engineer</strong></p>
        </div>
        <div className="absolute left-8 bottom-8">
          <Link href="https://github.com/jethrocabaluna" target="_blank">
            <Github className="w-6 h-6 fill-white mb-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/jethrocabaluna" target="_blank">
            <Linkedin className="w-6 h-6 fill-white mb-4" />
          </Link>
          <Link href="https://codepen.io/jethrocabaluna" target="_blank">
            <Codepen className="w-6 h-6 fill-white" />
          </Link>
        </div>
      </div>
      <div className="bg-cover-white z-10" />
    </>
  )
}

export default FrontCover
