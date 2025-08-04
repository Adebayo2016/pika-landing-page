import { useState } from "react";
import subscription_bg from "../assets/subscription_bg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";
import { api, auth } from "../accessory/Auth";
import Modal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: "0",
    period: "/month",
    features: [
      "20 product inventory",
      "20 Customers",
      "20 Customers connect"
    ],
    cta: "Get started for free",
    code: "PBSF",
    disabled: false,
  },
  {
    name: "Retail",
    price: "15000",
    period: "/month",
    features: [
      "Unlimited Inventory",
      "Real-time monitoring",
      "Unlimited Connection",
      "Delivery priority"
    ],
    cta: "Get started",
    code: "PBSB",
    disabled: false,
  },
  {
    name: "Enterprise",
    price: "25000",
    period: "/month",
    features: [
      "Unlimited product Inventory",
      "Real-time package monitoring",
      "API Access",
      "E-commerce store",
      "Custom url integration",
      "Unlimited vendor connection",
      "Unlimited customer connection"
    ],
    cta: "Get started",
    code: "PBSP",
    disabled: true,
  },
];

export default function Subscription() {
    const [selected, setSelected] = useState("Retail");
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const payment = useMutation({
        mutationFn: async ({url, data}) => {return await api.post(url, data)},
        onSuccess: (data) => { console.log(data);},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error making payment</div>"));},
    });
    const subscription = useMutation({
        mutationFn: async ({url, data}) => {return await api.post(url, data)},
        onSuccess: (data) => { console.log(data);},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error creating subscription</div>"));},
    });

    const handleSubmit = async (code, price) => {
        const user = auth.getUser();
        const paymentData = {
            "email": user?.email,
            "amount": price, 
            "transaction_type": code
        };
        const subData = {
            "customerFullName": user?.fullName,
            "email": user?.email,
            "phone": user?.phone,
            "businessId": user?.uid
        };

        try {
            const [paymentRes] = await Promise.all([
                payment.mutateAsync({url:'/api/initialize-payment', data:paymentData}),
            ]);
            const paymentLink = paymentRes.data.authorization_url;
            // {
            //     "authorization_url": "https://checkout.paystack.com/79dt5wh5x5yh9qu",
            //     "reference": "pbsb-rX2QwjRHixDUUEV",
            //     "access_code": "79dt5wh5x5yh9qu"
            // }
            window.open(paymentLink, '_blank');
            subscription.mutateAsync({url:'/api/subscriptions', data:subData})
        } catch (error) {
            setError("Error creating subscription");
            console.log("Error creating subscription: ", error);
        }
        
        // sample response
        // {
        //     "message": "Subscription created successfully",
        //     "subscription": {
        //         "CustomerFullName": "Test 2",
        //         "Email": "afiakinyeoscar@gmail.com",
        //         "Phone": "+2347080558053",
        //         "ProductCount": 0,
        //         "SubscribedAt": "2025-08-03T14:44:56.246790614Z",
        //         "CustomerID": "8DlQ6EDZbtgQxIBrHld2R62YtyD2",
        //         "BusinessID": "8DlQ6EDZbtgQxIBrHld2R62YtyD2"
        //     },
        //     "subscriptionId": "8DlQ6E2YtyD2"
        // }
    };

    return (
        <div>

            {/* {payment.isSuccess && subscription.isSuccess &&  */}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="flex flex-col items-center">
                        <p className="mb-8">Subscription successfully created</p>
                        <Link to="/">Go back to home page</Link>
                    </div>
                </Modal>
            {/* } */}

            <div className="bg-white flex flex-col items-center justify-center py-16 px-4 text-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                    Simplify Delivery. Streamline Inventory. Grow Your Business
                </h1>
                <p className="text-gray-500 mb-12">
                    One powerful platform to connect, manage, and deliver
                </p>

                <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-center items-stretch relative text-left">
                    {tiers.map((tier) => {
                    const isSelected = tier.name === selected;
                    const baseStyle =
                        "rounded-3xl p-6 md:p-8 w-full lg:w-[320px] shadow-md border transition-all duration-300 flex flex-col justify-between relative";
                    const selectedStyle =
                        "bg-black text-white lg:scale-110 border-black z-20";
                    const unselectedStyle = "bg-white text-black border-gray-200 z-10";

                    return (
                        <div
                        key={tier.name}
                        {...(!tier.disabled && {onClick:() => setSelected(tier.name)})}
                        className={`${baseStyle} ${isSelected ? selectedStyle : unselectedStyle} ${tier.disabled ? " bg-gray-200" : " bg-white cursor-pointer"}`}
                        >
                        {isSelected && (
                            <div className="absolute inset-0 bg-black bg-opacity-90 rounded-3xl -z-10 mx-[-10px]"></div>
                        )}
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                                {tier.name === "Enterprise" && (
                                <p className="text-sm mb-6 text-gray-400">
                                    Scale without limits
                                </p>
                                )}
                                {(tier.name === "Free" || tier.name === "Retail") && (
                                <p className="text-sm mb-6 text-gray-400">
                                    Start small. Deliver smart
                                </p>
                                )}

                                <div className="text-3xl font-bold mb-4">
                                    #{tier.price}
                                    <span className="text-base font-normal">{tier.period}</span>
                                </div>

                                <ul className="space-y-3 text-left mb-6">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                    <span className="text-lg"><FontAwesomeIcon icon={faCheckCircle} 
                                        className={`${isSelected ? "text-white" : "text-black"}`}
                                    /></span>
                                    <span>{feature}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>

                            <button
                                className={`mt-auto py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                                isSelected
                                    ? "bg-white text-black"
                                    : "bg-black text-white"
                                }`}
                                {...(tier.disabled || subscription.isPending ? {disabled:true} : {onClick:() => setSelected(tier.name), disabled:false})}
                                onClick={() => handleSubmit(tier.code, tier.price)}
                            >
                                {subscription.isPending && <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />}
                                {tier.cta}
                            </button>
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="">
                <img src={subscription_bg} alt="" className="-mt-64 h-full w-full" />
            </div>
        </div>
    );
}
