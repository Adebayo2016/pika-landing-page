import { NavLink, Outlet } from "react-router-dom";
import { usePersistLogin } from "../accessory/Auth";

const MenuBar = () => {
    usePersistLogin();

  return (
    <div className="">
        <div className="flex flex-col-2 h-screen">
            <div className="sidebar bg-[#D9D9D9] w-64 h-full py-12 mr-3 relative ">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="dashboard" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="wallet" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Wallet</NavLink>
                        </li>
                        <li>
                            <NavLink to="inventory" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Inventory</NavLink>
                        </li>
                        <li>
                            <NavLink to="customer" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Customer Management</NavLink>
                        </li>
                        <li>
                            <NavLink to="ecommerce" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Ecommerce</NavLink>
                        </li>
                    </ul>
                 </nav>  {/*"block py-1 mb-4 pl-8 " */}
                <div className="absolute bottom-12 w-full">
                    <NavLink to="dev" className={({isActive}) => isActive ? "block py-1 mb-4 pl-8 bg-slate-900 text-white" : "block py-1 mb-4 pl-8"}>Dev mode</NavLink>
                </div>

            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    </div>
  );
};

export default MenuBar;