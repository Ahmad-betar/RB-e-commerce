import "./App.css";
import Routes from "../routes";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <>
      <Header />

      <Routes></Routes>

      <Footer />
    </>
  );
}

export default App;
