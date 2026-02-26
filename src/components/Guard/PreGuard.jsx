import { useEffect, useState } from "react"
import firebaseAppConfig from "../../utils/firebase-config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Outlet, Navigate } from "react-router-dom"

const auth = getAuth(firebaseAppConfig)


const PreGuard = () => {
    const [session, setSession] = useState(null)
    const [loader, setLoader] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setSession(user)
            }
            else{
                setSession(false)
            }
        })
    }, [])

    if(session === null){
        return (
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

    if(session){
        return <Navigate to={'/'}/>
    }

    return <Outlet />
    
}

export default PreGuard