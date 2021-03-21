const routes = [
  {
    page: "Login",
    requireAuth: false,
    attributes: {
      path: "/login",
    },
  },
  {
    page: "Home",
    requireAuth: false,
    attributes: {
      path: "/",
      exact: true
    }
  },
  {
    page: "OverUnder",
    requireAuth: true,
    attributes: {
      path: "/over-under",
      exact: true,
      strict: true
    },
  },
  {
    page: "NotFound",
    requireAuth: false,
    attributes: {}
  },
];

export default routes;