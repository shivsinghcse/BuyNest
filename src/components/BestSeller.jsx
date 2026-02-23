import { useState } from "react"
import Product from "./Product"


const BestSeller = () => {
    const [bestSellerProducts, setBestSellerProducts] = useState([
      {
        id: "PRD004",
        title: "Men's Grey Formal Shirt",
        brand: "ModernThreads",
        price: 1199,
        discount: 12,
        rating: 4.0,
        stock: 22,
        image: "/products/shirt4.jpg"
      },
      {
        id: "PRD005",
        title: "Men's Navy Blue Casual Shirt",
        brand: "StyleForge",
        price: 949,
        discount: 18,
        rating: 4.2,
        stock: 20,
        image: "/products/shirt5.jpg"
      },
      {
        id: "PRD006",
        title: "Men's Olive Green Shirt",
        brand: "PrimeFit",
        price: 1049,
        discount: 14,
        rating: 4.4,
        stock: 17,
        image: "/products/shirt6.jpg"
      },
      {
        id: "PRD007",
        title: "Men's Maroon Casual Shirt",
        brand: "MetroWear",
        price: 899,
        discount: 16,
        rating: 4.1,
        stock: 19,
        image: "/products/shirt7.jpg"
      },
      {
        id: "PRD008",
        title: "Men's Sky Blue Cotton Shirt",
        brand: "NextGen Apparel",
        price: 999,
        discount: 11,
        rating: 4.3,
        stock: 21,
        image: "/products/shirt8.jpg"
      },
      {
        id: "PRD009",
        title: "Men's Beige Casual Shirt",
        brand: "ClassicAura",
        price: 1099,
        discount: 13,
        rating: 4.2,
        stock: 16,
        image: "/products/shirt9.jpg"
      },
      {
        id: "PRD010",
        title: "Men's Printed Party Shirt",
        brand: "FusionWear",
        price: 1299,
        discount: 22,
        rating: 4.6,
        stock: 14,
        image: "/products/shirt10.jpg"
      },
      {
        id: "PRD011",
        title: "Men's Striped Casual Shirt",
        brand: "UrbanEdge",
        price: 949,
        discount: 17,
        rating: 4.0,
        stock: 23,
        image: "/products/shirt11.jpg"
      },
      {
        id: "PRD012",
        title: "Men's Classic Black Shirt",
        brand: "StyleNest",
        price: 1199,
        discount: 19,
        rating: 4.5,
        stock: 12,
        image: "/products/shirt12.jpg"
      },
      {
        id: "PRD013",
        title: "Men's Casual Linen Shirt",
        brand: "AuraFashion",
        price: 1349,
        discount: 21,
        rating: 4.4,
        stock: 15,
        image: "/products/shirt13.jpg"
      }
    ])
    return (
        <>
            <h1 className="text-3xl font-bold mt-28 mb-16"><span className="inline-block w-20 border-2 border-gray-600 mx-2 align-middle rounded-full"></span>Best Seller<span className="inline-block w-20 border-2 border-gray-600 mx-2 align-middle rounded-full"></span></h1>


            <div className="grid grid-cols-5 gap-12">
                {
                    bestSellerProducts.map((item) => {
                        return (
                            <Product key={item.id} data={item}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BestSeller