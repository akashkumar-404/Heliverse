import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [search, setSearch] = useSearchParams();
  const [category, setCategory] = useState(search.getAll("domain") || []);
  const [search1, setSearch1] = useSearchParams();
  const [category1, setCategory1] = useState(search1.getAll("gender") || []);
  const [search2, setSearch2] = useSearchParams();
  const [category2, setCategory2] = useState(search2.getAll("available") || []);

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
const handleChekBox1 = (e) => {
    const newCategory1 = [...category1];
    if (newCategory1.includes(e.target.value)) {
      newCategory1.splice(newCategory1.indexOf(e.target.value), 1);
    } else {
      newCategory1.push(e.target.value);
    }
    setCategory1(newCategory1);
    console.log(newCategory1)  
};
const handleChekBox2 = (e) => {
    const newCategory2 = [...category2];
    if (newCategory2.includes(e.target.value)) {
      newCategory2.splice(newCategory2.indexOf(e.target.value), 1);
    } else {
      newCategory2.push(e.target.value);
    }
    setCategory2(newCategory2);
    console.log(newCategory2)  
};

useEffect(() => {
    if (category2) {
      setSearch2({ available: category2 });
    }
  }, [category2]);
  
  useEffect(() => {
    if (category1) {
      setSearch1({ gender: category1 });
    }
  }, [category1]);

  useEffect(() => {
    if (category) {
      setSearch({ domain: category });
    }
  }, [category]);
  return (
    <div style={{width:'20%'}}>
      <h3>Filters</h3>
      <div style={{backgroundColor:'#CCCCFF',borderRadius:'15px'}}>
      <div >Category</div>
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
          </div>
          <label>Business Development</label>
        </div>
        </div>
        <h3>Filter according To Gender</h3>
        <div style={{backgroundColor:'#C0C0C0',borderRadius:'15px'}}>
        <div>
          <input type="checkbox" value="Female" 
          checked={category1.includes("Female")}
          onChange={handleChekBox1}/>
          <label>Female</label>
        </div>
        <div>
          <input type="checkbox" value="Male" 
          checked={category1.includes("Male")}
          onChange={handleChekBox1}/>
          <label>Male</label>
        </div>
        </div >
        <h3>Available</h3>
        <div style={{backgroundColor:'#CCCCFF', borderRadius:'15px'}}>
         <div>
          <input type="checkbox" value="available" 
          checked={category2.includes("true")}
          onChange={handleChekBox2}/>
          <label>Available</label>
        </div>
        <div>
          <input type="checkbox" value="available" 
          checked={category2.includes("false")}
          onChange={handleChekBox2}/>
          <label>Not Available</label>
        </div>
        </div>
    </div>
  );
};

export default Filter;
