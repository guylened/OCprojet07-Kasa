import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";



export default function Root() {
  return (
    <>
     <header><Header /></header>
      <main>                   
        <Outlet />
      </main>
     <footer><Footer /></footer>
    </>
  );
}