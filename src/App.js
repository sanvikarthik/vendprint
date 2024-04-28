import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrintingOptions from './components/PrintingOptions';
import PaymentInterface from './components/PaymentInterface';
import Main from './Main';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/printing-options" element={<PrintingOptions />} />
          <Route path="/payment" element={<PaymentInterface />} />
          {/* Assign DocumentUpload component to the root route */}
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
