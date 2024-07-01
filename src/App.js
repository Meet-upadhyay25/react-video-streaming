import { Header } from "./components";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Watch } from "./pages";
import Layout from "./layout/Layout";
import appStore from "./services/redux/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

const App = () => {
  return (
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
  );
};

export default App;
