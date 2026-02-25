import Layout from "./Layout"
import { products } from "../utils/allProducts"
import Product from "./Product";


const Collection = () => {
    console.log(products);
    return (
        <>
            <Layout>
                <div className="w-10/12 mx-auto pt-4 pb-8 flex justify-around items-center  mt-6 sticky top-16 bg-white z-40 " >
                    <div className="flex gap-1 text-xl">
                        <div>
                            <h1 className="font-bold">All Products <span className="text-gray-500 font-semibold"> - {products.length} items</span></h1>
                            <p className="text-[15px] font-semibold text-gray-500">Explore our latest collection</p>
                        </div>
                    </div>

                    <div className="relative">
                        <input type="search"  name="searchInput" id="search" className="border w-136 py-1 px-8 focus:outline-0 focus:bg-(--primary-color)/10 rounded-md border-gray-300" placeholder="Search for products, brands and more"/>
                        <button className="absolute left-2 top-1">
                            <i className="ri-search-line text-gray-500"></i>
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <label htmlFor="sort" className="mr-2 text-sm font-medium">
                            Sort by :
                        </label>

                        <select
                            name="sort"
                            id="sort"
                            className="border border-gray-300 py-1 px-3 focus:outline-0"
                        >
                            <option value="recommended">Recommended</option>
                            <option value="priceLow">Price: Low → High</option>
                            <option value="priceHigh">Price: High → Low</option>
                            <option value="rating">Top Rated</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>

                 <div className="w-10/12 mx-auto pl-28  pb-8 flex gap-24 mt-6 sticky top-32 bg-white z-40 border-b border-gray-300" >
                    <div className="flex flex-col gap-1 text-xl">
                        <h1 className="font-bold text-[17px] border-b border-gray-300 uppercase">Filters</h1>
                        <div className="flex flex-col">
                            <div className="space-x-2">
                                <input type="radio" name="filter" id="men" />
                                <label htmlFor="men" className="text-sm font-semibold text-gray-600">Men</label>
                            </div>

                            <div className="space-x-2">
                                <input type="radio" name="filter" id="women" />
                                <label htmlFor="women" className="text-sm font-semibold text-gray-600">Women</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xl">
                        <h1 className="font-bold text-[17px] border-b border-gray-300 uppercase">Categories</h1>
                        <div className="flex flex-col">
                            <div className="space-x-2">
                                <input type="checkbox" name="top" id="top" />
                                <label htmlFor="top" className="text-sm font-semibold text-gray-600 capitalize">top</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" name="bottom" id="bottom" />
                                <label htmlFor="bottom" className="text-sm font-semibold text-gray-600 capitalize">bottom</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-[17px] w-fit border-b border-gray-300 uppercase">Size</h1>

                        <div className="grid grid-cols-2 gap-x-12">
                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="xs" />
                                <label htmlFor="xs" className="text-sm font-semibold text-gray-600 capitalize">XS</label>
                            </div>

                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="s" />
                                <label htmlFor="s" className="text-sm font-semibold text-gray-600 capitalize">S</label>
                            </div>
                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="m" />
                                <label htmlFor="m" className="text-sm font-semibold text-gray-600 capitalize">M</label>
                            </div>
                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="l" />
                                <label htmlFor="l" className="text-sm font-semibold text-gray-600 capitalize">L</label>
                            </div>
                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="xl" />
                                <label htmlFor="xl" className="text-sm font-semibold text-gray-600 capitalize">XL</label>
                            </div>
                            <div className="space-x-2">
                                <input type="checkbox" name="size" id="xxl" />
                                <label htmlFor="xxl" className="text-sm font-semibold text-gray-600 capitalize">XXl</label>
                            </div>
                        </div>
                    </div>
                </div>


                <main className="w-10/12 mx-auto text-center my-8 py-8">
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-12">
                        {
                            products.map((product) => {
                                return(
                                    <Product key={product.id} data={product}/>
                                )
                            })
                        }
                    </div>
                </main>
                
                
            </Layout>
        </>
    )
}

export default Collection