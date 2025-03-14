import "./App.css";
import Routes from "../routes";
import { Toaster } from "@/components/ui/sonner";
import { usePixelQuery } from "./api/pixel/pixel-query";

function App() {
  const { data } = usePixelQuery();

  if (data?.meta)
    document.getElementsByTagName("head")[0].innerHTML += data?.meta;
  if (data?.snapchat)
    document.getElementsByTagName("head")[0].innerHTML += data?.snapchat;
  if (data?.tiktok)
    document.getElementsByTagName("head")[0].innerHTML += data?.tiktok;

  return (
    <>
      <Routes></Routes>
      <Toaster />
    </>
  );
}

export default App;
