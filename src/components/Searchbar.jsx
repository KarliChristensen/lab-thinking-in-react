import { useState } from 'react';

function Searchbar({query, setQuery}) {

  console.log(query);

  return (
    <div>
      <input
        className="bg-slate-500"
        type="Search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default Searchbar;
