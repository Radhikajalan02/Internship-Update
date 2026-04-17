import axios from "axios"

const api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})
//to fetch the data
export const fetchPosts = async ()=> {
  try{
    const res= await api.get("/posts?_start=0&_limit=3");
   return res.status===200 ? res.data : [];
  }catch(error){
    console.log(error);
  }
};
// here in the api only we can set a limit of how many posts or data numbers we want to fetch in one page and then in the query key we can pass the number 3 in  the query key

// TO FETCH THE INDIVIDUAL DATA
export const fetchIndvPost=async(id)=>{
  try {
   const res= await api.get(`/posts/${id}`);
   return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error)
  }
}