import React, { useEffect, useState } from 'react'
import useSearchContext from '@/hooks/useSearchContext'
import useOuterClick from '@/hooks/useOuterClick'
import { introSummaries } from '@/utils/intro'
import { experiences } from '@/utils/experiences'
import { projects } from '@/utils/projects'

type Props = {
  goToPage: (num: number) => void
}

type FoundPage = {
  title: string
  pageNum: number
}

const Search = ({
  goToPage,
}: Props) => {
  const { updateSearch, searchTerm } = useSearchContext()
  const [foundPages, setFoundPages] = useState<FoundPage[]>([])
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false)
  const searchResultRef = useOuterClick(() => {
    setIsSearchResultOpen(false)
  })

  useEffect(() => {
    if (searchTerm.length < 2) {
      setFoundPages([])
      setIsSearchResultOpen(false)

      for (const element of document.querySelectorAll('.searchable')) {
        if (element.textContent) {
          element.innerHTML = element.textContent
        }
      }
      return
    }

    setIsSearchResultOpen(true)
    const pages: FoundPage[] = []
    if (introSummaries.some(s => s.toLowerCase().includes(searchTerm))) {
      pages.push({
        title: 'About Me',
        pageNum: 1,
      })
    }

    for (let i = 0; i < experiences.length; i++) {
      const exp = experiences[i]
      if (
        exp.title.toLowerCase().includes(searchTerm)
        || exp.subtitle?.toLowerCase().includes(searchTerm)
        || exp.summary.some(s => s.toLowerCase().includes(searchTerm))
      ) {
        pages.push({
          title: `${exp.subtitle} @ ${exp.title}`,
          pageNum: Math.ceil(i / 2) + 3,
        })
      }
    }

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      if (
        project.title.toLowerCase().includes(searchTerm)
        || project.subtitle?.toLowerCase().includes(searchTerm)
        || project.summary.some(s => s.toLowerCase().includes(searchTerm))
      ) {
        pages.push({
          title: `Personal project — ${project.title}`,
          pageNum: Math.ceil(i / 2) + 6,
        })
      }
    }

    for (const element of document.querySelectorAll('.searchable')) {
      const pattern = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi")
      if (element.textContent) {
        const matches = element.textContent.match(pattern) ?? []
        let formattedTextContent = ''
        let currentTextContent = element.textContent
        for (const match of matches) {
          const matchPattern = new RegExp(`(${match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "g")
          const substr = currentTextContent.substring(0, currentTextContent.indexOf(match) + match.length)
          currentTextContent = currentTextContent.substring(currentTextContent.indexOf(match) + match.length)
          formattedTextContent += substr.replace(matchPattern, `<span class='bg-yellow'>${match}</span>`)
        }
        formattedTextContent += currentTextContent
        element.innerHTML = formattedTextContent
      }
    }

    setFoundPages(pages)
  }, [searchTerm])

  const onGoToPage = (pageNum: number) => {
    setIsSearchResultOpen(false)
    goToPage(pageNum)
  }

  return (
    <div ref={searchResultRef} className="w-96 relative">
      <input
        onChange={(e) => updateSearch(e.target.value.toLowerCase())}
        className="w-full p-2"
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Search"
      />
      {
        isSearchResultOpen && (
          <div className="absolute top-full w-full left-0 bg-cover-white">
            {
              searchTerm.length >= 2 && <p className="p-2 font-bold">{foundPages.length ? `Found on ${foundPages.length} pages` : 'Nothing found'}</p>
            }
            {
              foundPages.map(p => (
                <button
                  key={p.title}
                  onClick={() => onGoToPage(p.pageNum)}
                  className="text-left w-full p-2 hover:bg-paper-white"
                >
                  {p.title}
                </button>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Search
