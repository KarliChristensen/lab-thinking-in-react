function Searchbar({ query, setQuery, setInStock }) {
  console.log(query);

  return (
    <div className="flex justify-center">
      <div>
        <input
          className="bg-slate-200 py-2 px-4 rounded-lg shadow-md text-black"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="ml-10">
        <h1 className="text-1">Toggle Available Goods</h1>

        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-slate-500"
          onChange={(e) => setInStock(e.target.checked)}
        />
        <span className="text-slate-500">In Stock Only</span>
      </div>
    </div>
  );
}

export default Searchbar;
