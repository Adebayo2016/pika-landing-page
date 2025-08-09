

const VehicleType = ({vehicle}) => {
    const {image, name} = vehicle;

    return (
        <div className="bg-slate-900 p-3 rounded-xl flex justify-between">
            <div>
                <div className="mb-3 text-white">{name}</div>
                <div className="text-white/50 text-[8px]">Recommended</div>
            </div>
            <div>
                <img src={image} className="w-[35px] h-[35px] rounded-full bg-white p-2" />
            </div>
        </div>
    );
};

export default VehicleType;