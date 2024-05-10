/* 
   App3 =>
           * Using Loader From Bootstrab
           * Using Carousles From Bootstrab      

*/

import { useEffect, useState } from 'react';
import Home from './Components/Home';
import Loader from './Components/Loader';
function App() {
  const [isloading,setisloading] = useState(true);

useEffect(() => {
    setTimeout(() =>{
      setisloading(false);
    },1000)
},[])

  return (
   <>
   {
    isloading ? <Loader /> : <Home />
  }
   </>
  );
}

export default App;
