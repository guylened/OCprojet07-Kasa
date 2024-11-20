import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";
import App from '../components/App.jsx'


export default function Root() {
  return (
    <>
     <header><Header /></header>
      <main> 
      <App />        
        <Outlet />
      </main>
     <footer><Footer /></footer>
    </>
  );
}