import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Alert = ({message, type="success"}) => {
  let iconClass = "";

  if(type == "success"){

    iconClass = "text-green-500";
  }

  return (
    <div className="text-center content-center text-slate-600 p-20 h-[65vh]">
      <FontAwesomeIcon icon={faCheckCircle} className={iconClass + " bg-white text-6xl pb-5 pt-10"} />
      <div className="pb-10">{message}</div>
    </div>
  );
};

export default Alert;