import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useLocation,  useSearchParams } from "react-router-dom";
import Filter from "../components/filter";
import addData, { getPerson } from "../redux/action";
import {Card, Paper} from "@mui/material"

import axios from "axios";
import Teams from "./teams";


const Person = () => {
  const person=useSelector (state=>state.AppReducer.person)
  const dispatch=useDispatch()
  const [search]=useSearchParams()
  const location =useLocation()
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
const [team,setTeam]=useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3005/profile')
//         .then(res => {
//                 setData(res.data);
//                 setLoading(false);
//             })
//             .catch(() => {
//                 alert('There was an error while retrieving the data')
//             })
// }, [])
  
  useEffect(()=>{
    let filterPerson={
      params:{domain:search.getAll("domain"),
       _page:currentPage,
       _limit:20
    }
    }
  
    dispatch(getPerson(filterPerson))
  },[location.search,currentPage])

const handleteam=(item)=>{
    let a=item.domain
    let array=team.filter(function(el){
        return el.domain==a
    })
    if(array.length==0){
        setTeam([...team,item])
        dispatch(addData(team))
        console.log(team)
    }
    else{
        alert('already added domain')
    }

    
}


//console.log(person)
//   useEffect(()=>{
    
//     console.log(person.length)
//   },[])
// const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords =person.slice(indexOfFirstRecord, indexOfLastRecord);
//     const nPages = Math.ceil(persom.length / recordsPerPage)
//console.log(person)
  return (
    <>
    <div style={{display:"flex" }}>
        <Filter />
      <div style={{marginLeft:"50px"}}>
      
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>{
          
          person&&person.map((item)=>
          <Paper sx={{ bgcolor: "deepPurple[500]" }} elevation={3}>
                 <img src={item.avatar} style={{width:"200px"}}/>
                  <p>{item.first_name} {" "}{item.last_name}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>{item.domain}</p>
                  <button onClick={()=>handleteam(item)}>ADD</button>
                  
              </Paper>
         )
        }</div>
        <button disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
        <button>{currentPage}</button>
        <button disabled={currentPage===50} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
      </div>
      
    </div>
</>
  );
  
};

export default Person;