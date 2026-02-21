import { useState } from "react"
import {Link , useLocation} from 'react-router-dom'

const Layout = ({children}) => {
    const [size, setSize] = useState('280px')
    const [mobileSize, setMobileSize] = useState('0px')
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const toggleDrawer = () => {
        size === '280px' ? setSize(0) : setSize('280px')
    }
    const location = useLocation()
    
    const menus = [
        {
            label: 'Dashboard',
            icon: <i className="ri-dashboard-line text-lg text-zinc-300"></i>,
            link: '/admin/dashboard'
        },
        {
            label: 'Customers',
            icon: <i className="ri-user-line text-lg text-zinc-300"></i>,
            link: '/admin/customers'
        },
        {
            label: 'Products',
            icon: <i className="ri-shopping-bag-3-line text-lg text-zinc-300"></i>,
            link: '/admin/products'
        },
        {
            label: 'Orders',
            icon: <i className="ri-shopping-cart-2-line text-lg text-zinc-300"></i>,
            link: '/admin/orders'
        },
        {
            label: 'Payments',
            icon: <i className="ri-money-rupee-circle-line text-lg text-zinc-300"></i>,
            link: '/admin/payments'
        },
        {
            label: 'Setting',
            icon: <i className="ri-settings-3-line text-lg text-zinc-300"></i>,
            link: '/admin/setting'
        },
    ]
    return (
        <>
            {/* Desktop */}
            <div className="md:block hidden">
                <aside className="bg-(--secondary-color) fixed left-0 top-0 py-7 h-full overflow-hidden" style={{
                    width: size,
                    transition: '0.3s',
                }}>

                    {
                        menus.map((menu) => {
                            return(
                                <div key={menu.link} className={`w-full px-8 py-4 border-b border-b-zinc-300 space-x-3 ${(location.pathname === menu.link) ? 'bg-(--primary-color)' : 'hover:bg-(--primary-color)'}`}>
                                    {menu.icon}
                                    <Link to={menu.link} className="text-lg font-semibold text-zinc-300">{menu.label}</Link>
                                </div>
                            )
                        })
                    }
                </aside>
                <section 
                    className=""
                    style={{
                        marginLeft: size,
                        transition: '0.3s',
                    }}>
                    <nav className="bg-white py-4 px-8 shadow-xl flex justify-between items-center sticky top-0" >
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={toggleDrawer} 
                                className='hover:cursor-pointer transition active:scale-95 w-10 h-10  border rounded hover:bg-(--primary-color) hover:text-white'
                            >
                                <i className="ri-menu-line text-2xl"></i>
                            </button>
                            <h1 className="text-2xl font-bold text-(--primary-color) select-none ">BuyNest</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img 
                                    src="/images/avatar.jpg" 
                                    alt="admin image"
                                    className="border-2 border-(--primary-color) shadow p-1 w-12 h-12 rounded-full hover:cursor-pointer" 
                                    onClick={ () => {
                                        setShowAccountMenu(!showAccountMenu)
                                    }}
                                />
                                {
                                    showAccountMenu && 
                                    <div className="absolute right-0 px-8 py-6 rounded-lg shadow-xl bg-white  flex flex-col justify-center items-center gap-2 border border-gray-200">
                                        <h1 className="text-lg font-semibold">Shiv Singh</h1>
                                        <p className="text-gray-500 pb-2">singhshiv0204@gmail.com</p>
                                        <hr className=" w-full border-gray-300"/>
                                        <button className="font-semibold space-x-2 hover:cursor-pointer transition active:scale-95">
                                            <i className="ri-logout-box-line"></i>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                }
                            </button>
                        </div>
                    </nav>
                    <div className="p-6">{children}</div> 

                </section>
            </div>

            {/* Mobile responsive */}

            <div className="md:hidden block">
                <aside className="bg-(--secondary-color) fixed left-0 top-0 py-14 h-full overflow-hidden z-1000" style={{
                    width: mobileSize,
                    transition: '0.3s',
                }}>

                    {
                        menus.map((menu) => {
                            return(
                                <div key={menu.link} className={`w-full px-8 py-4 border-b border-b-zinc-300 space-x-3 ${(location.pathname === menu.link) ? 'bg-(--primary-color)' : 'hover:bg-(--primary-color)'}`}>
                                    {menu.icon}
                                    <Link to={menu.link} className="text-lg font-semibold text-zinc-300">{menu.label}</Link>
                                </div>
                            )
                        })
                    }
                    <button  onClick={()=>{setMobileSize('0px')}}>
                        <i className="ri-close-line text-2xl w-8 h-8 absolute top-3 right-3 text-zinc-300 border border-zinc-300 rounded-full"></i>
                    </button>
                </aside>
                <section 
                    className=""
                    style={{
                        // marginLeft: mobileSize,
                        // transition: '0.3s',
                    }}>
                    <nav className="bg-white py-2 px-4 shadow-xl flex justify-between items-center sticky top-0" >
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={()=>{mobileSize === '0px' ? setMobileSize('280px') : setMobileSize('0px')}} 
                                className='hover:cursor-pointer transition active:scale-95 w-10 h-10  border rounded hover:bg-(--primary-color) hover:text-white'
                            >
                                <i className="ri-menu-line text-2xl"></i>
                            </button>
                            <h1 className="text-2xl font-bold text-(--primary-color) select-none ">BuyNest</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img 
                                    src="/images/avatar.jpg" 
                                    alt="admin image"
                                    className="border-2 border-(--primary-color) shadow p-1 w-12 h-12 rounded-full hover:cursor-pointer" 
                                    onClick={ () => {
                                        setShowAccountMenu(!showAccountMenu)
                                    }}
                                />
                                {
                                    showAccountMenu && 
                                    <div className="absolute right-0 px-8 py-6 rounded-lg shadow-xl bg-white  flex flex-col justify-center items-center gap-2 border border-gray-200">
                                        <h1 className="text-lg font-semibold">Shiv Singh</h1>
                                        <p className="text-gray-500 pb-2">singhshiv0204@gmail.com</p>
                                        <hr className=" w-full border-gray-300"/>
                                        <button className="font-semibold space-x-2 hover:cursor-pointer transition active:scale-95">
                                            <i className="ri-logout-box-line"></i>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                }
                            </button>
                        </div>
                    </nav>
                    <div className="p-6">{children}</div> 

                </section>
            </div>
        </>
    )
}

export default Layout