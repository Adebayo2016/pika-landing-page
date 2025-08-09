import flag from "../assets/flag.png";
import motorcycle from "../assets/motorcycle.svg";
import call from "../assets/call.png";
import sum from "../assets/sum.svg";
import userIcon from "../assets/user.png";
import locationIcon from "../assets/location.png";
import { useState } from "react";
import Product from "../components/Product";
import PackageWeight from "../components/PackageWeight";
import VehicleType from "../components/VehicleType";

const InstantDelivery = () => {
    const [useRegisteredLocation, setUseRegisteredLocation] =  useState(false);
    const [pickupLocation, setPickUpLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [receiversName, setReceiversName] = useState("");
    const [receiversNo, setReceiversNo] = useState("");
    const [category, setCategory] = useState("");
    const [itemsCount, setItemsCount] = useState("");
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0.0);

  return (
    <div className="h-full">
      <form action="" method="POST" className="flex flex-col justify-between relative h-full">
        <div className="p-4">
            <div className="rounded-xl p-2 flex items-center mb-2 bg-white">
                <img src={locationIcon} className="w-[32px] px-2" />
                <input type="text" name="pickup" id="pickup" placeholder="Your Pickup location" value={pickupLocation} onClick={() => setUseRegisteredLocation(true)}
                    onChange={(e) => setPickUpLocation(e.target.value)} className="w-11/12 outline-none" />
            </div>
            {useRegisteredLocation &&
                <div>
                    <button type="button" className="p-2 rounded-xl mb-2 ml-4 bg-white">Use registered location</button>
                </div>
            }
            <div className="rounded-xl p-2 flex items-center mb-2 bg-white">
                <img src={flag} className="w-[32px] px-2" />
                <input type="text" name="destination" id="destination" placeholder="Destination" value={destination}
                    onChange={(e) => setDestination(e.target.value)} className="w-11/12 outline-none" />
            </div>
            <div className="rounded-xl p-2 flex items-center mb-2 bg-white">
                <img src={userIcon} className="w-[32px] px-2" />
                <input type="text" name="receiversName" id="receiversName" placeholder="Receiver's name" value={receiversName}
                    onChange={(e) => setReceiversName(e.target.value)} className="w-11/12 outline-none" />
            </div>
            <div className="rounded-xl p-2 flex items-center mb-2 bg-white">
                <img src={call} className="w-[32px] px-2" />
                <input type="tel" name="receiversNo" id="receiversNo" placeholder="Receiver's number" value={receiversNo}
                    onChange={(e) => setReceiversNo(e.target.value)} className="w-11/12 outline-none" />
            </div>
            <div className="flex items-center justify-between mb-4">
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}
                    className="outline-none rounded-xl p-2 w-[48%] appearance-none text-gray-500"
                >
                    <option value="">Package Category</option>
                </select>
                {/* <select id="restaurantPhoneCode" className="w-24 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gray-500 dark:focus:border-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 rounded-md shadow-sm block">
                    <option value="1">+1</option>
                </select> */}
                <input type="number" name="numItems" id="numItems" placeholder="Number of items" value={itemsCount} min={0}
                    onChange={(e) => setItemsCount(e.target.value)} className="outline-none rounded-xl p-2 px-4 w-[48%]" />
            </div>
            <div>
                <input type="search" name="search" id="search" placeholder="Search product" value={search}
                    onChange={(e) => setSearch(e.target.value)} className="w-full outline-none rounded-xl p-3 mb-3" />
            </div>
            <div className="searchResult h-[93px] bg-white rounded-xl">
                <Product prod={{image:"", name:"Tripod stand for camera and heavy equipment"}} />
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <PackageWeight detail={{name:"Light Package", length:"72", width:"50", height:"45", weight:"50kg"}} />
                    </div>
                    <div className="w-[48%]">
                        <VehicleType vehicle={{image:motorcycle, name:"Motorcycle"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#B5B4B4] p-6 rounded-3xl w-full mt-auto">
            {total > 0.0 &&
                <div className="total bg-[#6C696A] rounded-3xl px-3 py-2 flex mb-3 items-center">
                    <img src={sum} /> <div className="font-semibold text-white ml-4">Total #{total}</div>
                </div>
            }
            <button type="submit" className="bg-[#474445] w-full py-6 rounded-3xl text-white">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default InstantDelivery;