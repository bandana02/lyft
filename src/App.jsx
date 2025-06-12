
import { Route, Routes } from "react-router"
import Navbar from './container/navbar';
import Footer from './container/footer';
import Home from './pages/home';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
