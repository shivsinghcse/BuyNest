

const Product = (props) => {
    const item = props.data
    
  return (
    <div className="p-4 shadow-xl hover:shadow-(color:--primary-color)/30 rounded-xl hover:cursor-pointer transition duration-300">
        <img src={item.image} alt="" className="transition duration-300 hover:scale-95"/>
        <div className="text-left py-2">
            <div className="flex justify-between items-center">
                <h1 className="text-md font-bold text-gray-800">{item.brand}</h1>
                <div>
                    <i className="ri-star-fill font-semibold text-(--primary-color)"></i>
                    <label className="font-semibold">{item.rating.toFixed(1)}</label>
                </div>
            </div>
            <p className="text-gray-700 text-[16px]">{item.title}</p>
            <div className="space-x-2">
                <span className="text-gray-600 font-bold"> ₹{Math.round(item.price - (item.price * item.discount)/100).toLocaleString()}</span>
                <del className="text-gray-600 font-bold"> ₹{item.price.toLocaleString()}</del>
                <span className="text-red-600">({item.discount}% OFF)</span>
            </div>
        </div>
    </div>
  )
}

export default Product