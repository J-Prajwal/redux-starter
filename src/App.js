import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if()
  // }, [isAuth])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
