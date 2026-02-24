import BestSeller from "./BestSeller"
import LatestCollection from "./LatestCollection"
import Layout from "./Layout"
import Slider from "./Slider"
import TrustBadge from "./TrustBadge"


const Home = () => {
    return (
        <>
            <Layout>
                <header>
                     <Slider />
                </header>               

                <main className="w-10/12 mx-auto text-center mt-16 py-8">
                    <LatestCollection />
                    <BestSeller />
                    <TrustBadge />
                </main>
            </Layout>
        </>
    )
}

export default Home