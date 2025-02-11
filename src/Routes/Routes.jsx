import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Loading from "../Pages/Loading";
import * as pages from "../Pages";
import routes from "./routes";

const Routes = () => (
  <BrowserRouter>
    <Loading>
      <Switch>
        {routes.map(route => {
          const { attributes, page, requireAuth } = route;
          const Page = pages[page];
          return requireAuth ?
            <AuthRoute key={`auth-route-${page}`} attributes={attributes} component={Page} />
            :
            <Route key={`route-${page}`} {...attributes} component={Page} />
        })}
      </Switch>
    </Loading>
  </BrowserRouter>
);

export default Routes;
