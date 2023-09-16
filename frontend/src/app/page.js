import SearchBar from './searchBar';
import Course from './course';

let defaultCourses = [
  {
    dept: "CS",
    number: 18000,
    credits: 4
  },
  {
    dept: "MA",
    number: 26100,
    credits: 4
  },
]
export default function Home() {
  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Finder</h1>
        </div>
        <SearchBar/>
        {
          defaultCourses.map((c) => (
            <Course key="{c}" course={c}/>
          ))
        }
      </main>
  )
}
