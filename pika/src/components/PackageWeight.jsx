

const PackageWeight = ({detail}) => {
    return (
        <div className="bg-slate-900 p-3 rounded-xl">
            <div className="mb-3 text-white">{detail.name}</div>
            <div className="text-white/50 text-[8px]">{detail.length} x {detail.width} x {detail.height} {detail.weight}</div>
        </div>
    );
};

export default PackageWeight;