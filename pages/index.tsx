import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/produtos" passHref>
        <a>Go to page</a>
      </Link>
    </div>
  )
}

export default Home
