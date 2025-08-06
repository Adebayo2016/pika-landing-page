import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import trashIcon from "../assets/trash.png";
import dropDownIcon from "../assets/dropdown.png";
import imageAddIcon from "../assets/image_add.png";


const Inventory  = () => {
    const inventories = [
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},
        {product:"Stainless steel bracelet", category:"Feather", price: 400, stock:25},

    ];

    return(
        <div className="py-12 grid grid-cols-2 gap-4 w-full h-full overflow-y-auto">
            <div className="rounded-3xl bg-[#D9D9D9] p-4">
                <h2 className="py-6">Add new product</h2>
                <form method="POST" action="" encType="multipart/form-data">
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="product">Product</label>
                        <input type="text" name="product" id="product" className="py-2 px-3 rounded-xl mb-1" placeholder="Name your product" />
                        <textarea name="productDesscription" id="productDescription" cols="30" rows="3" className="py-2 px-3 rounded-xl resize-none" placeholder="Write a short description about your product"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="basePrice">Price</label>
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" name="basePrice" id="basePrice" className="py-2 px-3 rounded-xl" placeholder="Add base price" />
                            <input type="text" name="stock" id="stock" className="py-2 px-3 rounded-xl" placeholder="How many are in stock" />
                            <input type="text" name="discount" id="discount" className="py-2 px-3 rounded-xl" placeholder="Discount percentage" />
                            <input type="text" name="category" id="category" className="py-2 px-3 rounded-xl" placeholder="Category type" />
                        </div>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="paymentMethod">Payment</label>
                        <select name="paymentMethod" id="paymentMethod" defaultValue=""
                            className="py-2 px-3 rounded-xl appearance-none text-gray-500"
                            style={{background: `url('${dropDownIcon}') white no-repeat right center`, backgroundOrigin:"content-box"}}
                        >
                            <option value="" disabled>Select payment method</option>
                            <option value="bank">Bank</option>
                        </select>
                    </div>
                    <div className="py-2 px-3 rounded-xl bg-white">
                        <div>Add images</div>
                        <div className="flex justify-between">
                            <img src={imageAddIcon} alt="Add Image" />
                            <img src={imageAddIcon} alt="Add Image" />
                            <img src={imageAddIcon} alt="Add Image" />
                            <img src={imageAddIcon} alt="Add Image" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="bg-black text-white w-full py-2 rounded-xl">Add product</button>
                    </div>
                </form>
            </div>
            <div className="rounded-3xl bg-[#D9D9D9] p-4">
                <h2 className="py-6">Inventory</h2>
                <div>
                    <table className="w-full">
                        <thead className="text-gray-400 text-left border-b-2 border-gray-300">
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventories.map((inventory, index) => {
                                return(
                                    <tr key={index} className="border-b-2 border-gray-300">
                                        <td className="py-2">
                                            <input name="selectProduct" id={`selectProduct${index}`} type="checkbox" className="mr-3" />
                                            {inventory.product}
                                        </td>
                                        <td>
                                            <select name="category" id={`category${index}`} defaultValue={inventory.category} className="bg-transparent border border-gray-900 rounded-lg py-1">
                                                <option value="Feather">Feather</option>
                                                <option value="Light">Light</option>
                                            </select>
                                        </td>
                                        <td>&pound;{inventory.price}</td>
                                        <td>{inventory.stock}</td>
                                        <td>
                                            <img src={trashIcon} alt="trash" />
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Inventory;