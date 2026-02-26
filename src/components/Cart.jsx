import Layout from "./Layout"

const Cart = () => {
    const cartItems = [
        {
        id: "PRD013",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
        {
        id: "PRD011",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
        {
        id: "PRD011",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
        {
        id: "PRD011",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
        {
        id: "PRD011",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
        {
        id: "PRD011",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg",
        size: 'M'
      },
    ]

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0)
    const totalDiscount = cartItems.reduce((acc, item) => acc +  (item.price * (item.discount)/100), 0)
    
    return(
        <>
            <Layout>
                <div className="flex md:flex-row flex-col justify-center md:items-start items-center md:gap-12 gap-4">
                    <div className="md:w-6/12 w-11/12 bg-(--primary-color)/20 md:p-12 p-6 rounded shadow-md md:my-12 mt-8 h-fit">
                    <h1 className="text-lg font-bold">Added Items</h1>
                    <hr className="text-gray-500 my-6"/>

                    {
                        cartItems.map((item) => {
                            return(
                                <div key={item.id} className="bg-white md:my-6 my-3 md:px-6 px-3 py-4 flex md:gap-8 gap-4">
                                    <div className="flex flex-col items-center justify-center w-fit ">
                                        <img src={item.image} alt={item.title}  className="h-24"/>
                                        <div className="flex gap-2 mt-4">
                                            <button className="border w-6 h-6 border-gray-500 flex justify-center items-center rounded-full hover:cursor-pointer transition active:scale-95">
                                                <i className="ri-subtract-line text-lg font-bold text-gray-500"></i>
                                            </button>
                                            <label className="border w-10 h-6 border-gray-500 flex justify-center items-center">1</label>
                                            <button className="border w-6 h-6 border-gray-500 flex justify-center items-center rounded-full hover:cursor-pointer transition active:scale-95">
                                                <i className="ri-add-line text-lg font-bold text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h1>{item.brand.toLocaleUpperCase()} {item.title}</h1>
                                        <p className="text-gray-500">Size: {item.size}</p>
                                        <div className="space-x-3">
                                            <del className="text-gray-500">₹{item.price.toLocaleString()}</del>
                                            <label className="text-md font-semibold">₹{Math.round(item.price - (item.price * item.discount) / 100).toLocaleString()}</label>
                                            <label className="text-green-500">{item.discount}% off</label>
                                        </div>
                                        <button className="uppercase text-gray-500 font-semibold py-1 px-3 rounded mt-4 hover:bg-gray-200 hover:cursor-pointer transition active:scale-95 border border-gray-300 hover:text-red-500">remove</button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }

                    <div className="flex justify-end">
                        <button className="uppercase text-right mt-4 py-3 px-8 text-lg font-semibold bg-(--primary-color) text-white hover:cursor-pointer shadow">place order</button>
                    </div>

                    
                </div>
                <aside className="md:w-3/12 w-11/12 bg-(--primary-color)/20 p-12 rounded shadow-md my-12 h-120">
                    <h1 className="text-md font-semibold">Price details</h1>
                    <div className="bg-(--primary-color)/10 py-4 px-6 my-4 rounded space-y-6">
                        <div className="flex justify-between">
                            <label className="text-gray-500 underline decoration-dashed underline-offset-4 font-normal decoration-gray-500">MRP</label>
                            <label>₹{totalAmount}</label>
                        </div>

                        <hr className="text-gray-400"/>

                        <div className="flex justify-between">
                            <label className="text-gray-500 underline decoration-dashed underline-offset-4 font-normal decoration-gray-500">Discount</label>
                            <label className="text-green-500">-₹{totalDiscount}</label>
                        </div>

                        <hr className="text-gray-400"/>

                        <div className="flex justify-between">
                            <label className="font-semibold">Total Amount</label>
                            <label className="font-semibold">₹{totalAmount - totalDiscount}</label>
                        </div>

                        <div className="bg-white py-2 px-4 rounded-md">
                            <p className="text-green-500">You will save ₹{totalDiscount.toLocaleString()} on this order</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-12">
                        <div>
                            <i className="ri-shield-check-fill text-3xl text-gray-700"></i>
                        </div>
                        <p className="text-gray-700 font-semibold">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                    </div>
                </aside>
            </div>
            </Layout>
        </>
    )
}

export default Cart