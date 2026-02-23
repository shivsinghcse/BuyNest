import AdminLayout from "./Layout"

const Products = () => {
   const products = [
  {
    id: "PRD001",
    name: "Men's Black Printed Casual Shirt",
    price: 899,
    discount: 15,
    brand: "UrbanStyle",
    rating: 4.3,
    stock: 25,
    category: "Shirt",
    image: "/products/shirt1.jpg"
  },
  {
    id: "PRD002",
    name: "Men's Blue Checked Casual Shirt",
    price: 999,
    discount: 10,
    brand: "UrbanStyle",
    rating: 4.1,
    stock: 18,
    category: "Shirt",
    image: "/products/shirt2.jpg"
  },
  {
    id: "PRD003",
    name: "Men's White Slim Fit Shirt",
    price: 1099,
    discount: 20,
    brand: "UrbanStyle",
    rating: 4.5,
    stock: 30,
    category: "Shirt",
    image: "/products/shirt3.jpg"
  },
  {
    id: "PRD004",
    name: "Men's Grey Formal Shirt",
    price: 1199,
    discount: 12,
    brand: "UrbanStyle",
    rating: 4.0,
    stock: 22,
    category: "Shirt",
    image: "/products/shirt4.jpg"
  },
  {
    id: "PRD005",
    name: "Men's Navy Blue Casual Shirt",
    price: 949,
    discount: 18,
    brand: "UrbanStyle",
    rating: 4.2,
    stock: 20,
    category: "Shirt",
    image: "/products/shirt5.jpg"
  },
  {
    id: "PRD006",
    name: "Men's Olive Green Shirt",
    price: 1049,
    discount: 14,
    brand: "UrbanStyle",
    rating: 4.4,
    stock: 17,
    category: "Shirt",
    image: "/products/shirt6.jpg"
  },
  {
    id: "PRD007",
    name: "Men's Maroon Casual Shirt",
    price: 899,
    discount: 16,
    brand: "UrbanStyle",
    rating: 4.1,
    stock: 19,
    category: "Shirt",
    image: "/products/shirt7.jpg"
  },
  {
    id: "PRD008",
    name: "Men's Sky Blue Cotton Shirt",
    price: 999,
    discount: 11,
    brand: "UrbanStyle",
    rating: 4.3,
    stock: 21,
    category: "Shirt",
    image: "/products/shirt8.jpg"
  },
  {
    id: "PRD009",
    name: "Men's Beige Casual Shirt",
    price: 1099,
    discount: 13,
    brand: "UrbanStyle",
    rating: 4.2,
    stock: 16,
    category: "Shirt",
    image: "/products/shirt9.jpg"
  },
  {
    id: "PRD010",
    name: "Men's Printed Party Shirt",
    price: 1299,
    discount: 22,
    brand: "UrbanStyle",
    rating: 4.6,
    stock: 14,
    category: "Shirt",
    image: "/products/shirt10.jpg"
  },
  {
    id: "PRD011",
    name: "Men's Striped Casual Shirt",
    price: 949,
    discount: 17,
    brand: "UrbanStyle",
    rating: 4.0,
    stock: 23,
    category: "Shirt",
    image: "/products/shirt11.jpg"
  },
  {
    id: "PRD012",
    name: "Men's Classic Black Shirt",
    price: 1199,
    discount: 19,
    brand: "UrbanStyle",
    rating: 4.5,
    stock: 12,
    category: "Shirt",
    image: "/products/shirt12.jpg"
  },
  {
    id: "PRD013",
    name: "Men's Casual Linen Shirt",
    price: 1349,
    discount: 21,
    brand: "UrbanStyle",
    rating: 4.4,
    stock: 15,
    category: "Shirt",
    image: "/products/shirt13.jpg"
  }
]
    return(
        <>
            <AdminLayout>
                <div className="w-full">
                    <h1 className="text-xl font-semibold underline underline-offset-4 text-center capitalize">
                        products
                    </h1>

                    <section className="grid md:grid-cols-5 grid-cols-1 gap-12 my-12 px-6 ">
                        {
                            products.map((product) => {
                                return(
                                    <div key={product.id} className="p-6 bg-white rounded-lg shadow-lg hover:cursor-pointer transition duration-300 hover:scale-105">
                                        <img src={product.image} alt="mens-shirt" className=" w-full object-cover" />
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <h1 className="text-gray-800 text-md font-bold">{product.brand}</h1>
                                                <div>
                                                    <i className="ri-star-fill font-semibold text-(--primary-color)"></i>
                                                    <label className="font-semibold">{product.rating.toFixed(1)}</label>
                                                </div>
                                            </div>
                                            <label className="text-sm text-gray-800">{product.name}</label>
                                            <div className="flex gap-2 justify-between">
                                                <div className="flex gap-2">
                                                    <label className="text-base font-bold">₹{Math.round(product.price - (product.price * product.discount) / 100).toLocaleString()}</label>
                                                    <del className="text-base font-semibold text-gray-500">₹{product.price.toLocaleString()}</del>
                                                    <label className="text-red-600">({product.discount}% OFF)</label>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }                    
                    </section>
                </div>
            </AdminLayout>    
        </>
    )
}

export default Products