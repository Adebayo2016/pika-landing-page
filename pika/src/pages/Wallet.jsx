import transferIcon from "../assets/transfer.png";
import walletIcon from "../assets/wallet.png";
import downloadIcon from "../assets/download.png";
import productIcon from "../assets/product.svg";
import { PlotBarChart, PlotPieChart } from "../components/PlotChart";
import { useState } from "react";

const Wallet  = () => {
    const data = [
        { label: 'Estimated revenue', value: 400, labelMarkType: 'square' },
        { label: 'Delivery balance', value: 300, labelMarkType: 'square' },
    ];
    const revenueData = {
        Weekly: [57, 7, 19, 16, 22, 12, 30],
        Monthly: [42, 24, 56, 45, 3, 30, 20, 15, 10, 5, 8, 12]
    };
    const plotLabels = {
        Weekly: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        Monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
    const colors = ['#474445', '#000000'];
    const histories = [
        {name: "Routely API", time: "2 days ago", amount: 2000.00},
        {name: "Routely API", time: "2 days ago", amount: 2000.00},
        {name: "Routely API", time: "2 days ago", amount: 2000.00},
    ];
    const [revenueFreq, setRevenueFreq] = useState('Weekly');

    return(
        <div className="py-12 h-full mx-4 overflow-y-auto">
            <div className="flex justify-between gap-4">
                <div className="rounded-3xl bg-[#D9D9D9] p-6 w-1/2">
                    <h2>Estimated sales</h2>
                    <p className="font-semibold text-4xl py-4">#3,500,000.00</p>
                </div>
                <div className="rounded-3xl bg-[#D9D9D9] p-6 w-1/2">
                    <h2>Delivery balance</h2>
                    <p className="font-semibold text-4xl py-4">#650,000.00</p>
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">
                <div className="w-7/12">
                    <div className="flex justify-between gap-2 mb-4 text-sm">
                        <div className="flex justify-between items-center gap-2 rounded-full p-3 bg-[#D9D9D9]">
                            <img src={transferIcon} alt="transfer to bank" />
                            <div className="text-nowrap">Transfer to bank</div>
                        </div>
                        <div className="flex justify-between items-center gap-2 rounded-full p-3 bg-[#D9D9D9]">
                            <img src={walletIcon} alt="transfer to wallet" />
                            <div className="text-nowrap">Transfer to wallet</div>
                        </div>
                        <div className="flex justify-between items-center gap-2 rounded-full p-3 bg-[#D9D9D9]">
                            <img src={downloadIcon} alt="downlaod report" />
                            <div className="text-nowrap">Download reports</div>
                        </div>
                    </div>
                    <div className="rounded-3xl px-6 pt-3 bg-[#D9D9D9]">
                        <div className="flex justify-between">
                            <h3>Revenue trend</h3>
                            <div className="inline-flex text-sm">
                                <button onClick={() => setRevenueFreq('Weekly')} 
                                    className={"px-2 py-1 mr-2 rounded-xl border-2 border-slate-900 " + (revenueFreq === 'Weekly' ? " bg-slate-900 text-white" : "")}>Weekly</button>
                                <button onClick={() => setRevenueFreq('Monthly')} 
                                    className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (revenueFreq === 'Monthly' ? " bg-slate-900 text-white" : "")}>Monthly</button>
                            </div>
                        </div>
                        <div>
                            <PlotBarChart data={revenueData[revenueFreq]} labels={plotLabels[revenueFreq]} color={colors} height={300} />
                        </div>
                    </div>
                </div>
                <div className="w-5/12 rounded-3xl px-4 pt-3 bg-[#D9D9D9]">
                    <div className="my-4 text-xs">
                        <PlotPieChart data={data} colors={colors} size={100} />
                    </div>
                    <div className="mb-4">
                        {histories.map((history,index) => {
                            return(
                                <div className="flex justify-between p-1 rounded-2xl bg-[#a0a0a0] mb-1" key={index}>
                                    <img src={productIcon} alt="product" className="bg-black px-3 py-1 rounded-2xl" />
                                    <div>
                                        <div className="text-sm font-semibold">{history.name}</div>
                                        <small className="text-xs">{history.time}</small>
                                    </div>
                                    <div className="font-semibold">${history.amount}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;