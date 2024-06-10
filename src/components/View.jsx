import React, { useEffect, useState } from 'react'
import NavFriend from './NavFriend'
import axios from 'axios'

const View = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{
      axios.get("https://friendsapi-re5a.onrender.com/view").then(
          (response)=>{
            setData(response.data)
          }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    .finally()
      }
      useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavFriend/>
        <center><h3>VIEW</h3></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend Name</th>
      <th scope="col">Nick Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {data.map((value,index)=>
    {
      return   <tr>
      <td scope="row">{value.name}</td>
      <td>{value.friendName}</td>
      <td>{value.friendNickName}</td>
      <td>{value.DescribeYourFriend}</td>
    </tr>
      
      

    })}
    
    
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View