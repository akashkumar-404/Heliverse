import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [search, setSearch] = useSearchParams();
  const [category, setCategory] = useState(search.getAll("domain") || []);

  const handleChekBox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
    console.log(newCategory)  
};
  
  useEffect(() => {
    if (category) {
      setSearch({ domain: category });
    }
  }, [category]);
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div>
        <div>
          <input
            type="checkbox"
            value="Sales"
            checked={category.includes("Sales")}
            onChange={handleChekBox}
          />
          <label>Sales</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Finance"
            checked={category.includes("Finance")}
            onChange={handleChekBox}
          />
          <label>Finance</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Marketing"
            checked={category.includes("Marketing")}
            onChange={handleChekBox}
          />
          <label>Marketing</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="IT"
            checked={category.includes("IT")}
            onChange={handleChekBox}
          />
          <label>IT</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Management"
            checked={category.includes("Management")}
            onChange={handleChekBox}
          />
          <label>Management</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="UI Designing"
            checked={category.includes("UI Designing")}
            onChange={handleChekBox}
          />
          <label>UI Designing</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Business Development"
            checked={category.includes("Business Development")}
            onChange={handleChekBox}
          />
          <label>Business Development</label>
        </div>
        {/* <div>
          <input type="checkbox" value="Female" 
          checked={gender.includes("Female")}
          onChange={handleChekBox}/>
          <label>Female</label>
        </div>
        <div>
          <input type="checkbox" value="Male" 
          checked={gender.includes("Male")}
          onChange={handleChekBox}/>
          <label>Male</label>
        </div>
        <div>
          <input type="checkbox" value="available" 
          checked={category.includes("available")}
          onChange={handleChekBox}/>
          <label>Available</label>
        </div>
        <div>
          <input type="checkbox" value="available" 
          checked={category.includes("Yes")}
          onChange={handleChekBox}/>
          <label>Male</label>
        </div> */}
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
