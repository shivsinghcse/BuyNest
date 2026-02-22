import AdminLayout from './Layout'
import { useState } from 'react'
const Customers = () => {
const [customers, setCustomers] = useState([
  {
    id: '#BN1001',
    customerName: 'Rahul Sharma',
    email: 'rahul.sharma@gmail.com',
    mobile: '+91 9876543210',
    date: '10-02-2025 11:24:10',
    address: {
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      pincode: '226001',
      country: 'India'
    }
  },
  {
    id: '#BN1002',
    customerName: 'Priya Verma',
    email: 'priya.verma@gmail.com',
    mobile: '+91 9123456780',
    date: '11-02-2025 09:14:32',
    address: {
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      country: 'India'
    }
  },
  {
    id: '#BN1003',
    customerName: 'Amit Singh',
    email: 'amit.singh@gmail.com',
    mobile: '+91 9988776655',
    date: '11-02-2025 15:44:02',
    address: {
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      pincode: '208001',
      country: 'India'
    }
  },
  {
    id: '#BN1004',
    customerName: 'Neha Gupta',
    email: 'neha.gupta@gmail.com',
    mobile: '+91 9090909090',
    date: '12-02-2025 10:05:51',
    address: {
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India'
    }
  },
  {
    id: '#BN1005',
    customerName: 'Rohit Kumar',
    email: 'rohit.kumar@gmail.com',
    mobile: '+91 8899776655',
    date: '12-02-2025 17:22:19',
    address: {
      city: 'Patna',
      state: 'Bihar',
      pincode: '800001',
      country: 'India'
    }
  },
  {
    id: '#BN1006',
    customerName: 'Sneha Mishra',
    email: 'sneha.mishra@gmail.com',
    mobile: '+91 9011223344',
    date: '13-02-2025 08:55:41',
    address: {
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      pincode: '221001',
      country: 'India'
    }
  },
  {
    id: '#BN1007',
    customerName: 'Arjun Patel',
    email: 'arjun.patel@gmail.com',
    mobile: '+91 9345678901',
    date: '13-02-2025 13:11:27',
    address: {
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380001',
      country: 'India'
    }
  },
  {
    id: '#BN1008',
    customerName: 'Pooja Yadav',
    email: 'pooja.yadav@gmail.com',
    mobile: '+91 9554433221',
    date: '14-02-2025 12:40:33',
    address: {
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302001',
      country: 'India'
    }
  },
  {
    id: '#BN1009',
    customerName: 'Karan Mehta',
    email: 'karan.mehta@gmail.com',
    mobile: '+91 9223344556',
    date: '14-02-2025 18:03:09',
    address: {
      city: 'Chandigarh',
      state: 'Chandigarh',
      pincode: '160001',
      country: 'India'
    }
  },
  {
    id: '#BN1010',
    customerName: 'Anjali Saxena',
    email: 'anjali.saxena@gmail.com',
    mobile: '+91 9445566778',
    date: '15-02-2025 09:25:17',
    address: {
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      pincode: '462001',
      country: 'India'
    }
  },
  {
    id: '#BN1011',
    customerName: 'Vikas Tiwari',
    email: 'vikas.tiwari@gmail.com',
    mobile: '+91 9665544332',
    date: '15-02-2025 14:48:52',
    address: {
      city: 'Prayagraj',
      state: 'Uttar Pradesh',
      pincode: '211001',
      country: 'India'
    }
  },
  {
    id: '#BN1012',
    customerName: 'Meera Kapoor',
    email: 'meera.kapoor@gmail.com',
    mobile: '+91 9776655443',
    date: '16-02-2025 11:09:06',
    address: {
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411001',
      country: 'India'
    }
  },
  {
    id: '#BN1013',
    customerName: 'Sandeep Chauhan',
    email: 'sandeep.chauhan@gmail.com',
    mobile: '+91 9887766554',
    date: '16-02-2025 16:30:21',
    address: {
      city: 'Dehradun',
      state: 'Uttarakhand',
      pincode: '248001',
      country: 'India'
    }
  },
  {
    id: '#BN1014',
    customerName: 'Ritika Jain',
    email: 'ritika.jain@gmail.com',
    mobile: '+91 9001122334',
    date: '17-02-2025 10:52:39',
    address: {
      city: 'Indore',
      state: 'Madhya Pradesh',
      pincode: '452001',
      country: 'India'
    }
  },
  {
    id: '#BN1015',
    customerName: 'Manish Agarwal',
    email: 'manish.agarwal@gmail.com',
    mobile: '+91 9112233445',
    date: '17-02-2025 19:15:58',
    address: {
      city: 'Noida',
      state: 'Uttar Pradesh',
      pincode: '201301',
      country: 'India'
    }
  }
]);
    return (
        <>
            <AdminLayout>
                 <div className="w-full">
                    <h1 className="text-xl font-semibold underline underline-offset-4 text-center capitalize">
                        customers
                    </h1>

                    {/* DESKTOP TABLE */}
                    <div className="hidden md:block my-8 w-full overflow-x-auto">
                        <table className="min-w-225 w-full">
                        <thead>
                            <tr className="bg-(--secondary-color) text-zinc-300 text-sm">
                                <th className="px-3 py-4">Customer</th>
                                <th className="px-3">Email</th>
                                <th className="px-3">Mobile</th>
                                <th className="px-3">Date</th>
                                <th className="px-3">Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customers.map((customer, index) => (
                            <tr
                                key={customer.id}
                                className="text-center text-sm"
                                style={{
                                background: index % 2 === 0 ? "#fff" : "#f1f5f9",
                                }}
                            >
                                <td className="capitalize px-3 py-4">
                                    <div className='flex gap-3 items-center justify-center'>
                                        <img 
                                            src="/images/avatar.jpg" 
                                            alt="customers image" 
                                            className='w-8 h-8 rounded-full' 
                                        />
                                        <div className='flex flex-col font-semibold'>
                                            <span>{customer.customerName}</span>
                                            <small className='text-gray-500'>{customer.date}</small>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3">{customer.email}</td>
                                <td className="px-3">{customer.mobile}</td>
                                <td className="px-3">{customer.date}</td>
                                <td className="px-3">
                                    {customer.address.city},
                                    {customer.address.state},
                                    {customer.address.pincode},
                                    {customer.address.country}
                                    
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* MOBILE CARDS */}
                    <div className="md:hidden space-y-4 my-6">
                        {customers.map((customer, index) => (
                            <div
                                key={customer.id}
                                className="border rounded-xl p-4 shadow-sm space-y-2"
                                style={{
                                background: index % 2 === 0 ? "#fff" : "#f8fafc",
                                }}
                            >
                                <div className="flex justify-between text-sm font-semibold">
                                    <div className="text-md capitalize">{customer.customerName}</div>
                                    <div className="text-sm">{customer.mobile}</div>
                                    
                                
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500">{customer.email}</div>
                                    <span className="block text-sm text-gray-500">{customer.date}</span>
                                </div>
                                <span className='text-sm'>
                                        {customer.address.city},
                                        {customer.address.state},
                                        {customer.address.pincode},
                                        {customer.address.country}
                                </span>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default Customers