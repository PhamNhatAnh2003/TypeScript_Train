import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import UserDefault from "./layouts/user/Default/UserDefault";
import PrivateRoute from "./routes/PrivateRoute";
import NoHeader from "./layouts/other/noHeader/noHeader";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.element;
          let Layout = UserDefault;
          if (route.layout) Layout = route.layout;
          else if (route.layout === null) Layout = NoHeader;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {privateRoutes.map((route, index) => {
          const Page = route.element;
          let Layout = UserDefault;
          if (route.layout) Layout = route.layout;
          else if (route.layout === null) Layout = NoHeader;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute role={route.role}>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
