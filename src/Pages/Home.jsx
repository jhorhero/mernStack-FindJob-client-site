import React from 'react'
import { useState,useEffect } from 'react';
import Banner from '../components/Banner'
import Cards from '../components/Cards';
import Jobs from './Jobs';
import Sidebar from '../sidebar/sidebar';

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
    console.log(e.target.value)
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
      filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice)    <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs)
    }
    return filteredJobs.map((data,i)=> <Cards key={i} data={data}></Cards>)
  }

  const result = filteredData(job,selected, query);
  return (
    <div>
        <Banner query={query} handleButtonFilter={handleButtonFilter} handleChange={handleChange} />
        {/* main content */}
        <div className='bg-[#FAFAFA]  md:grid grid-cols-4 gap-4 lg:px-24 px-4 py-12'>
          <div className='bg-gray-200 p-4 rounded'>
            <Sidebar  handleSelectChange={handleSelectChange} handleButtonFilter={handleButtonFilter} />
          </div>
          <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result} /></div>
          <div className='bg-gray-200 p-4 rounded'>Right</div>
          
        </div>
    </div>
  )
}

export default Home