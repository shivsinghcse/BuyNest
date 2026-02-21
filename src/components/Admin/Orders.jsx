import AdminLayout from './Layout'
import { useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([

        {
            orderId: '#BN1001',
            customerName: 'Rahul Sharma',
            email: 'rahul.sharma@gmail.com',
            product: 'iPhone 13',
            amount: 59999,
            mobile: '+91 9876543210',
            date: '10-02-2025 11:24:10',
            status: 'delivered',
        },
        {
            orderId: '#BN1002',
            customerName: 'Priya Verma',
            email: 'priya.verma@gmail.com',
            product: 'Samsung Galaxy S23',
            amount: 74999,
            mobile: '+91 9123456780',
            date: '11-02-2025 09:15:42',
            status: 'shipped',
        },
        {
            orderId: '#BN1003',
            customerName: 'Amit Kumar',
            email: 'amit.kumar@gmail.com',
            product: 'Boat Rockerz 450',
            amount: 1499,
            mobile: '+91 9011223344',
            date: '11-02-2025 14:02:31',
            status: 'pending',
        },
        {
            orderId: '#BN1004',
            customerName: 'Sneha Patel',
            email: 'sneha.patel@gmail.com',
            product: 'HP Pavilion Laptop',
            amount: 62999,
            mobile: '+91 9988776655',
            date: '12-02-2025 18:45:09',
            status: 'processing',
        },
        {
            orderId: '#BN1005',
            customerName: 'Rohan Das',
            email: 'rohan.das@gmail.com',
            product: 'Noise Smart Watch',
            amount: 3999,
            mobile: '+91 9090909090',
            date: '13-02-2025 10:10:10',
            status: 'cancelled',
        },
        {
            orderId: '#BN1006',
            customerName: 'Neha Singh',
            email: 'neha.singh@gmail.com',
            product: 'Sony Bluetooth Speaker',
            amount: 8999,
            mobile: '+91 9345678901',
            date: '14-02-2025 12:55:22',
            status: 'delivered',
        },
        {
            orderId: '#BN1007',
            customerName: 'Vikas Yadav',
            email: 'vikas.yadav@gmail.com',
            product: 'Dell Inspiron Laptop',
            amount: 55999,
            mobile: '+91 9234567890',
            date: '15-02-2025 16:20:33',
            status: 'shipped',
        },
        {
            orderId: '#BN1008',
            customerName: 'Anjali Gupta',
            email: 'anjali.gupta@gmail.com',
            product: 'Realme Narzo 60',
            amount: 17999,
            mobile: '+91 9456781230',
            date: '16-02-2025 08:40:18',
            status: 'processing',
        },
        {
            orderId: '#BN1009',
            customerName: 'Manish Choudhary',
            email: 'manish.ch@gmail.com',
            product: 'Logitech Wireless Mouse',
            amount: 799,
            mobile: '+91 9785612345',
            date: '16-02-2025 19:30:55',
            status: 'delivered',
        },
        {
            orderId: '#BN1010',
            customerName: 'Kavita Mehta',
            email: 'kavita.mehta@gmail.com',
            product: 'Mi 32” Smart TV',
            amount: 22999,
            mobile: '+91 9812345678',
            date: '17-02-2025 13:05:44',
            status: 'pending',
        },
        {
            orderId: '#BN1001',
            customerName: 'Rahul Sharma',
            email: 'rahul.sharma@gmail.com',
            product: 'iPhone 13',
            amount: 59999,
            mobile: '+91 9876543210',
            date: '10-02-2025 11:24:10',
            status: 'delivered',
        },
        {
            orderId: '#BN1002',
            customerName: 'Priya Verma',
            email: 'priya.verma@gmail.com',
            product: 'Samsung Galaxy S23',
            amount: 74999,
            mobile: '+91 9123456780',
            date: '11-02-2025 09:15:42',
            status: 'shipped',
        },
        {
            orderId: '#BN1003',
            customerName: 'Amit Kumar',
            email: 'amit.kumar@gmail.com',
            product: 'Boat Rockerz 450',
            amount: 1499,
            mobile: '+91 9011223344',
            date: '11-02-2025 14:02:31',
            status: 'pending',
        },
        {
            orderId: '#BN1004',
            customerName: 'Sneha Patel',
            email: 'sneha.patel@gmail.com',
            product: 'HP Pavilion Laptop',
            amount: 62999,
            mobile: '+91 9988776655',
            date: '12-02-2025 18:45:09',
            status: 'processing',
        },
        {
            orderId: '#BN1005',
            customerName: 'Rohan Das',
            email: 'rohan.das@gmail.com',
            product: 'Noise Smart Watch',
            amount: 3999,
            mobile: '+91 9090909090',
            date: '13-02-2025 10:10:10',
            status: 'cancelled',
        },
        {
            orderId: '#BN1006',
            customerName: 'Neha Singh',
            email: 'neha.singh@gmail.com',
            product: 'Sony Bluetooth Speaker',
            amount: 8999,
            mobile: '+91 9345678901',
            date: '14-02-2025 12:55:22',
            status: 'delivered',
        },
        {
            orderId: '#BN1007',
            customerName: 'Vikas Yadav',
            email: 'vikas.yadav@gmail.com',
            product: 'Dell Inspiron Laptop',
            amount: 55999,
            mobile: '+91 9234567890',
            date: '15-02-2025 16:20:33',
            status: 'shipped',
        },
        {
            orderId: '#BN1008',
            customerName: 'Anjali Gupta',
            email: 'anjali.gupta@gmail.com',
            product: 'Realme Narzo 60',
            amount: 17999,
            mobile: '+91 9456781230',
            date: '16-02-2025 08:40:18',
            status: 'processing',
        },
        {
            orderId: '#BN1009',
            customerName: 'Manish Choudhary',
            email: 'manish.ch@gmail.com',
            product: 'Logitech Wireless Mouse',
            amount: 799,
            mobile: '+91 9785612345',
            date: '16-02-2025 19:30:55',
            status: 'delivered',
        },
        {
            orderId: '#BN1010',
            customerName: 'Kavita Mehta',
            email: 'kavita.mehta@gmail.com',
            product: 'Mi 32” Smart TV',
            amount: 22999,
            mobile: '+91 9812345678',
            date: '17-02-2025 13:05:44',
            status: 'pending',
        },
    ]);
    return(
        <>
            <AdminLayout>
                <div>
                    <h1 className='text-xl font-semibold underline underline-offset-4 text-center'>Orders</h1>
                    <div className='my-8'>
                        <table className='w-full'>
                            <thead>
                                <tr className=' bg-(--secondary-color) text-zinc-300'>
                                    <th className='py-4'>Order Id</th>
                                    <th>Customer's Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Order Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    orders.map((order, index) => {
                                        return(
                                            <tr className='text-center' key={order.orderId} style={{
                                                background: (index) % 2 === 0 ? '#fff' : '#e6e6eb'
                                            }}>
                                                <td className='py-4'>{order.orderId}</td>
                                                <td className='capitalize'>{order.customerName}</td>
                                                <td>{order.email}</td>
                                                <td>{order.mobile}</td>
                                                <td  className='capitalize'>{order.product}</td>
                                                <td>₹{order.amount.toLocaleString()}</td>
                                                <td>{order.date}</td>
                                                <td>
                                                    <select name="orderStatus" id="orderStatus" className='capitalize focus:outline-0 border border-gray-300 p-1 rounded text-gray-600'>
                                                        <option value="pending">Pending</option>
                                                        <option value="processing">Processing</option>
                                                        <option value="dispatched">Dispatched</option>
                                                        <option value="delivered">Delivered</option>
                                                        <option value="returned">Returned</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default Orders