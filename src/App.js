import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signup, Signin } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import {useAuthListener} from './hooks'

export default function App() {
  const {user} = useAuthListener();
  console.log(user)
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin></Signin>
        </IsUserRedirect>

        <IsUserRedirect
          exact
          user={user}
          path={ROUTES.SIGN_UP}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup></Signup>
        </IsUserRedirect>

        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse></Browse>
        </ProtectedRoute>

        <IsUserRedirect
          exact
          user={user}
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home></Home>
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
