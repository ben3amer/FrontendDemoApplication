import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LoadingComponent from "./Components/Display/LoadingComponent";
import { routes } from "./Routes";

interface ApplicationProps {
  store: any;
  persistor: any;
}

const App = (props: ApplicationProps) => {
  return (
    <Provider store={props.store}>
      <PersistGate loading={<LoadingComponent />} persistor={props.persistor}>
        <Router>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};
export default App;
