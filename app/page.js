'use client';
import {useEffect, useState} from "react";
import Tag from "@/components/tag";
import SlidingDrawer from "@/components/sliding-drawer";
import TrendingCard from "@/components/trending-card";
import ProductCard from "@/components/productCard";
import CategoryCard from "@/components/category-card";



export default function Home() {
    const data = {
        image: 'https://demo.egenslab.com/html/probid/preview/assets/img/home3/auction-img1.jpg',
        status: 'live',
        title: `Neo-classical marble busting rustic farmhouse`,
        bidPrice: '5949',
        id: '390242',
        endTime: '2024-11-18 15:30:00'
    }

    const [trending, setTrending] = useState([]);

    const [highestBidding, setHighestBidding] = useState([])
    const [live, setLive] = useState([]);
    const [popular, setPopular] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const lives = new Array(10).fill(data);
        setLive(liv => lives);
        setHighestBidding(liv => new Array(8).fill(data));
        setPopular(liv => new Array(8).fill(data));
        setTrending(_ => [
            {
                image: '/trending-l.png',
                status: 'live',
                title: `18thc Classical plaster bust by D Brucciani`,
                bidPrice: '979999',
                id: '370242',
                endTime: '2024-12-18 15:30:00'
            },
            {
                image: '/trending-r.png',
                status: 'live',
                title: `19th century Boulle French mantel clock`,
                bidPrice: '197999',
                id: '390212',
                endTime: '2024-11-09 15:30:00'
            }
        ])

        setCategories(_ => [
            {
                title: 'Porcelain',
                itemCount: '793',
                id: 'bg-porcelain',
                image: '/category-img1.jpg'
            },
            {
                title: 'Old Clocks',
                itemCount: '126',
                id: 'bg-clock',
                image: '/category-img2.jpg'

            },            {
                title: 'Jewelery',
                itemCount: '325',
                id: 'bg-jewelery',
                image: '/category-img3.jpg'
            },            {
                title: 'Manuscripts',
                itemCount: '692',
                id: 'bg-manuscript',
                image: '/category-img4.jpg'
            },            {
                title: 'Ceramics',
                itemCount: '913',
                id: 'bg-ceramic',
                image: '/category-img5.jpg'
            },
        ])
    },[])
    return <>
        <div className={``}>
            <div
                className={`grid grid-cols-2 h-[80vh] w-full bg-sprinkle-shade bg-[#5B7347] bg-cover bg-center rounded-b-[3em]`}>
                <div className={`h-[80vh] flex flex-col gap-10 mx-4 py-6 justify-center`}>
                    <div className={`h-max title text-6xl text-white font-balsamiq`}>
                        Bid on the <span className={`font-barrio text-[#BFC9B4]`}>Extraordinary</span>
                        Discover <span className={`font-barrio text-[#BFC9B4]`}>Exotic Treasures</span> Waiting for You.
                    </div>
                    <div className={`slogan h-max font-abel text-white text-xl`}>
                        Welcome to BidYourWay, the premier online auction platform for unique items and unbeatable
                        deals.
                        Enjoy a seamless bidding experience with live auctions,
                        secure payments, and dedicated customer support. Join us today and elevate your bidding game!
                    </div>
                    <div className={`actions flex flex-row gap-4`}>
                        <button
                            className={`flex flex-row bg-[#D8762D] text-white h-max  p-2 font-extrabold rounded-md font-inter`}>
                            <span>
                            Start a Bid

                                </span>
                        </button>
                        <button className={`bg-white font-inter rounded-md text-black h-max w-max p-2 font-extrabold`}>
                            View All Auctions
                        </button>
                    </div>
                </div>
                <div className={`flex justify-center items-center`}>
                    <div className={`grid grid-cols-2 justify-center items-center gap-6 `}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`rounded-2xl h-[55vh]`} src={`/banner-left-img.jpg`} alt={'banner img'}/>
                        <div className={`flex flex-col gap-6`}>
                            <img className={`rounded-2xl h-[35vh]`} src={`/banner-right-top-img.jpg`}
                                 alt={'banner img'}/>
                            <img className={`rounded-2xl h-[35vh]`} src={`/banner-right-bottom-img.jpg`}
                                 alt={'banner img'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`live-auctions my-4`}>
                <Tag text={`Bidding Our`} bg={`bg-[#FAF2EB]`}/>
                <h2 className={`p-2 text-black font-extrabold text-3xl`}>Live <span
                    className={`text-[#5F625B]`}>Auction</span></h2>
                <SlidingDrawer products={live}/>
            </div>

            <div className={`trending grid grid-cols-1 md:lg:grid-cols-2 gap-6`}>

                {
                    trending.map((trending, index) => <TrendingCard key={index} {...trending} index={index}/>)
                }
            </div>


            <div className={`live-auctions my-4`}>
                <Tag text={`Bidding Our`} bg={`bg-[#FAF2EB]`}/>
                <h2 className={`p-2 text-black font-extrabold text-3xl`}>Live <span
                    className={`text-[#5F625B]`}>Auction</span></h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
                    {
                        highestBidding.map((product, index) => <ProductCard key={index} {...product}/>)
                    }
                </div>
            </div>

            <div className={`px-6 bg-[#DDFFD7] bg-sprinkle-shade w-full h-max font-inter py-6 rounded-lg`}>
                <Tag text={`Explore Our`} bg={`bg-[#DCE6C8]`}/>
                <h2 className={`p-2 text-black text-3xl`}>
                <span className={`font-extrabold`}>
                Browse By
                </span>
                    <span className={`text-[#5F625B]`}> Category</span></h2>
                <div className={`sort-by-category grid grid-cols-5 items-center gap-6 mt-10`}>
                    {categories.map(category => <CategoryCard key={category.title} {...category}/>)}
                </div>
            </div>

            <div className={`popular-auctions my-4`}>
                <Tag text={`Watch Our`} bg={`bg-[#FAF2EB]`}/>
                <h2 className={`p-2 text-black font-extrabold text-3xl`}>Popular<span
                    className={`text-[#5F625B]`}>Auctions </span></h2>
                <SlidingDrawer products={popular}/>
            </div>

        </div>
    </>
}
