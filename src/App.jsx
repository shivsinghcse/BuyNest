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

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h1>Welcome to Homepage</h1>}/>
                    <Route path='/admin'>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path='orders' element={<Orders />} />
                    </Route>   

                    <Route path='*' element={<NotFound />}/> 
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App