import { useState } from "react"
import { Link } from "react-router-dom"


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordType, setpasswordType] = useState('password')
    return (
        <>
            <div className="flex md:flex-row flex-col h-screen items-center md:gap-12 md:px-16 px-4 md:justify-center md:mt-0 mt-4">
                <div className="md:w-6/12 animate__animated animate__pulse">
                    <img src="/images/login-signup.avif" alt="login banner"/>
                </div>
                <div className="md:w-6/12 w-11/12 flex flex-col gap-6 md:p-6 p-2 animate__animated animate__pulse">
                    <div>
                        <h1 className="text-2xl font-bold">New User</h1>
                        <p className="text-gray-600 text-lg">Create your account to start shopping</p>
                    </div>

                    <form className="flex flex-col gap-6">
                         <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-lg font-semibold">Name</label>
                            <input type="text" placeholder="John Doe" id="name" name="userName" className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)" required/>   
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-lg font-semibold">Email</label>
                            <input type="email" placeholder="johndoe@gmail.com" id="email" name="email" className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)" required/>   
                        </div>

                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="password" className="text-lg font-semibold">Password</label>
                            <input type={passwordType} placeholder="********" id="password" name="password" className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)"/>
                            <button type="button" className="absolute top-9 right-2 w-7 h-7 text-[#159A9C] rounded-full hover:cursor-pointer hover:bg-[#159A9C] hover:text-white duration-300" required onClick={()=>{
                                setShowPassword(!showPassword)
                                setpasswordType(
                                    passwordType === 'password' ? 'text' : 'password'
                                )

                            }}>
                                {showPassword ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}
                                
                            </button>
                        </div>

                        <button className="border-2 border-(--primary-color) w-full py-2 text-lg font-semibold text-(--primary-color) hover:cursor-pointer hover:bg-(--primary-color) hover:text-white transition duration-300 mt-2">Signup</button>

                        <div className="flex gap-2 text-sm">
                            <p>Don&apos;t have an account ?</p>
                            <Link to={'/login'} className="font-semibold text-(--primary-color) animate__animated animate__pulse animate__infinite animate__slower">Login now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup