import Header from "../components/Header";
import Cards from "../components/Cards";
import Data from "../components/data"

export default function App(){

  const DataArr = Data.map((data) =>{

    return( <Cards
    key = {data.id}
    entry = {data}/>
    )

  })

  return(
    <>
  <Header/>
  {DataArr}


  </>

  )
}