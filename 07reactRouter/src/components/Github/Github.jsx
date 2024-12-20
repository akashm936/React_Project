;
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data =  useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akashm936')
    //     .then(res => res.json())  
    //     .then(data => {
    //         // console.log(data);
    //         setData(data)
    //     })
    // },  [])

  return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers : {data.followers}
         <img src={data.avatar_url} alt='Git hub Picture' width={300}></img> 
         <div> Name : {data.name} </div>

         <div> Public Repositories : {data.public_repos} </div>
         </div>
         
    
        </>
         
  )
}

export default Github


export const githubinfoloader = async () =>{
    const res = await fetch('https://api.github.com/users/akashm936')
    return res.json()
}