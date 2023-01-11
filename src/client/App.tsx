import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import PageWrappar from "./PageWrapper";

const App: VFC<{ serverData?: any }> = ({ serverData = null }) => {
  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const { path, component: C } = routes[key];
        return (
          <Route
            key={path}
            path={path}
            element={
              <PageWrappar
                key={path}
                PageComponent={C}
                serverData={serverData}
              />
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
