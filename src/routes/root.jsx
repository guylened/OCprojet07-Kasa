import { Outlet } from "react-router-dom";
import {Footer} from "../layout/Footer";
import {Header} from "../layout/Header";

export const Root = () => {
  return (
    <>
      <Header />      
      <main>
        <Outlet />
      </main>      
      <Footer />      
    </>
  );
}
