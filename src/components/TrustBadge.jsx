const TrustBadge = () => {
    return (
        <>
            <div className=" px-16 mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center place-items-center bg-zinc-50 py-16">
                <div className="hover:-translate-y-1 transition duration-300">
                    <i className="ri-exchange-funds-line text-6xl mb-4 text-(--primary-color)/90"></i>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-(--secondary-color)/80">Easy Exchange Policy</h1>
                        <p className="text-md text-(--secondary-color)/90">We offer hassle free exchange policy</p>
                    </div>
                </div>

                <div className="hover:-translate-y-1 transition duration-300">
                    <i className="ri-verified-badge-line text-6xl mb-4 text-(--primary-color)/90"></i>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-(--secondary-color)/80">7 Days Return Policy</h1>
                        <p className="text-md text-(--secondary-color)/90">We provide 7 days free return policy</p>
                    </div>
                </div>

                <div className="hover:-translate-y-1 transition duration-300 ">
                    <i className="ri-customer-service-2-line text-6xl mb-4 text-(--primary-color)/90"></i>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-(--secondary-color)/80">Best Customer Support</h1>
                        <p className="text-md text-(--secondary-color)/90">We provide 24/7 customer support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustBadge