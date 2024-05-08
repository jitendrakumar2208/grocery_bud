import AddGrocery from "./components/AddGrocery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <AddGrocery />
    </>
  );
}

export default App;
