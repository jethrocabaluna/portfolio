import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useWindowWidth } from '@react-hook/window-size'
import { NextPage } from 'next'
import clsx from 'clsx'
import { chunk, isNil } from 'lodash'
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

const Book: NextPage = () => {
  const [isSinglePageView, setIsSinglePageView] = useState(false)
  const [page, setPage] = useState(0)
  const [isForward, setIsForward] = useState(true)
  const [isSafari, setIsSafari] = useState<boolean>()
  const [isAutoTurning, setIsAutoTurning] = useState(false)
  const windowWidth = useWindowWidth()

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === 'ArrowRight') {
      onNext()
    }
    if (key === 'ArrowLeft') {
      onPrevious()
    }
  }

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent))
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", downHandler)

    return () => {
      window.removeEventListener("keydown", downHandler)
    }
  }, [page])

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
        <span className="absolute bottom-full left-64">
          <Bookmark color="yellow" title="Experience" go={() => goToPage(3)} />
        </span>
      ) : undefined
      const BookmarkBack = i === 0 ? (
        <span className="absolute bottom-full right-64">
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
    preventScrollOnSwipe: true,
  })

  const bookWrapperClassName = clsx(
    isNil(isSafari) && 'hidden',
    isSafari && !isSinglePageView ? 'mt-8' : 'mt-2',
    'w-full sm:w-auto',
    'scale-100 lg:scale-80 xl:scale-90 2xl:scale-100',
  )

  const bookClassName = clsx(
    'book mx-auto w-11/12 h-screen-fit sm:w-book-desktop sm:h-book-desktop',
    'text-paper-black select-none lg:translate-x-1/2',
  )

  return (
    <>
      <div className="mx-auto my-2 w-11/12 sm:w-96 z-50">
        <Search goToPage={goToPage} isSinglePageView={isSinglePageView} />
      </div>
      <div className="lg:hidden flex w-11/12 sm:w-book-desktop mx-auto text-pure-white text-xs sm:text-lg">
        <button onClick={() => goToPage(1)} className='flex-1 bg-blue py-2'>About Me</button>
        <button onClick={() => goToPage(2)} className='flex-1 bg-red py-2'>Contents</button>
        <button onClick={() => goToPage(3)} className='flex-1 bg-bookmark-yellow py-2'>Experience</button>
        <button onClick={() => goToPage(8)} className='flex-1 bg-blue py-2'>Projects</button>
        <button onClick={() => goToPage(11)} className='flex-1 bg-red py-2'>Contact</button>
      </div>
      <div className={bookWrapperClassName}>
        <div {...swipeHandlers} className={bookClassName}>
          {
            pageComponents.map((BookPage, i) => {
              const pageClassName = clsx(
                isSafari && 'book__page--safari',
                !isSafari && 'book__page',
                page > i && 'flipped z-20',
                page > i && !isSafari && 'xl:rotated-flipped',
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
      <div className={`h-12 relative lg:-mt-14 ${isSafari ? 'xl:-mt-4' : 'xl:-mt-8 2xl:-mt-0'}`}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <button
            className={`h-10 w-10 text-blue ${page <= 0 ? 'opacity-20' : ''}`}
            onClick={onPrevious}
          >
            <LeftArrow />
          </button>
          <button
            className={`ml-8 h-10 w-10 text-blue ${page >= pageComponents.length - 1 ? 'opacity-20' : ''}`}
            onClick={onNext}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </>
  )
}

export default Book
