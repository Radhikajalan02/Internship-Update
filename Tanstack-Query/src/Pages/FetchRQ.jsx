import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../API/api';


export const FetchRQ = () => {
  
const {data,isLoading,isError,error}=useQuery({
    queryKey:['posts'],
     //queryKey is an array or string that uniquely identifies a query and is used to cache,refetch or update data when certain dependencies changes (works like useState)
    queryFn:fetchPosts,
    //queryFn works like useEffect
   });

   
   //useQuery fetches data from the api in the server and accepts a min of two arguments which is queryKey and queryFn and it gives data,isLoading,isError and error

   //conditional rendering based on loading,error and posts data
   if(isLoading) return <p>Loading...</p>
   if(isError) return <p>Something went wrong!</p>
   
  return ( 
    <div>
      <ul className='section-accordion'>
        {data?.map((curElem)=>{
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

export default FetchRQ