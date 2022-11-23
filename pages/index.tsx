import { NextPage } from 'next'
import Book from '@/components/Book'

const Home: NextPage = () => {
  return (
    <main>
      <div className="relative h-screen">
        <div className="relative h-full sm:px-5 xl:px-24 overflow-hidden">
          <Book />
        </div>
      </div>
    </main>
  )
}

export default Home
