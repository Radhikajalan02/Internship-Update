import { useQuery } from "@tanstack/react-query";
import { fetchIndvPost, fetchPosts } from "../../API/api";
import { NavLink, useParams } from "react-router-dom";

export const FetchIndv=()=>{
   
   const {id}= useParams();

    const {data,isPending,isError,error} = useQuery({
        queryKey:["post"],
        queryFn: ()=> fetchIndvPost(id),
    
    });

    if(isPending) return <p>Loading...</p>
   if(isError) return <p>SError:{error.message || "something went wrong!"}</p>
   if(!data) return <h2>No Data found</h2>


     return (
        <div>
            <ul className="section-accordion">
                <h1>Post ID number {id}</h1>
                <li>
                    <p>ID:{data.id}</p>
                    <p>TITLE:{data.title}</p>
                    <p>BODY:{data.body}</p>
                </li>
                <NavLink to = "/rq">
                <button>Go Back</button>
                </NavLink>
            </ul>
        </div>
     )
};