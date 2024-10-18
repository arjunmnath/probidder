import {Live, LotNumber, Sold, Upcoming} from '@/components/badges'
import RemainingTime from "@/components/timer";
import ProductCard from "@/components/productCard";

export default function Home() {
    const data = {
        image: 'https://demo.egenslab.com/html/probid/preview/assets/img/home3/auction-img1.jpg',
        status: 'live',
        title: `Neo-classical marble busting rustic farmhouse`,
        bidPrice: '5949',
        id: '390242',
        endTime: '2024-11-18 15:30:00'
    }
    return <>
        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2`}>
            <ProductCard {...data} />
            <ProductCard {...data}/>
            <ProductCard {...data}/>
            <ProductCard {...data}/>
            <ProductCard {...data}/>
            <ProductCard {...data}/>
            <ProductCard {...data}/>
        </div>
    </>
}
