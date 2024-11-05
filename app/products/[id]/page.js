'use client'

import {useEffect, useState} from "react";
import SlidingDrawer from "@/components/sliding-drawer";
import RemainingTime from "@/components/timer2";

export default function Page({params}) {
    const [bid, setBid] = useState(0);
    const data = {
        image: 'https://demo.egenslab.com/html/probid/preview/assets/img/home3/auction-img1.jpg',
        status: 'upcoming',
        title: `Neo-classical marble busting rustic farmhouse`,
        bidPrice: '5949',
        id: '390242',
        endTime: '2024-11-18 15:30:00'
    }
    const [page, setPage] = useState({});
    const [related, setRelated] = useState([]);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setPage({
            description: "This 18th-century classical plaster bust by D. Brucciani captures the elegance and refinement typical of the period, showcasing intricate detailing and expert craftsmanship. Known for his skill in replicating classical sculptures, Brucciani brings life to this piece through carefully defined facial features, expressive contours, and a smooth finish that reflects the neoclassical ideals of harmony and balance. The bust measures approximately 12 inches in height, making it an ideal display piece for adding a touch of historical charm to interiors. Its plaster composition retains a smooth matte finish, emulating the look of classical marble yet offering a lightweight alternative.",
            title: "18thc Classical plaster bust by D Brucciani",
            subtext: "D Brucciani's 18th-century classical plaster bust masterfully embodies timeless grace with its refined features and exquisite craftsmanship.",
            id: params.id,
            price: 8000000,
            endTime: '2024-12-18 15:30:00',
            images: [
                'https://www.lvsdecorativearts.co.uk/upload/images/shopprod/12244/19thc-classical-plaster-bust-by-d-brucciani_12244_main_size3.jpg',
                'https://www.lvsdecorativearts.co.uk/upload/images/shopprod/12244/19thc-classical-plaster-bust-by-d-brucciani_12244_pic12_size3.jpg',
                'https://www.lvsdecorativearts.co.uk/upload/images/shopprod/12244/19thc-classical-plaster-bust-by-d-brucciani_12244_pic6_size3.jpg',
                'https://www.lvsdecorativearts.co.uk/upload/images/shopprod/12244/19thc-classical-plaster-bust-by-d-brucciani_12244_pic5_size3.jpg',
                'https://www.lvsdecorativearts.co.uk/upload/images/shopprod/12244/19thc-classical-plaster-bust-by-d-brucciani_12244_pic8_size3.jpg'
            ]
        })
        setBid(8000000);
        setRelated(_ => new Array(8).fill(data));
        setReady(true);

    }, [])
    const Rupee = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

    return <div className={`mt-5`}>
        <div className="grid grid-cols-2 gap-8">
            <div>
                <img src={ready ? page.images[0] : "https://placehold.co/600x400"} className="w-[400] h-auto rounded-lg"/>
                <div className="flex gap-2 mt-4">
                    { ready ? page.images.map((image, index) => {
                        if (index === 0) return <></>
                        else return <img className={'w-[50px] h-auto rounded-sm'} key={image} src={image} />
                    }) : <></>}
                </div>

            </div>

            <div>
                <div className="flex items-center mb-4">
                <span
                    className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">Lot: # {page.id}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{page.title}</h2>
                <p className="text-gray-500 mt-2 text-sm">{page.subtext}</p>

                <div className="mt-6">
                    <p className="text-gray-600 font-semibold">Current Bid at:</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{Rupee.format(page.price)}</p>
                </div>

                <div className="mt-6">
                    <p className="text-gray-600 font-semibold">Auction Will Be End:</p>
                    <RemainingTime endTime={page.endTime}/>
                    <p className="text-gray-600 mt-3 text-sm">Ending On: {page.endTime}</p>
                </div>

                <div className="mt-6">
                    <p className="text-gray-600 font-semibold">Your Max Bid:</p>
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            className="w-10 h-10 flex items-center justify-center border rounded-lg text-gray-600 border-gray-300">-
                        </button>
                        <input value={bid} onChange={e => setBid(parseInt(e.target.value))} type="number"
                               className="w-24 h-10 text-center border rounded-lg text-gray-800 border-gray-300"/>
                        <button
                            className="w-10 h-10 flex items-center justify-center border rounded-lg text-gray-600 border-gray-300">+
                        </button>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold">Place Bid
                        </button>
                    </div>
                </div>

                <div className="mt-6 p-4 border rounded-lg border-gray-300">
                    <p className="text-gray-600 font-semibold">Guaranteed Safe Transactions</p>
                    <div className="flex gap-2 mt-3">
                        <img src="https://demo.egenslab.com/html/probid/preview/assets/img/inner-pages/payment-img1.svg"
                             alt="Visa"/>
                        <img src="https://demo.egenslab.com/html/probid/preview/assets/img/inner-pages/payment-img2.svg"
                             alt="American Express"/>
                        <img src="https://demo.egenslab.com/html/probid/preview/assets/img/inner-pages/payment-img4.svg"
                             alt="MasterCard"/>
                        <img src="https://demo.egenslab.com/html/probid/preview/assets/img/inner-pages/payment-img6.svg"
                             alt="PayPal"/>
                        <img src="https://demo.egenslab.com/html/probid/preview/assets/img/inner-pages/payment-img7.svg"
                             alt="Apple Pay"/>
                    </div>

                </div>

                <div className={`py-6`}>
                    <h2 className={`text-xl font-extrabold`}>Description</h2>
                    <div className={`m-4 text-gray-800 font-abel`}>
                        {page.description}
                    </div>
                </div>
                <div className={`py-6`}>
                    <h2 className={`text-xl font-extrabold`}>Additional Info</h2>
                    <div className={`m-4 p-4 text-gray-800 font-abel`}>
                        <ul className={`list-disc`}>
                            <li>Artist: D. Brucciani, known for classical plaster reproductions.</li>
                            <li>Style: Reflects 18th-century neoclassical ideals of symmetry and proportion.</li>
                            <li>Dimensions: Around 12 inches tall, ideal for shelf or mantel display.</li>
                            <li>Material: High-quality plaster, with a smooth matte finish resembling marble.</li>
                            <li>Color: White or off-white, enhancing its timeless, classical appeal.</li>
                            <li>Care: Keep dry and dust gently with a soft cloth.</li>
                            <li>Collectible Value: Popular among classical art enthusiasts, bringing historic elegance
                                to modern interiors.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6 text-gray-600 text-sm">
                    <button className="flex items-center gap-2">
                        <i className="far fa-question-circle"></i>
                        Ask a question
                    </button>
                    <button className="flex items-center gap-2">
                        <i className="far fa-heart"></i>
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>

        <h2 className={`p-2 text-black text-3xl`}>
            <span className={`font-extrabold`}> Related </span>
            <span className={`text-[#5F625B]`}>Auctions</span>
        </h2>
        <SlidingDrawer products={related}/>
    </div>
}