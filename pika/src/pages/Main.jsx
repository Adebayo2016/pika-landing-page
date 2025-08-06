import { useState } from "react";
import Dashboard from "./Dashboard";
import { NavLink, useLocation } from "react-router-dom";
import MenuBar from "./MenuBar";

const Main = () => {
    const [activeMenu, setActiveMenu] = useState('');


  return (
    <div className="">
        <div className="flex flex-col-2">
            <MenuBar />
            <div>
                
            </div>
        </div>
    </div>
  );
};

export default Main;