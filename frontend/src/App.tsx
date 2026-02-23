import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "contact", Component: Contact },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
