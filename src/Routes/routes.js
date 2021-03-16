const routes = [
  {
    page: "OverUnder",
    requireAuth: true,
    attributes: {
      path: "/over-under",
      exact: true,
      strict: true,
    },
  },
  {
    page: "Login",
    attributes: {
      path: "/login",
      exact: true,
      strict: true,
    },
  },
  {
    page: "NotFound",
    attributes: {},
  },
];

export default routes;