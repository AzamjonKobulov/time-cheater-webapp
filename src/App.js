import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Lists from "./pages/Lists";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <main className="relative flex justify-center min-h-screen bg-main ml-80 2xl:ml-96 3xl:ml-[600px] py-16 3xl:py-32 px-10 2xl:px-16 3xl:px-24">
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lists" element={<Lists />} />
            </Routes>
          </div>
          <img
            src="/assets/images/img-people.png"
            alt="People"
            className="absolute bottom-0 right-0"
          />
        </main>
      </Router>
    </div>
  );
}

export default App;
