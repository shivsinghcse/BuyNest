import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NotFound from './components/NotFound'
import Products from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h1>Welcome to Homepage</h1>}/>
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