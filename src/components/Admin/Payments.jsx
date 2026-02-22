import AdminLayout from './Layout'
import { useState } from 'react'
const Payments = () => {
const [payments, setPayments] = useState([
  {
  id: '#BN1002',
  customerName: 'Amit Verma',
  email: 'amit.verma@gmail.com',
  mobile: '+91 9123456780',
  amount: 3200,
  date: '11-02-2025 09:15:42',
  address: {
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    pincode: '208001',
    country: 'India'
  }
},
{
  id: '#BN1003',
  customerName: 'Neha Singh',
  email: 'neha.singh@gmail.com',
  mobile: '+91 9812345678',
  amount: 7800,
  date: '11-02-2025 14:32:18',
  address: {
    city: 'Delhi',
    state: 'Delhi',
    pincode: '110001',
    country: 'India'
  }
},
{
  id: '#BN1004',
  customerName: 'Rohit Gupta',
  email: 'rohit.gupta@gmail.com',
  mobile: '+91 9988776655',
  amount: 4500,
  date: '12-02-2025 10:05:50',
  address: {
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    country: 'India'
  }
},
{
  id: '#BN1005',
  customerName: 'Pooja Mishra',
  email: 'pooja.mishra@gmail.com',
  mobile: '+91 9090909090',
  amount: 6200,
  date: '12-02-2025 16:48:21',
  address: {
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    pincode: '211001',
    country: 'India'
  }
},
{
  id: '#BN1006',
  customerName: 'Ankit Yadav',
  email: 'ankit.yadav@gmail.com',
  mobile: '+91 9345678123',
  amount: 2900,
  date: '13-02-2025 12:11:09',
  address: {
    city: 'Gurgaon',
    state: 'Haryana',
    pincode: '122001',
    country: 'India'
  }
},
{
  id: '#BN1007',
  customerName: 'Sneha Kapoor',
  email: 'sneha.kapoor@gmail.com',
  mobile: '+91 8877665544',
  amount: 8400,
  date: '13-02-2025 18:36:44',
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India'
  }
},
{
  id: '#BN1008',
  customerName: 'Vikas Chauhan',
  email: 'vikas.chauhan@gmail.com',
  mobile: '+91 9765432109',
  amount: 5100,
  date: '14-02-2025 09:59:33',
  address: {
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    country: 'India'
  }
},
{
  id: '#BN1009',
  customerName: 'Kavita Joshi',
  email: 'kavita.joshi@gmail.com',
  mobile: '+91 9654321098',
  amount: 3600,
  date: '14-02-2025 13:27:58',
  address: {
    city: 'Dehradun',
    state: 'Uttarakhand',
    pincode: '248001',
    country: 'India'
  }
},
{
  id: '#BN1010',
  customerName: 'Manish Pandey',
  email: 'manish.pandey@gmail.com',
  mobile: '+91 9543210987',
  amount: 9200,
  date: '15-02-2025 11:44:06',
  address: {
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    pincode: '221001',
    country: 'India'
  }
},
{
  id: '#BN1011',
  customerName: 'Ritu Saxena',
  email: 'ritu.saxena@gmail.com',
  mobile: '+91 9432109876',
  amount: 4100,
  date: '15-02-2025 17:19:40',
  address: {
    city: 'Agra',
    state: 'Uttar Pradesh',
    pincode: '282001',
    country: 'India'
  }
},
{
  id: '#BN1012',
  customerName: 'Saurabh Jain',
  email: 'saurabh.jain@gmail.com',
  mobile: '+91 9321098765',
  amount: 6700,
  date: '16-02-2025 10:08:55',
  address: {
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452001',
    country: 'India'
  }
},
{
  id: '#BN1013',
  customerName: 'Alok Tiwari',
  email: 'alok.tiwari@gmail.com',
  mobile: '+91 9210987654',
  amount: 2800,
  date: '16-02-2025 15:41:22',
  address: {
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    country: 'India'
  }
},
{
  id: '#BN1014',
  customerName: 'Nisha Roy',
  email: 'nisha.roy@gmail.com',
  mobile: '+91 9109876543',
  amount: 7500,
  date: '17-02-2025 12:56:31',
  address: {
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700001',
    country: 'India'
  }
},
{
  id: '#BN1015',
  customerName: 'Deepak Malhotra',
  email: 'deepak.malhotra@gmail.com',
  mobile: '+91 9098765432',
  amount: 5300,
  date: '17-02-2025 18:22:47',
  address: {
    city: 'Chandigarh',
    state: 'Chandigarh',
    pincode: '160001',
    country: 'India'
  }
},
{
  id: '#BN1016',
  customerName: 'Priya Nair',
  email: 'priya.nair@gmail.com',
  mobile: '+91 9987654321',
  amount: 8900,
  date: '18-02-2025 11:03:15',
  address: {
    city: 'Kochi',
    state: 'Kerala',
    pincode: '682001',
    country: 'India'
  }
}
  
]);
    return (
        <>
            <AdminLayout>
                 <div className="w-full">
                    <h1 className="text-xl font-semibold underline underline-offset-4 text-center capitalize">
                        payments
                    </h1>

                    {/* DESKTOP TABLE */}
                    <div className="hidden md:block my-8 w-full overflow-x-auto">
                        <table className="min-w-225 w-full">
                        <thead>
                            <tr className="bg-(--secondary-color) text-zinc-300 text-sm">
                                <th className="px-3 py-4">Payment Id</th>
                                <th className="px-3 py-4">Customer</th>
                                <th className="px-3">Email</th>
                                <th className="px-3">Mobile</th>
                                <th className="px-3">Amount</th>
                                <th className="px-3">Date</th>
                                <th className="px-3">Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {payments.map((payment, index) => (
                            <tr
                                key={payment.id}
                                className="text-center text-sm"
                                style={{
                                background: index % 2 === 0 ? "#fff" : "#f1f5f9",
                                }}
                            >
                                <td className="px-3">{payment.id}</td>
                                <td className="capitalize px-3 py-4 font-semibold">{payment.customerName}</td>
                                <td className="px-3">{payment.email}</td>
                                <td className="px-3">{payment.mobile}</td>
                                <td className="px-3">₹{payment.amount.toLocaleString()}</td>
                                <td className="px-3">{payment.date}</td>
                                <td className="px-3">
                                    {payment.address.city},
                                    {payment.address.state},
                                    {payment.address.pincode},
                                    {payment.address.country}
                                    
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* MOBILE CARDS */}
                    <div className="md:hidden space-y-4 my-6">
                        {payments.map((payment, index) => (
                            <div
                                key={payment.id}
                                className="border rounded-xl p-4 shadow-sm space-y-2"
                                style={{
                                background: index % 2 === 0 ? "#fff" : "#f8fafc",
                                }}
                            >
                                <div className="flex justify-between text-sm font-semibold">
                                    <div className="text-md capitalize items-center flex">{payment.customerName}</div>
                                    <div className='flex flex-col items-center'>
                                        <div className="text-sm text-gray-500">{payment.id}</div>
                                        <span className="block text-sm ">₹{payment.amount.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500">{payment.email}</div>
                                    <div className="text-sm text-gray-500">{payment.mobile}</div>
                                    <span className="block text-sm text-gray-500">{payment.date}</span>
                                </div>
                                <span className='text-sm'>
                                        {payment.address.city},
                                        {payment.address.state},
                                        {payment.address.pincode},
                                        {payment.address.country}
                                </span>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default Payments