import React from 'react'
import { useState,useEffect } from 'react';
import Banner from '../components/Banner'

const Home = () => {
  const [selected,setSelected] = useState(null)
  const [job,setJob] = useState([])
  useEffect(() => {
    fetch('jobs.json')
    .then(res=> res.json())
    .then(res=> 
      
      {
        setJob(res)
      }

     )
  }, []);

// console.log(job)


  const [query,setQuery] =useState('')

  const handleChange =(e)=>{
      e.preventDefault()
      setQuery(e.target.value)

  }
  // filter data 
  const filteredItems = job.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // console.log(filteredItems)

  //radio type filter 
  const handleSelectChange =(e)=>{
    setSelected(e.target.value)
  }

  // button based filter function 
  const handleButtonFilter =(e)=>{
    setSelected(e.target.value)
  }
   
  // main function 
  const filteredData = (job,selected,query)=>{
    let filteredJobs = job;
    
    //filtering input  itmes
    if(query){
      filteredJobs = filteredItems;
    }

    //categoroy filtering
    if(selected){
      filteredJobs
    }
  }
  return (
    <div>
        <Banner query={query} handleChange={handleChange} />

    </div>
  )
}

export default Home