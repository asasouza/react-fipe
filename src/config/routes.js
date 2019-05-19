import { Home, PageNotFound } from "../pages";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "home"
  },
  {
  	component: PageNotFound,
  	key: '404'
  }
];

export default routes;