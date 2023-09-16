export default () => {
    return (
     <div className="w-full-flex">
      <div>
          <select className="block w-full border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500">
          <option selected>Filter</option>
            <option selected>Subject</option>
            <option value = "Cr">Credits</option>
            <option value="P">Prof</option>
          </select>
      </div>
     </div>
      
    )
}
