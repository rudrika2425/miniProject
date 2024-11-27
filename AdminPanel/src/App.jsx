import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Page from './page';  
import AddProperty from './AddProperty/property'; 
import UpdateProperty from './updateProperty/update'; 
import UpdateRoom from './updateProperty/updateRoom'
import Detail from './AddProperty/Detail'
import Nav from './Navbar/nav';
import { useSearchParams } from 'react-router-dom';
const App = () => {

  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get('email');

  localStorage.setItem('userEmail', userEmail);

  return (
    <>
      <Nav/>  
      <Routes>
        <Route path="/" element={<AddProperty />} />
        <Route path="/addProperty/property" element={<AddProperty />} />
        <Route path="/updateProperty" element={<UpdateProperty />} />
        <Route path="/updateRoom" element={<UpdateRoom />} />
        <Route path="/details" element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
