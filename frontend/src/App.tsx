import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Гллавная</p></Layout>}/>
        <Route path="/search" element={<Layout><p>Поиск</p></Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;