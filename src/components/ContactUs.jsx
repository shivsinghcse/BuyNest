import Layout from "./Layout"

const ContactUs = () => {
    return (
        <>
            <Layout>
                <div className="bg-white p-4  md:w-6/12 shadow-lg my-8 md:my-16 md:border border-gray-300 mx-auto">
                    <img src="/images/contact.jpg" alt="contact_image"/>

                    <form className="mt-8 space-y-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="font-semibold text-lg"
                            >
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="John Doe"
                                className="border border-gray-300 rounded-md py-1 px-2  focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="font-semibold text-lg"
                            >
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                className="border border-gray-300 rounded-md py-1 px-2   focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="query"
                                className="font-semibold text-lg"
                            >
                                Message
                            </label>
                            <textarea
                                required
                                name="user_query"
                                id="query"
                                rows={4}
                                placeholder="Please write us..."
                                className="border border-gray-300 rounded-md py-1 px-2   focus:outline-1 focus:outline-(--primary-color) focus:text-(--primary-color)"
                            ></textarea>
                        </div>

                        <button className="border-2 border-[#159A9C] text-lg text-[#159A9C] font-semibold py-2 px-4  mt-3 hover:bg-(--primary-color) hover:text-white hover:cursor-pointer duration-300 ">
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default ContactUs