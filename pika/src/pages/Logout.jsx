import { useEffect } from "react";
import { auth } from "../accessory/Auth";
import { useNavigate } from "react-router-dom";


const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.logout();
    navigate('/login');
  }, [navigate]);
  return null;
};

export default Logout;