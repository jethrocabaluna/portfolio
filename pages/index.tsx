import { NextPage } from 'next'
import Book from '@/components/Book'

const Home: NextPage = () => {
  return (
    <main>
      <div className="relative h-screen">
        <div className="relative h-full p-24">
          <Book />
        </div>
      </div>
    </main>
  )
}

export default Home
