import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import InstantDelivery from "./InstantDelivery";
import arrow_up from "../assets/arrow_up.svg";
import DeliveryHistory from "./DeliveryHistory";
import ScheduleDelivery from "./ScheduleDelivery";
import TrackDelivery from "./TrackDelivery";
import { PlotBarChart } from "../components/PlotChart";

const Dashboard = () => {
    const [numDeliveryType, setNumDeliveryType] = useState('Weekly');
    const [numSubscriptionType, setNumSubscriptionType] = useState('Monthly');
    const [plotType, setPlotType] = useState('Delivery');
    const [plotFreq, setPlotFreq] = useState('Weekly');
    const [deliveryAction, setDeliveryAction] = useState('instant');
    const plotLabels = {
        Weekly: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        Monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
    const plotData = {
        Weekly: [57, 7, 19, 16, 22, 12, 30],
        Monthly: [42, 24, 56, 45, 3, 30, 20, 15, 10, 5, 8, 12]
    }
    const colors = ['#474445'];


    return (
        <div className="py-12 grid grid-cols-2 gap-4 w-full h-full overflow-y-auto">
            <div className="dashboard">
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-3xl bg-[#D9D9D9] p-4">
                        <h3 className="font-semibold">Number of deliveries</h3>
                        <p className="py-6 font-bold text-3xl">760/{numDeliveryType}</p>
                        <button onClick={() => setNumDeliveryType('Weekly')} 
                            className={"px-2 py-1 px-2 mr-2 rounded-xl border-2 border-slate-900 " + (numDeliveryType === 'Weekly' ? " bg-slate-900 text-white" : "")}>Weekly</button>
                        <button onClick={() => setNumDeliveryType('Monthly')} 
                            className={"px-2 py-1 px-2 rounded-xl border-2 border-slate-900 " + (numDeliveryType === 'Monthly' ? " bg-slate-900 text-white" : "")}>Monthly</button>
                    </div>
                    <div className="rounded-3xl bg-[#D9D9D9] p-4">
                        <h3 className="font-semibold">Number of subscription</h3>
                        <p className="py-6 font-bold text-3xl">34/{numSubscriptionType}</p>
                        <button onClick={() => setNumSubscriptionType('Weekly')} 
                            className={"px-2 py-1 px-2 mr-2 rounded-xl border-2 border-slate-900 " + (numSubscriptionType === 'Weekly' ? " bg-slate-900 text-white" : "")}>Weekly</button>
                        <button onClick={() => setNumSubscriptionType('Monthly')} 
                            className={"px-2 py-1 px-2 rounded-xl border-2 border-slate-900 " + (numSubscriptionType === 'Monthly' ? " bg-slate-900 text-white" : "")}>Monthly</button>
                    </div>
                </div>

                <div className="rounded-3xl bg-[#D9D9D9] p-3 w-full mt-6">
                    <div className="flex justify-between">
                        <div>
                            <div className="border-2 border-slate-700 rounded-xl flex items-center gap-2">
                                <button onClick={() => setPlotType('Delivery')} 
                                    className={"py-1 px-2 " + (plotType === 'Delivery' ? "bg-slate-700 rounded-lg text-white" : "")}>Delivery</button>
                                <button onClick={() => setPlotType('Transaction')} 
                                    className={"py-1 px-2 " + (plotType === 'Transaction' ? "bg-slate-700 rounded-lg text-white" : "")}>Transaction</button>
                            </div>
                        </div>
                        <div className="inline-flex">
                            <button onClick={() => setPlotFreq('Weekly')} 
                                className={"px-2 py-1 mr-2 rounded-xl border-2 border-slate-900 " + (plotFreq === 'Weekly' ? " bg-slate-900 text-white" : "")}>Weekly</button>
                            <button onClick={() => setPlotFreq('Monthly')} 
                                className={"px-2 py-1 rounded-xl border-2 border-slate-900 " + (plotFreq === 'Monthly' ? " bg-slate-900 text-white" : "")}>Monthly</button>
                        </div>
                    </div>
                    <div className="plot mt-6">
                        <PlotBarChart data={plotData[plotFreq]} labels={plotLabels[plotFreq]} color={colors} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-6">
                    <div className={"rounded-3xl p-3 relative"  + (deliveryAction === 'instant' ? " bg-slate-900 text-white" : " bg-[#D9D9D9] ")}
                        onClick={() => setDeliveryAction('instant')}>
                        <a className="absolute top-2 right-2">
                            <img src={arrow_up} alt="arrow up" className={"w-[40px] h-[40px] " + (deliveryAction === 'instant' ? "invert-0" : "invert")} />
                        </a>
                        <p className="font-bold text-lg mt-[30px]">Instant Delivery</p>
                        <p>Send packages from inventory</p>                       
                    </div>
                    <div className={"rounded-3xl p-3 relative"  + (deliveryAction === 'schedule' ? " bg-slate-900 text-white" : " bg-[#D9D9D9] ")}
                        onClick={() => setDeliveryAction('schedule')}>
                        <a className="absolute top-2 right-2">
                            <img src={arrow_up} alt="arrow up" className={"w-[40px] h-[40px] " + (deliveryAction === 'schedule' ? "invert-0" : "invert")} />
                        </a>
                        <p className="font-bold text-lg mt-[30px]">Schedule Delivery</p>
                        <p>Set a time to send packages</p>                       
                    </div>
                    <div className={"rounded-3xl p-3 relative"  + (deliveryAction === 'track' ? " bg-slate-900 text-white" : " bg-[#D9D9D9] ")}
                        onClick={() => setDeliveryAction('track')}>
                        <a className="absolute top-2 right-2">
                            <img src={arrow_up} alt="arrow up" className={"w-[40px] h-[40px] " + (deliveryAction === 'track' ? "invert-0" : "invert")} />
                        </a>
                        <p className="font-bold text-lg mt-[30px]">Track Delivery</p>
                        <p>Monitor your package in real-time</p>                       
                    </div>
                    <div className={"rounded-3xl p-3 relative" + (deliveryAction === 'history' ? " bg-slate-900 text-white" : " bg-[#D9D9D9] ")}
                        onClick={() => setDeliveryAction('history')}>
                        <a className="absolute top-2 right-2">
                            <img src={arrow_up} alt="arrow up" className={"w-[40px] h-[40px] " + (deliveryAction === 'history' ? "invert-0" : "invert")} />
                        </a>
                        <p className="font-bold text-lg mt-[30px]">Delivery History</p>
                        <p>Check for your history</p>                       
                    </div>
                </div>
            </div>
            <div className="content h-full overflow-y-auto bg-[#D9D9D9] rounded-3xl">
                { deliveryAction === 'instant' && <InstantDelivery /> }
                { deliveryAction === 'schedule' && <ScheduleDelivery /> }
                { deliveryAction === 'track' && <TrackDelivery /> }
                { deliveryAction === 'history' && <DeliveryHistory /> }
            </div>
        </div>
    );
};

export default Dashboard;

// import * as React from 'react';
// import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';

// const labels = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];
// const lData = [42, 24, 56, 45, 3];
// const rData = [57, 7, 19, 16, 22];
// const colors = ['#006BD6', '#EC407A'];

// export default function SxStyling() {
//   return (
//     <BarChart
//       sx={(theme) => ({
//         [`.${barElementClasses.root}`]: {
//           fill: (theme.vars || theme).palette.background.paper,
//           strokeWidth: 2,
//         },
//         [`.MuiBarElement-series-l_id`]: {
//           stroke: colors[0],
//         },
//         [`.MuiBarElement-series-r_id`]: {
//           stroke: colors[1],
//         },
//         [`.${axisClasses.root}`]: {
//           [`.${axisClasses.tick}, .${axisClasses.line}`]: {
//             stroke: '#006BD6',
//             strokeWidth: 3,
//           },
//           [`.${axisClasses.tickLabel}`]: {
//             fill: '#006BD6',
//           },
//         },
//         border: '1px solid rgba(0, 0, 0, 0.1)',
//         backgroundImage:
//           'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
//         backgroundSize: '35px 35px',
//         backgroundPosition: '20px 20px, 20px 20px',
//         ...theme.applyStyles('dark', {
//           borderColor: 'rgba(255,255,255, 0.1)',
//           backgroundImage:
//             'linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)',
//         }),
//       })}
//       xAxis={[{ data: labels }]}
//       series={[
//         { data: lData, label: 'l', id: 'l_id' },
//         { data: rData, label: 'r', id: 'r_id' },
//       ]}
//       colors={colors}
//       height={300}
//     />
//   );
// }
