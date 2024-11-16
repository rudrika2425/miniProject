import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './page';  
import AddProperty from './AddProperty/property'; 
import UpdateProperty from './updateProperty/update'; 
import UpdateRoom from './updateProperty/updateRoom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddProperty />} />
        <Route path="/addProperty/property" element={<AddProperty />} />
        <Route path="/updateProperty" element={<UpdateProperty />} />
        <Route path="/updateRoom" element={<UpdateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
