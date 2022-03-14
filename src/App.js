import './App.css';
import CreateLink from './Components/CreateLink';

// React-Router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from './Components/Pay';
import Footer from './Components/Footer';
import UpiApps from './Components/UpiApps';
import Shop from './Components/Shop';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={
            <CreateLink />
          } />
          <Route path="/pay" element={
            <Pay heading="Pay using QR Code or Click to Pay Now"/>
          } />
          <Route path="/shop" element={
            <Shop />
          } />
          <Route path="/shop/pay" element={
            <Pay heading="Mohan Metals - Pay using QR Code or Click to Pay Now"/>
          } />

        </Routes>
        <UpiApps />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
