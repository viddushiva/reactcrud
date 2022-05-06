import "./App.css";
import Header from "./Components/OldComponents/Header";
import PageNotFound from "./Components/OldComponents/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./Components/Students";
import AddStudent from "./Components/AddStudent";
import { StudentProvider } from "./Components/StudentContext";
import Update from "./Components/Update";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Admin from "./Components/OldComponents/Admin";
import Dashboard from "./Dashboard";

toast.configure();
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <StudentProvider>
          <Routes>
            {/* <Route path="/" element={<Students />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard/:email" element={<Dashboard />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/students" element={<Students />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/students-desc" element={<AddStudent />} />
            <Route path="/students-desc/:id" element={<Update />} />
          </Routes>
        </StudentProvider>
      </Router>
    </div>
  );
}

export default App;
