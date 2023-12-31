import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
//     const [data, setdata] = useState("");
    
//    useEffect(()=>{
//     fetch('https://api.github.com/users/sarthakbhardwaj27')
//     .then(response => response.json())
//     .then(data=> {
//         console.log(data);
//         setdata(data)
//     })
//    },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="git picture" width={100} />
    <a href= {data.html_url} target='_blank'>Go to Profile</a>
    </div>
  )
}

export default Github
export const getGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/sarthakbhardwaj27')
    return response.json();
}