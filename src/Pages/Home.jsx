import Header from '../Components/Elements/Header'
import Slider from '../Components/Elements/Slider'
import Toggle from '../Components/Elements/Toggle'
import Welcome from '../Components/Elements/Welcome'

function Home() {
  
  return (
    < > 
<div id='Home'>
      <Header  />
      <Welcome />
     </div>
     <div id='page-2'>
     <Toggle  />
     <Slider />
    </div>
    </>

  )
}

export default Home
