import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import data from '../Utils/db';
import Searchbar from '../components/searchbar';

function SearchBar() {
  const [query,setQuery]=useState('')
  const [suggestions,setSuggestions]=useState([])
  const queryHandler=useCallback((val)=>{
    setQuery(val)
  },[])

useEffect(()=>{
if(query===''){
  setSuggestions([])
}
else {
  let newListofSuggestions=data.filter(item=>{
    const queryPeople=query.trim().toLocaleLowerCase()
    return item.first_name.toLowerCase().indexOf(queryPeople) !==-1 ?true:false
  }).map(item=>item.first_name+' ' +item.last_name);
  console.log(newListofSuggestions)
    setSuggestions(newListofSuggestions)
}
},[query])

  return (
    <div className="App">
      <Searchbar setQuery={queryHandler} suggestions={suggestions}/>
    </div>
  );
}

export default SearchBar;