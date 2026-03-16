// import './App.css'
import UserCard from "./components/ProductCard"
import chai from "./assets/chai.avif"
function App() {
  

  return (
    <>
      <div className='container'>
        <UserCard name="coffee" desc="desc1" image={chai}  imageStyle={{"height":"100px","width":"100px", "border-radius":"50%"}} style={{"border-radius":"50%"}}/>
        <UserCard name="tea" desc="desc2"/>
        <UserCard name="chai" desc="desc3"/>
       </div>
    </>
  )
}

export default App
