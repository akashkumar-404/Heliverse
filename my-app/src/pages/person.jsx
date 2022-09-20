import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useLocation,  useSearchParams } from "react-router-dom";
import Filter from "../components/filter";
import addData, { getPerson } from "../redux/action";
import {Button, Card, Grid, Paper} from "@mui/material"

import axios from "axios";
import Teams from "./teams";
import { Searchbar } from "../components/searchbar";


const Person = () => {
  const person=useSelector (state=>state.AppReducer.person)
  const dispatch=useDispatch()
  const [search]=useSearchParams()
  const location =useLocation()
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
const [teams,setTeam]=useState([]);

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
      gender:search.getAll("gender"),
      available:search.getAll('available'),
       _page:currentPage,
       _limit:20
    }
    }
  
    dispatch(getPerson(filterPerson))
  },[location.search,currentPage])


console.log(search.getAll('available'))

const handleteam=(item)=>{
    let a=item.domain
    let array=teams.filter(function(el){
        return el.domain==a
    })
    if(array.length==0 && item.available==true ){
        //setTeam(...teams,item)
       teams.push(item)
        console.log(teams.length)
        dispatch(addData(teams))
        console.log(teams)
    }
    else{
        alert('user not avilable')
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
   
    <div style={{display:"flex",marginTop:"100px"}}>
        <Filter />
      <div style={{width:'70%',marginLeft:'60px'}}>
      
        
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >{
          
          person&&person.map((item)=>
          <Grid item xs={2} sm={4} md={4} >
          <Paper sx={{ bgcolor: "deepPurple[500]" }} style={{backgroundColor:'gray'}} elevation={3}>
            <div style={{backgroundColor:'white'}}>
                 <img src={item.avatar} style={{width:"200px"}}/>
                 </div>
                  <h4>{item.first_name} {" "}{item.last_name}</h4>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>Domain:{' '}{item.domain}</p>
                  <Button style={{padding:"5px",color:"white",backgroundColor:"blue"}} variant="contained" onClick={()=>handleteam(item)}>ADD</Button>
                  
              </Paper>
              </Grid>
         )
        }</Grid>
        <div style={{marginTop:'25px'}}>
        <Button style={{padding:"15px",color:"white",backgroundColor:"#008080"}} variant="contained" disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>Prev</Button>
        <Button>{currentPage}</Button>
        <Button style={{padding:"15px",color:"white",backgroundColor:"#008080"}} variant="contained" disabled={currentPage===50} onClick={()=>setCurrentPage(currentPage+1)}>Next</Button>
        </div>
      </div>
      
    </div>
</>
  );
  
};

export default Person;