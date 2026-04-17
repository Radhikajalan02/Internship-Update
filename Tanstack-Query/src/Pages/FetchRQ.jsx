import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../API/api';
import { NavLink } from 'react-router-dom';


export const FetchRQ = () => {
  
const {data,isPending,isError,error}=useQuery({
    queryKey:['posts',3],
     //queryKey is an array or string that uniquely identifies a query and is used to cache,refetch or update data when certain dependencies changes (works like useState)
    queryFn:fetchPosts,
    //queryFn works like useEffect
    //gcTime:1000, this is garbage collection time and its default value is 5mins  i.e cache time
    //staleTime:1000*10, //this stops refetching for 10 secs as the gc time already has the data in cache and we dont want to hit the server for atleast 10 secs in this case (jabtak data fresh rahega server ko request nahi jaega) DEFAULT VALUE=0
    refetchInterval:1000, //here the user doesnt have to manually refresh or refetch data as the data would be fetched in regular intervals and the ui will be updated automatically but it stops as soon as we go to any other tab or out of scope so we have (refetchIntervalInBackground:true and by default it is false)to handle this issue
   });

   
   //useQuery fetches data from the api in the server and accepts a min of two arguments which is queryKey and queryFn and it gives data,isLoading,isError and error

   //conditional rendering based on loading,error and posts data
   if(isPending) return <p>Loading...</p>
   if(isError) return <p>SError:{error.message || "something went wrong!"}</p>

  return ( 
    <div>
      <ul className='section-accordion'>
        {data?.map((curElem)=>{
          const {id,title,body}=curElem;
          return(
            <li key={id}>
            <NavLink to={`/rq/${id}`}>  {/*in jsx when we want to use javascript we use it in curly braces*/}
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
           </NavLink>
             </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchRQ