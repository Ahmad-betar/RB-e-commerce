import "./App.css";
import Routes from "../routes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const test = document.getElementsByTagName("head")[0];

  console.log({ test });

  return (
    <>
      <Routes></Routes>
      <Toaster />
    </>
  );
}

export default App;
