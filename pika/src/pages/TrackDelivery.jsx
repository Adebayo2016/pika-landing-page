import product from "../assets/product.svg";
import { useState } from "react";
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const TrackDelivery = () => {
    const [filter, setFilter] = useState('inTransit');
    const API_KEY = "";
    const deliveries = [
        {id: 1, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
        {id: 2, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
        {id: 3, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
        {id: 4, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
        {id: 5, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
        {id: 6, productName: "Product name", address: "4, Langbasa - Billings way, Oregun Ikeja"},
    ];

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="h-full min-h-1/2 bg-white rounded-3xl m-1 mb-4">
                <APIProvider apiKey={API_KEY}>
                    <Map
                    className="rounded-3xl"
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    />
                </APIProvider>
            </div>
            <div className="mt-auto">
                <div className="mx-6 mb-6 bg-white rounded-xl p-3">
                    <div className="text-gray-500 py-2">4, Langbasa - Billings way, Oregun Ikeja</div>
                    <hr className="h-0.5 border-t-0 bg-neutral-100" />
                    <div className="text-gray-500 py-2 flex items-center justify-between">
                        <div>Adeola Esoghenerukeve</div>
                        <div>#5,600</div>
                        <div>Clothes</div>
                    </div>
                    <hr class="h-0.5 border-t-0 bg-neutral-100" />
                    <div className="text-gray-500 py-2 flex items-center gap-4">
                        <div><img src="" alt="" className="rounded-full" /></div>
                        <div>
                            <p className="text-xs text-gray-500 mb-3">Rider</p>
                            <div className="text-slate-900 font-semibold">Daniel Theophilus</div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-3 mb-4 justify-end mr-2">
                    <button onClick={() => setFilter('inTransit')} 
                        className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'inTransit' ? " bg-slate-900 text-white" : "")}>In transit</button>
                    <button onClick={() => setFilter('delivered')} 
                        className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (filter === 'delivered' ? " bg-slate-900 text-white" : "")}>Delivered</button>
                </div>
                <div className="history grid gap-2 p-3">
                    {deliveries.map((delivery,index) => {
                        return(
                            <div className="bg-white flex rounded-xl px-2 py-1 items-center" key={index}>
                                <img src={product} alt="Image Name" className="bg-slate-900 rounded-full p-1 h-[30px]" />
                                <div className="w-10/12 px-3">
                                    <div className="text-sm">{delivery.productName}</div>
                                    <div className="text-[10px]">{delivery.address}</div>
                                </div>
                                <button className="bg-slate-900 text-white rounded-xl px-2 py-1 whitespace-nowrap text-xs">{filter === 'inTransit' ? "In transit" : "Delivered"}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrackDelivery;