import './App.css';
import CreateLink from './Components/CreateLink';

// React-Router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from './Components/Pay';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={
            <CreateLink />
          } />
          <Route path="/pay" element={
            <Pay />
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
