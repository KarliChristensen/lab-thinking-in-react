function Searchbar({ query, setQuery, setInStock}) {
  console.log(query);

  return (
    <div>
      <input
        className="bg-slate-500"
        type="Search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div>
      <h1>Toggle Available goods</h1>
      <input type="checkbox" onChange={(e) => setInStock(e.target.checked)} />

      </div>
    </div>
  );
}

export default Searchbar;
