import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Customers from "./Pages/Customers";
import AddCustomer from "./Pages/Customers/Add";
import EditCustomer from "./Pages/Customers/Edit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoadingComponent from "./Components/Display/LoadingComponent";

interface ApplicationProps {
  store: any;
  persistor: any;
}

const App = (props: ApplicationProps) => {
  const routes = [
    {
      path: "/",
      element: <Customers />,
    },
    {
      path: "/addCutomer",
      element: <AddCustomer />,
    },
    {
      path: "/editCustomer/:id",
      element: <EditCustomer />,
    },
  ];
  return (
    <Provider store={props.store}>
      <PersistGate loading={<LoadingComponent />} persistor={props.persistor}>
        <Router>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Router>{" "}
      </PersistGate>
    </Provider>
  );
};
export default App;
