import './styles/_global.scss';
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import {useState} from "react";

function Layout() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header menuData={{setMenu, menu}}/>
      <Outlet/>
      {/*<Menu menuData={{setMenu, menu}}/>*/}
    </>
  );
}

export default Layout;
