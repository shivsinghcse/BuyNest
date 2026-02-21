const NotFound = () => {
    return (
        <>
            <div className="h-screen flex  items-center justify-center bg-gray-100 select-none">
                <div className="flex flex-col gap-2 items-center justify-center py-24 px-36 rounded-lg shadow-xl bg-white border border-gray-300">
                    <h1 className="text-3xl font-bold">404</h1>
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                </div>
            </div>
        </>
    )
}

export default NotFound