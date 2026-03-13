import firebaseAppConfig from "../utils/firebase-config";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Swal from 'sweetalert2'

const db = getFirestore(firebaseAppConfig)

const Product = (props) => {
    const item = props.data

    const addToCart = async (item) => {
        try
        {
            const auth = getAuth(firebaseAppConfig)
            await addDoc(collection(db, 'carts'), {
                ...item,
                userId: auth.currentUser.uid
            })
            Swal.fire({
                icon: 'success',
                title: 'Item added'
            })
        }
        catch(err)
        {
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: err.message
            })
        }
    }
    
    return (
        <div className=" p-4 shadow-xl hover:shadow-(color:--primary-color)/30 rounded-xl hover:cursor-pointer transition duration-300">
            
            <div className="relative group overflow-hidden transition duration-300 hover:scale-103 inset-0 bg-black/0 group-hover:bg-black/10">
                <img src={item.image} alt="" className="w-full "/>

                <button
                    className="absolute top-3 right-3 bg-(--primary-color)/80 px-2 py-1 rounded text-white text-lg font-bold
                    opacity-0 translate-y-2 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-300 hover:cursor-pointer active:scale-95 hover:scale-110 shadow-md"
                >
                    <i className="ri-poker-hearts-line"></i>
            </button>
            </div>
            <div className="text-left pt-3 pb-2 space-y-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-md font-bold text-gray-800">{item.brand}</h1>
                    <div>
                        <i className="ri-star-fill font-semibold text-(--primary-color)"></i>
                        <label className="font-semibold">{item.rating.toFixed(1)}</label>
                    </div>
                </div>
                <div className="space-x-2">
                <p className="text-gray-700 text-[16px]">{item.title}</p>
                    <span className="text-gray-600 font-bold"> ₹{Math.round(item.price - (item.price * item.discount)/100).toLocaleString()}</span>
                    <del className="text-gray-600 font-bold"> ₹{item.price.toLocaleString()}</del>
                    <span className="text-red-600">({item.discount}% OFF)</span>
                </div>
                <button className="border-2 border-(--primary-color) mt-3 py-2 w-full text-lg font-bold text-(--primary-color) hover:cursor-pointer transition duration-300 active:scale-95 hover:bg-(--primary-color) hover:text-white hover:shadow-lg hover:-translate-y-1" onClick={() => addToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
    }

export default Product