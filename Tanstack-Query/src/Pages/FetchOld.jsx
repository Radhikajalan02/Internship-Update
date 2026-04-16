import React from 'react'
import { useState,useEffect } from 'react';
import { fetchPosts } from '../API/api';

export const FetchOld = () => {
  const [posts,setPosts]=useState([]);

  
    const getPostData=async()=>{
      try{
        const res=await fetchPosts();
        console.log(res);
        res.status===200 ? setPosts(res.data ) : [];
        setPosts
          }catch(error){
        console.log(error);
        return [];
      }
    
    }
    useEffect(()=>{
      getPostData();
   },[]);
  return (
    <div>
      <ul className='section-accordion'>
        {posts?.map((curElem)=>{
          const {id,title,body}=curElem;
          return(
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchOld