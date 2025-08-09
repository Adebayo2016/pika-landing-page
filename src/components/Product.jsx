

const Product = ({prod}) => {
    return(
        <div className="flex items-center bg-slate-900 p-2 rounded-xl mb-2">
            <img src={prod.image} alt={prod.name} className="w-2/12 h-[30px] rounded-xl mr-3" />
            <div className="text-white/75">{prod.name}</div>
        </div>
    );
};

export default Product;