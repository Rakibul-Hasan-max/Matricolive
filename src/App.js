import { RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth height="20" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
