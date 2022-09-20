import { Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Teams = () => {
    const teams=useSelector (state=>state.AppReducer.teams)
    console.log(teams)
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>{
          
        teams&&teams.map((item)=>
        <Paper sx={{ bgcolor: "deepPurple[500]" }} elevation={3} style={{backgroundColor:'gray',paddingBottom:'30px'}}>
            <div style={{backgroundColor:'white'}}>
               <img src={item.avatar} style={{width:"200px"}}/>
               </div>
                <p>{item.first_name} {" "}{item.last_name}</p>
                <p>{item.gender}</p>
                <p>{item.email}</p>
                <p>{item.domain}</p>
                
            </Paper>
       )
      }</div>
  )
}

export default Teams