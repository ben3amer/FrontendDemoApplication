import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Customers from './Pages/Customers';
import AddCustomer from './Pages/Customers/Add';
import EditCustomer from './Pages/Customers/Edit';

function App() {
  const routes = [
    {
      path: "/",
      element: <Customers />
    },
    {
      path: "/addCutomer",
      element: <AddCustomer />
    },
    {
      path : "/editCustomer/:id",
      element: <EditCustomer />
    }
  ];
  return (
    <Router>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Router>
  );
}
export default App;
