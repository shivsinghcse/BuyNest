import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import firebaseAppConfig from "../utils/firebase-config"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import Swal from 'sweetalert2'


const auth = getAuth(firebaseAppConfig)


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordType, setpasswordType] = useState('password')
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false)
    const [userInfo, setUserInfo] = useState({
        userName: '',
        userEmail: '',
        userPassword: ''
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value

        setUserInfo({
            ...userInfo,
            [name]: value
        })

        setError(null)
    }

    const signup = async (e) => {
        try
        {
            e.preventDefault()
            await createUserWithEmailAndPassword(auth, userInfo.userEmail, userInfo.userPassword)
            updateProfile(auth.currentUser, {displayName: userInfo.userName})
            e.target.reset()
            setLoader(true)
            // Swal.fire({
            //     icon: 'success',
            //     title: 'SignUp Success'
            // })
            
            navigate('/')
        }
        catch(err)
        {
            setError(err.message)
        }
        finally
        {
            setLoader(false)
        }
    }

    

    return (
        <>
            <div className="flex md:flex-row flex-col h-screen items-center md:gap-12 md:px-16 px-4 md:justify-center md:mt-0 mt-4">
                <div className="md:w-6/12 animate__animated animate__pulse">
                    <img 
                        src="/images/login-signup.avif" 
                        alt="login banner"
                    />
                </div>
                <div className="md:w-6/12 w-11/12 flex flex-col gap-6 md:p-6 p-2 animate__animated animate__pulse">
                    <div>
                        <h1 className="text-2xl font-bold">New User</h1>
                        <p className="text-gray-600 text-lg">Create your account to start shopping</p>
                    </div>

                    <form className="flex flex-col gap-6" onSubmit={signup}>
                        
                         <div className="flex flex-col gap-1">
                            <label 
                                htmlFor="name" 
                                className="text-lg font-semibold"
                            >
                                Name
                            </label>

                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                id="name" 
                                name="userName" 
                                required
                                onChange={handleOnChange}
                                className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)"
                            />   
                        </div>

                        <div className="flex flex-col gap-1">
                            <label 
                                htmlFor="email" 
                                className="text-lg font-semibold"
                            >
                                Email
                            </label>

                            <input 
                                type="email" 
                                placeholder="johndoe@gmail.com" 
                                id="email" 
                                name="userEmail" 
                                onChange={handleOnChange}
                                required
                                className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)" 
                            />   
                        </div>

                        <div className="flex flex-col gap-1 relative">
                            <label 
                                htmlFor="password" 
                                className="text-lg font-semibold"
                            >
                                Password
                            </label>

                            <input 
                                type={passwordType} 
                                placeholder="********" 
                                id="password" 
                                name="userPassword" 
                                onChange={handleOnChange}
                                required
                                className="py-1 px-3 border border-gray-300 rounded-md focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)" 
                            />

                            <button 
                                type="button" 
                                className="absolute top-9 right-2 w-7 h-7 text-[#159A9C] rounded-full hover:cursor-pointer hover:bg-[#159A9C] hover:text-white duration-300"
                                onClick={()=>{
                                setShowPassword(!showPassword)
                                setpasswordType(
                                    passwordType === 'password' ? 'text' : 'password'
                                )
                                }}
                            >
                                {showPassword ? <i className="ri-eye-off-line"></i> : <i className="ri-eye-line"></i>}
                            </button>

                        </div>

                        <button className="border-2 border-(--primary-color) w-full py-2 text-lg font-semibold text-(--primary-color) hover:cursor-pointer hover:bg-(--primary-color) hover:text-white transition duration-300 mt-2">Signup</button>

                        <div className="flex gap-2 text-sm">
                            <p>Don&apos;t have an account ?</p>
                            <Link 
                                to={'/login'} 
                                className="font-semibold text-(--primary-color) animate__animated animate__pulse animate__infinite animate__slower"
                            >
                                Login now
                            </Link>
                        </div>

                        {error && (
                            <div className="mt-3 bg-red-200 px-4 py-2 rounded animate__animated animate__pulse flex justify-between items-center">
                                <p>{error}</p>
                                <button
                                    className="hover:cursor-pointer hover:border w-6 h-6 rounded-full flex justify-center items-center"
                                    onClick={() => setError(null)}
                                >
                                    <i className="ri-close-line"></i>
                                </button>
                            </div>
                        )}
                    </form>
                </div>
                {loader && (
                            <div className="w-full h-full bg-[#deefe7d7] fixed top-0 left-0 flex flex-col justify-center items-center">
                                <svg
                                    className="size-16 rounded-full border-6 border-t-[#159A9C] border-[#B4BEC9] animate-spin"
                                    viewBox="0 0 24 24"
                                ></svg>

                                <h1 className="text-3xl text-[#159A9C] font-bold">
                                    Redirecting to Home page...
                                </h1>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Signup