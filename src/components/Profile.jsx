import Layout from "./Layout"
import Swal from 'sweetalert2'
import firebaseAppConfig from "../utils/firebase-config"
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const auth = getAuth(firebaseAppConfig)
const db = getFirestore(firebaseAppConfig)
const storage = getStorage()


const Profile = () => {
    const [session, setSession] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        userName: '',
        userEmail: '',
        userMobile: ''
    })

    const [userAddress, setUserAddress] = useState({
        userAddress: '',
        userCity: '',
        userState: '',
        userCountry: '',
        userPinCode: '',
        userId: ''
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user)
            {
                setSession(user)
            }
            else
            {
                setSession(false)
                navigate('/login')
            }
        })
    }, [])

    useEffect(() => {
        if(session) {
            setUserInfo({
                    ...userInfo,
                    userName: session.displayName,
                    userEmail: session.email,
                    userMobile: session.phoneNumber ? session.phoneNumber : ''
            })

            setUserAddress({
                ...userAddress,
                userId: session.uid
            })    

            // fetching address


        }
        
    }, [session])


    const handleUserProfileInput = (e) => {
        const input = e.target
        const name = input.name 
        const value = input.value 

        setUserInfo({
            ...userInfo,
            [name] : value
        })   
    }

    const handleUserAddressInput = (e) => {
        const input = e.target
        const name = input.name 
        const value = input.value 

        setUserAddress({
            ...userAddress,
            [name] : value
        })   
    }

    const setProfilePicture = async (e) => {
        const input = e.target 
        const file = input.files[0]
        const filenameArray = file.name.split('.')
        const ext = filenameArray[filenameArray.length - 1]
        const path = Date.now()+ '.'+ ext
        
        const bucket = ref(storage, `profile/${path}`)

        try
        {
            setIsLoading(true)
            await uploadBytes(bucket, file)
            const imageURL = await getDownloadURL(bucket)
            await updateProfile(auth.currentUser, {photoURL: imageURL})
            setIsLoading(false)
            setSession({
                ...session,
                photoURL: imageURL
            })
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const saveProfileInfo = async (e) => {
        e.preventDefault()
        const temp = structuredClone(userInfo)
        delete temp.userEmail
        
        await updateProfile(auth.currentUser, {displayName: temp.userName, phoneNumber: temp.userMobile})
        
        Swal.fire({
            icon: 'success',
            title: 'Profile updated'
        })
    }

    const setAddress = async (e) => {
        try
        {
            e.preventDefault()
            await addDoc(collection(db, "addresses"), userAddress)
            Swal.fire({
                icon: 'success',
                title: 'Address saved'
            })
        }
        catch(err)
        {
            Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: err.message
            })
        }
    }


    
    

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

  return (
    <Layout>
        <div className="bg-(--primary-color)/10 px-12 py-8 w-10/12 mx-auto my-12 rounded-md shadow-md ">

            <div className="flex items-center gap-4">
                <i className="ri-user-line text-xl font-semibold"></i>
                <h1 className="font-semibold text-xl">Profile</h1>
            </div>

            <hr className="text-gray-300 my-4"/>

            <div className="flex flex-col justify-center items-center mt-6 w-fit  mx-auto relative group">
                {
                    isLoading ?
                        <img src="/images/Loading_icon.gif" className="rounded-full w-25 h-25 object-cover p-1 border" />
                    :
                    (<>
                        <img src={session.photoURL || "/images/user.jpg"} alt="user profile picture" className="rounded-full w-25 h-25 object-cover p-1 border" />

                        <div className="border w-25 h-25 bg-(--secondary-color)/80 absolute top-0 left-0 rounded-full group-hover:flex items-center justify-center hidden">
                            <input type="file" name="profilePicture" id="profilePicture" accept="image/*" className="absolute top-0 left-0 w-25 h-25 rounded-full opacity-0 hover:cursor-pointer" onChange={setProfilePicture} />
                            <span className="text-center font-semibold text-white text-[13px] ">Upload profile picture</span>
                        </div>
                    </>)  
                }
            </div>

            <form className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mt-6" onSubmit={saveProfileInfo}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="userName" className="font-semibold ">Fullname</label>
                    <input 
                        type="text"
                        name="userName"
                        id="username"
                        placeholder="John Doe"
                        value={userInfo.userName}
                        required
                        onChange={handleUserProfileInput}
                        className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="userEmail" className="font-semibold ">Email</label>
                    <input 
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        placeholder="johndoe@example.com"
                        value={userInfo.userEmail}
                        required
                        readOnly
                        disabled
                        onChange={handleUserProfileInput}
                        className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="userMobile" className="font-semibold ">Mobile</label>
                    <input 
                        type="number"
                        name="userMobile"
                        id="userMobile"
                        placeholder="+91 8965478952"
                        value={userInfo.userMobile}
                        required
                        onChange={handleUserProfileInput}
                        className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                    />
                </div>

                <div></div>

                <button className="bg-(--primary-color) text-white w-fit px-8 py-2 font-bold text-lg hover:cursor-pointer shadow">Save</button>
            </form>

            {/* <hr className="my-8 text-gray-400"/> */}

            <div className="my-16">
                <div className="flex gap-4">
                    <i className="ri-home-4-line font-semibold text-xl"></i>
                    <h1 className="font-semibold text-xl">Update Delivery Address</h1>
                </div>
                <hr className="mt-2 mb-8 text-gray-300"/>
                    <form action="" className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mt-6" onSubmit={setAddress}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="userAddress" className="font-semibold ">Address/Street/Vill</label>
                            <input 
                                type="text"
                                name="userAddress"
                                id="userAddress"
                                placeholder="A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136"
                                // value={userInfo.userAddress}
                                required
                                onChange={handleUserAddressInput}
                                className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0 " 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="userCity" className="font-semibold ">City</label>
                            <input 
                                type="text"
                                name="userCity"
                                id="userCity"
                                placeholder="Noida"
                                // value={userInfo.userCity}
                                required
                                onChange={handleUserAddressInput}
                                className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="userState" className="font-semibold ">State</label>
                            <input 
                                type="text"
                                name="userState"
                                id="userState"
                                placeholder="Uttar Pradesh"
                                // value={userInfo.userState}
                                required
                                onChange={handleUserAddressInput}
                                className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="userCountry" className="font-semibold ">Country</label>
                            <input 
                                type="text"
                                name="userCountry"
                                id="userCountry"
                                placeholder="India"
                                // value={userInfo.userCountry}
                                required
                                onChange={handleUserAddressInput}
                                className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="userPinCode" className="font-semibold ">Pincode</label>
                            <input 
                                type="number"
                                name="userPinCode"
                                id="userPinCode"
                                placeholder="256812"
                                // value={userInfo.userPincode}
                                required
                                onChange={handleUserAddressInput}
                                className="bg-white border border-gray-400 py-1 px-4 rounded focus:outline-0" 
                            />
                        </div>

                        <div></div>

                        <button className="bg-(--primary-color) text-white w-fit px-8 py-2 font-bold text-lg hover:cursor-pointer shadow">Save</button>
                </form>
            </div>
            
            
        </div>
    </Layout>
  )
}

export default Profile