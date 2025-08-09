import product from "../assets/product.svg";
import { useState } from "react";

const DeliveryHistory = () => {
const [filter, setFilter] = useState('Delivered');
const histories = [
    {id: 1, productName: "Product name",},
    {id: 2, productName: "Product name",},
    {id: 3, productName: "Product name",},
    {id: 4, productName: "Product name",},
    {id: 5, productName: "Product name",},
    {id: 6, productName: "Product name",},
    {id: 7, productName: "Product name",},
    {id: 8, productName: "Product name",},
    {id: 9, productName: "Product name",},
    {id: 10, productName: "Product name",},
];

    return (
        <div className="h-full p-3">
            <h3 className="font-semibold mb-6">Delivery history</h3>
            <div className="filter grid grid-cols-4 gap-3 mb-4">
                <button onClick={() => setFilter('Delivered')} 
                    className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'Delivered' ? " bg-slate-900 text-white" : "")}>Delivered</button>
                <button onClick={() => setFilter('Pending')} 
                    className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'Pending' ? " bg-slate-900 text-white" : "")}>Pending</button>
                <button onClick={() => setFilter('Failed')} 
                    className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'Failed' ? " bg-slate-900 text-white" : "")}>Failed</button>
                <button onClick={() => setFilter('Cancelled')} 
                    className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'Cancelled' ? " bg-slate-900 text-white" : "")}>Cancelled</button>
            </div>
            <div className="history grid gap-2">
                {histories.map((history,index) => {
                    return(
                        <div className="bg-white flex rounded-xl px-2 py-1 items-center" key={index}>
                            <img src={product} alt="Image Name" className="bg-slate-900 rounded-full p-1 h-[30px]" />
                            <div className="w-10/12 p-3">{history.productName}</div>
                            <button className="bg-slate-900 text-white rounded-xl px-2 py-1 whitespace-nowrap text-xs">View Details</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DeliveryHistory;