// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

const SignUpForm = forwardRef(({close, submit}, ref) => {
  const states = ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo",
                 "Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger",
                 "Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT",]

  return(
    <div className="p-8">
      {/* <div className="float-right text-slate-400 mb-4"><a onClick={close}><FontAwesomeIcon icon={faClose} /></a></div> */}
      <form ref={ref} action="" onSubmit={submit} method="POST">
        <div className="mb-3">
          <label className="block invisible text-slate-400 md:visible" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Enter your full name"
            className="border-slate-800 border-[1.5px] outline-0 rounded-lg p-2 w-full text-slate-600" />
        </div>
        <div className="mb-3">
          <label className="block invisible text-slate-400 md:visible" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="Provide a valid email address"
            className="border-slate-800 border-[1.5px] outline-0 rounded-lg p-2 w-full text-slate-600" />
        </div>
        <div className="mb-3">
          <label className="block invisible text-slate-400 md:visible" htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="Provide a valid phone number"
            className="border-slate-800 border-[1.5px] outline-0 rounded-lg p-2 w-full text-slate-600" />
        </div>
        <div className="mb-3">
          <label className="block invisible text-slate-400 md:visible" htmlFor="state">State</label>
          <select id="state" name="state" required className="border-slate-800 border-[1.5px] outline-0 rounded-lg p-2 w-full text-slate-600">
            <option disabled={true}>Select your state of residence</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="block invisible text-slate-400 md:visible" htmlFor="business_name">Business Name</label>
          <input type="text" id="business_name" name="business_name" required placeholder="Provide the full name of your business" 
            className="border-slate-800 border-[1.5px] outline-0 rounded-lg p-2 w-full text-slate-600" />
        </div>
        <div className="mt-10 flex gap-4">
          <button onClick={close} className="w-1/2 border-slate-800 border-2 rounded-lg text-slate-950 hover:bg-slate-100">Cancel</button>
          <button type="submit" className="w-1/2 bg-primary text-white p-3 rounded-lg hover:opacity-80">Submit</button>
        </div>
      </form>
    </div>
  );
});

export default SignUpForm;