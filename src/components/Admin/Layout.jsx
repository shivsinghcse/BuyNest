import { useState } from "react"


const Layout = ({children}) => {
    const [size, setSize] = useState('280px')
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const toggleDrawer = () => {
        size === '280px' ? setSize(0) : setSize('280px')
    }
    return (
        <>
            <aside className="bg-(--secondary-color) fixed left-0 top-0 h-full" style={{
                width: size,
                transition: '0.3s',
            }}>

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
        </>
    )
}

export default Layout