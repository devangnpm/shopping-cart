import  Homepage  from "./Homepage";
import  App  from "./App";
import  Cartpage  from "./Cartpage";

const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "cartpage",
      element: <Cartpage />,
    },
  ];
  
  export default routes;