import { Header, Footer, Main, Switcher } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Switcher />
      <ToastContainer />
      <Header name="Seth" />
      <Main />
      <Footer name="Seth" />
    </>
  );
}

export default App;
