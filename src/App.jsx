import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import Swal from 'sweetalert2'
import NotFound from './components/NotFound'
import Products from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ContactUs from './components/ContactUs'
import Collection from './components/Collection'
import PreGuard from './components/Guard/PreGuard'
import Cart from './components/Cart'
import Profile from './components/Profile'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/collection' element={<Collection />}/>
                    <Route path='/contact' element={<ContactUs />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route element={<PreGuard />}>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/signup' element={<Signup />}/>
                    </Route>
                    <Route path='/admin'>
                        <Route path="" element={<Dashboard />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="products" element={<Products />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='payments' element={<Payments />} />
                        <Route path='setting' element={<Setting />} />
                    </Route>   

                    <Route path='*' element={<NotFound />}/> 
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App