import Image from 'next/image'
import SearchBar from './searchBar';
import Course from './course';
import Filter from './filter';

export default function Home() {
  return (
      <main className="min-h-screen justify-between p-24 bg-white">
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Finder</h1>
        <SearchBar/>
        <Course dept="CS" number={18000} credits={4}/>
        <div>
          <Filter/>
        </div>
      </main>
  )
}
