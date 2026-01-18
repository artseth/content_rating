import ContentRating from "./Components/ContentRating";
import Greeting from "./Components/Greeting";

function App() {
  return (
   <>
  <ContentRating/>

  <Greeting name="Alice" age={26}/>
   </>
  )
}

export default App
