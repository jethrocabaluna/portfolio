import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useWindowWidth } from '@react-hook/window-size'
import { NextPage } from 'next'
import { EB_Garamond } from '@next/font/google'
import clsx from 'clsx'
import { chunk } from 'lodash'
import { experiences } from '@/utils/experiences'
import { projects } from '@/utils/projects'
import FrontCover from './FrontCover'
import IntroPage from './IntroPage'
import ContentsPage, { Props as ContentsPageProps } from './ContentsPage'
import BlankPage from './BlankPage'
import BackCover from './BackCover'
import ExperiencePage from './ExperiencePage'
import Bookmark from './Bookmark'
import Search from './Search'
import ContactPage from './ContactPage'
import LeftArrow from '../public/left-arrow.svg'
import RightArrow from '../public/right-arrow.svg'

const garamond = EB_Garamond()

const Book: NextPage = () => {
  const [isSinglePageView, setIsSinglePageView] = useState(false)
  const [page, setPage] = useState(0)
  const [isForward, setIsForward] = useState(true)
  const [isAutoTurning, setIsAutoTurning] = useState(false)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    const newValue = windowWidth < 1024
    if (newValue !== isSinglePageView) {
      goToPage(0)
      setIsSinglePageView(newValue)
    }
  }, [windowWidth])

  const contents: ContentsPageProps['contents'] = [
    {
      title: 'Experience',
      go: () => { goToPage(3) },
      subContents: [
        {
          title: 'Senior Software Engineer @ SiteMinder',
          go: () => { goToPage(3) },
        },
        {
          title: 'Backend and CMS Developer @ Lokal App',
          go: () => { goToPage(4) },
        },
        {
          title: 'Software Engineer @ Haven, Inc (now FourKites)',
          go: () => { goToPage(isSinglePageView ? 5 : 4) },
        },
        {
          title: 'Software Engineer @ Code and Theory',
          go: () => { goToPage(isSinglePageView ? 6 : 5) },
        },
        {
          title: 'Threat Response Engineer @ Trend Micro',
          go: () => { goToPage(isSinglePageView ? 7 : 5) },
        },
      ],
    },
    {
      title: 'Personal Projects',
      go: () => { goToPage(isSinglePageView ? 8 : 6) },
      subContents: [
        {
          title: 'Tellete, a Web3 messaging app',
          go: () => { goToPage(isSinglePageView ? 8 : 6) },
        },
        {
          title: '2D Space shooter game, a web-based game',
          go: () => { goToPage(isSinglePageView ? 9 : 7) },
        },
        {
          title: 'Adventurers Trail, a website for adventure blogs',
          go: () => { goToPage(isSinglePageView ? 10 : 7) },
        },
      ],
    },
  ]

  const pageComponents = [
    <FrontCover key="front" />,
    <IntroPage key="intro" go={() => goToPage(1)} />,
    <ContentsPage
      key="contents"
      contents={contents}
      go={() => goToPage(2)}
    />,
    ...chunk(experiences, isSinglePageView ? 1 : 2).map((exp, i) => {
      const BookmarkFront = i === 0 ? (
        <span className="absolute bottom-full left-60">
          <Bookmark color="yellow" title="Experience" go={() => goToPage(3)} />
        </span>
      ) : undefined
      const BookmarkBack = i === 0 ? (
        <span className="absolute bottom-full right-60">
          <Bookmark color="yellow" title="Experience" go={() => goToPage(3)} />
        </span>
      ) : undefined
      return (
        <ExperiencePage key={i} front={exp[0]} back={isSinglePageView ? undefined : exp[1]} BookmarkFront={BookmarkFront} BookmarkBack={BookmarkBack} />
      )
    }),
    ...chunk(projects, isSinglePageView ? 1 : 2).map((exp, i) => {
      const BookmarkFront = i === 0 ? (
        <span className="absolute bottom-full right-34">
          <Bookmark color="blue" title="Projects" go={() => goToPage(isSinglePageView ? 8 : 6)} />
        </span>
      ) : undefined
      const BookmarkBack = i === 0 ? (
        <span className="absolute bottom-full left-34">
          <Bookmark color="blue" title="Projects" go={() => goToPage(isSinglePageView ? 8 : 6)} />
        </span>
      ) : undefined
      return (
        <ExperiencePage key={i} title="Projects" front={exp[0]} back={isSinglePageView ? undefined : exp[1]} BookmarkFront={BookmarkFront} BookmarkBack={BookmarkBack} />
      )
    }),
    <ContactPage key="contact" go={() => goToPage(isSinglePageView ? 11 : 8)} />,
    <BlankPage key="blank" />,
    <BackCover key="back" />,
  ]

  const onPrevious = () => {
    if (isAutoTurning) return
    setIsForward(false)
    setPage(Math.max(0, page - 1))
  }
  const onNext = () => {
    if (isAutoTurning) return
    setIsForward(true)
    setPage(Math.min(pageComponents.length - 1, page + 1))
  }

  const goToPage = (pageNum: number) => {
    if (isAutoTurning || pageNum === page) return
    setIsAutoTurning(true)
    const newIsForward = pageNum > page
    setIsForward(newIsForward)

    let turn = 0
    const direction = newIsForward ? 1 : -1
    const finalPage = pageNum + (1 * direction)
    for (let i = page + (1 * direction); i !== finalPage; i += (1 * direction)) {
      const delay = 300
      setTimeout(() => {
        setPage(i)
        if (i === pageNum) {
          setIsAutoTurning(false)
        }
      }, delay * turn)
      turn++
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrevious,
    trackMouse: true,
  })

  const bookWrapperClassName = clsx(
    'left-1/2 -translate-x-1/2',
    'w-full sm:w-auto absolute top-0 my-32 lg:my-12 2xl:my-24',
    'lg:-translate-x-12 xl:translate-x-0 transition-all',
    'scale-100 sm:scale-90 md:scale-100 lg:scale-80 xl:scale-90 2xl:scale-100',
  )

  const bookClassName = clsx(
    garamond.className,
    'book mx-auto w-11/12 sm:w-book-desktop',
    'text-paper-black select-none',
  )

  return (
    <>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50">
        <Search goToPage={goToPage} isSinglePageView={isSinglePageView} />
      </div>
      <div className={bookWrapperClassName}>
        <div {...swipeHandlers} className={bookClassName}>
          {
            pageComponents.map((BookPage, i) => {
              const pageClassName = clsx(
                'book__page xl:rotated absolute top-0 left-0 w-full h-full text-center will-change-transform',
                page > i && 'flipped xl:rotated-flipped z-20',
                page < i - 1 && '-z-10',
                i !== 0 && i !== pageComponents.length - 1 && 'border-l border-paper-line',
                (i === 0 ? false : isForward) && page === i && 'z-10',
                (i === 0 ? true : !isForward) && page === i && 'z-30',
              )
              return (
                <div key={i} className={pageClassName}>
                  {BookPage}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="absolute bottom-16 lg:bottom-48 left-1/2 -translate-x-1/2">
        <button
          className={`h-5 w-10 text-blue ${page <= 0 ? 'opacity-20' : ''}`}
          onClick={onPrevious}
        >
          <LeftArrow />
        </button>
        <button
          className={`ml-8 h-5 w-10 text-blue ${page >= pageComponents.length ? 'opacity-20' : ''}`}
          onClick={onNext}
        >
          <RightArrow />
        </button>
      </div>
      <div className="sm:hidden absolute flex w-11/12 top-20 left-1/2 -translate-x-1/2">
        <button onClick={() => goToPage(1)} className='flex-1 bg-blue text-pure-white p-2 text-xs'>About Me</button>
        <button onClick={() => goToPage(2)} className='flex-1 bg-red text-pure-white p-2 text-xs'>Contents</button>
        <button onClick={() => goToPage(3)} className='flex-1 bg-bookmark-yellow text-pure-white p-2 text-xs'>Experience</button>
        <button onClick={() => goToPage(8)} className='flex-1 bg-blue text-pure-white p-2 text-xs'>Projects</button>
        <button onClick={() => goToPage(11)} className='flex-1 bg-red text-pure-white p-2 text-xs'>Contact</button>
      </div>
    </>
  )
}

export default Book
