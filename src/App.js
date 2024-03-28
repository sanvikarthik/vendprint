import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentUpload from './components/DocumentUpload';
import PrintingOptions from './components/PrintingOptions';
import PaymentInterface from './components/PaymentInterface';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/printing-options" element={<PrintingOptions />} />
          <Route path="/payment" element={<PaymentInterface />} />
          {/* Assign DocumentUpload component to the root route */}
          <Route path="/" element={<DocumentUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
