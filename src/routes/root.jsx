import { Outlet } from "react-router-dom";
import {Footer} from "../layout/Footer";
import {Header} from "../layout/Header";

export const Root = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
