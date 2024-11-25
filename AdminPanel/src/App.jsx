import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './page';  
import AddProperty from './AddProperty/property'; 
import UpdateProperty from './updateProperty/update'; 
import UpdateRoom from './updateProperty/updateRoom'
import { AuthProvider } from './Context';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<AddProperty />} />
        <Route path="/addProperty/property" element={<AddProperty />} />
        <Route path="/updateProperty" element={<UpdateProperty />} />
        <Route path="/updateRoom" element={<UpdateRoom />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
