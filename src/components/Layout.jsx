import { Link } from "react-router-dom"
import firebaseAppConfig from "../utils/firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(firebaseAppConfig)

const Layout = ({children}) => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const[logOutOpen, setLogOutOpen] = useState(false)

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setSession(user || null)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    const menus = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Collection',
            path: '/collection',
        },
        {
            label: 'Contact us',
            path: '/contact',
        },
    ];

    console.log(session);
    
    return(
        <>
            <div>
                <nav className="z-1000 bg-white shadow-lg shadow-(color:--primary-color)/20 sticky top-0 left-0 w-full flex justify-between px-48 select-none">
                    <div className="flex jusitfy-center items-center hover:cursor-pointer">
                        <h1 className="text-3xl font-bold text-(--primary-color) text-shadow-lg"><span className="text-(--secondary-color)">Buy</span>Nest</h1>
                    </div>
                    <ul className="list-none flex justify-center items-center gap-6">
                        
                        {
                            menus.map((menu, index) => {
                                return(
                                    <li key={index}>
                                        <Link 
                                            to={menu.path} 
                                            className="block h-full py-5 px-6 text-center text-zinc-700 text-[17px] font-semibold hover:bg-(--primary-color) hover:text-white transition duration-300"
                                        >
                                            {menu.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                        <div className=" flex gap-6 items-center justify-center">
                            <Link to={'/'} className=" p-2 rounded hover:bg-zinc-100 transition duration-300 active:scale-95 flex items-center justify-center w-10 h-10">
                                <i className="ri-poker-hearts-line text-xl"></i>
                            </Link>
                            <Link to={'/'} className=" p-2 rounded hover:bg-zinc-100 transition duration-300 active:scale-95 flex items-center justify-center w-10 h-10">
                                <i className="ri-shopping-bag-2-line text-xl"></i>
                            </Link>
                            
                            {
                                loading ? (
                                    <div className="w-10 h-10 rounded-full animate-pulse"></div>
                                ) : session !== null ? (
                                    <div className="relative" onClick={() => setLogOutOpen(!logOutOpen)}>
                                        <img
                                            src="/images/user.jpg"
                                            alt="default_user_image"
                                            className="w-10 h-10 rounded-full border-2 border-(--primary-color) hover:cursor-pointer"
                                        />

                                        {logOutOpen && (
                                            <div className="w-36   absolute top-11 -left-15 bg-white shadow-xl shadow-gray-400  rounded-md animate__animated animate__fadeIn">
                                                <Link
                                                    to="/profile"
                                                    className="flex  hover:bg-[#159a9c8f] hover:text-[#002333] px-3 py-2  border-b border-[#159a9c8f]"
                                                >
                                                    <i className="ri-user-3-line mr-2"></i>
                                                    My Profile
                                                </Link>
                                                {/* <Link
                                                    to="/cart"
                                                    className="flex  hover:bg-[#159a9c8f] hover:text-[#002333] px-3 py-2  border-b border-[#159a9c8f]"
                                                >
                                                    <i className="ri-shopping-cart-fill mr-2"></i>
                                                    Cart
                                                </Link> */}
                                                <button
                                                    className="flex  hover:bg-[#159a9c8f] hover:text-[#002333] px-3 py-2 hover:cursor-pointer w-full"
                                                    onClick={() => signOut(auth)}
                                                >
                                                    <i className="ri-logout-circle-line mr-2"></i>
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>    
                                  )  : (
                                    <Link to={'/login'} className="text-lg font-semibold px-6 py-2 bg-(--primary-color) text-white hover:cursor-pointer transition duration-300 border-2 border-(--primary-color) hover:bg-white hover:text-(--secondary-color) active:scale-95">Login</Link>
                                  )    
                            }
                        </div>

                        
                    </ul>
                </nav>
                <div>
                    {children}
                </div>
                <footer className="w-full bg-(--primary-color)  py-8 px-16 gap-16 shadow-[0_-12px_30px_rgba(0,0,0,0.2)]">
                        <div className="grid md:grid-cols-5 gri-cols-1">
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-white text-shadow-lg mb-4 underline underline-offset-4"><span className="text-(--secondary-color)">Buy</span>Nest</h1>
                                <ul className="text-zinc-300/90 font-semibold text-[17px] list-disc ml-5">
                                    <li>Premium fashion at affordable prices</li>
                                    <li>Secure payments</li>
                                    <li>Fast delivery</li>
                                    <li>Easy returns</li>
                                </ul>
                            </div>
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-white/90 text-shadow mb-4">Categories</h1>
                                <ul className="text-zinc-300/90 font-semibold text-[17px] list-disc ml-5">
                                    <li>Men’s Shirts</li>
                                    <li>T-Shirt</li>
                                    <li>Jeans</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-white/90 text-shadow mb-4">Quick Links</h1>
                                <div className="flex flex-col text-zinc-300/90 font-semibold text-[17px] ml-2">
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/'}>Products</Link>
                                    <Link to={'/'}>Categories</Link>
                                    <Link to={'/'}>Offers</Link>
                                    <Link to={'/'}>Contact us</Link>
                                </div>
                            </div>

                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-white/90 text-shadow mb-4">Policies</h1>
                                <ul className="text-zinc-300/90 font-semibold text-[17px] list-disc ml-5">
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Return Policy</li>
                                    <li>Shipping Info</li>
                                </ul>
                            </div>

                            <div className="my-4">
                                <h1 className=" text-3xl font-bold text-white/90 text-shadow mb-4">Customer Support</h1>
                                <ul className="text-zinc-300/90 font-semibold text-[17px] list-disc ml-5">
                                    <li>support@buynest.com</li>
                                    <li>+91 98765 43210</li>
                                    <li>Mon - Sat, 9AM - 6PM</li>
                                </ul>
                            </div>

                            


                        </div>
                        
                        <div className="place-items-center my-8">
                            <h1 className="text-xl font-semibold text-zinc-300/90"> - Socials -</h1>
                            <div className="space-x-4">
                                <Link to={'/'}><i className="ri-instagram-line text-xl font-semibold text-zinc-300"></i></Link>
                                <Link to={'/'}><i className="ri-facebook-circle-line text-xl font-semibold text-zinc-300"></i></Link>
                                <Link to={'/'}><i className="ri-twitter-x-line text-xl font-semibold text-zinc-300"></i></Link>      
                            </div>
                        </div>

                        <div className="place-items-center">
                            <p className="text-sm text-zinc-300/80">&copy; 2026 BuyNest. All rights reserved.</p>
                        </div>
                </footer>
            </div>       
            
        </>
    )
}

export default Layout