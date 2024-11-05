'use client'
import {useEffect, useState} from "react";

const Page = () => {
    const [bids, setBids] = useState([]);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setBids([
            {
                bidId: 102345,
                title: "MacBook Pro",
                price: 299000.00,
                time: "2024-11-01T10:45:00Z",
                isWinningBid: true
            },
            {
                bidId: 102346,
                title: "Samsung Galaxy S23",
                price: 109999.99,
                time: "2024-11-02T14:30:00Z",
                isWinningBid: false
            },
            {
                bidId: 102347,
                title: "Sony WH-1000XM5 Headphones",
                price: 20000.00,
                time: "2024-11-03T09:15:00Z",
                isWinningBid: true
            },
            {
                bidId: 102348,
                title: "Canon EOS R6 Camera",
                price: 67000.00,
                time: "2024-11-04T16:00:00Z",
                isWinningBid: false
            },
            {
                bidId: 102349,
                title: "Apple iPad Air",
                price: 59999.99,
                time: "2024-11-04T18:30:00Z",
                isWinningBid: true
            },
            {
                bidId: 102350,
                title: "Dell XPS 13",
                price: 90000.00,
                time: "2024-11-05T12:45:00Z",
                isWinningBid: false
            }
        ]);
    }, []);
    const Rupee = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    const Time = new Intl.DateTimeFormat('en-US', {
        weekday: 'long', // 'Monday', 'Tuesday', etc.
        year: 'numeric',
        month: 'long', // 'November'
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Use 12-hour format (AM/PM)
    });
    return  <div className={`m-6`}>
        <h2 className={`text-2xl font-extrabold`}>Your Bids</h2>
    <ul role="list" className="divide-y divide-gray-100">
        {bids.map(bid => (
            <li key={bid.bidId} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">{bid.title}</p>
                        <p className="mt-1 truncate text-xs/5 text-gray-500">Id: {bid.bidId}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">{Rupee.format(bid.price)}</p>
                    <p className="mt-1 text-xs/5 text-gray-500">Placed on {Time.format(new Date(bid.time))}</p>
                    <p className={"mt-1 text-xs/5 text-gray-500"}> {
                        bid.isWinningBid ? "Won": "Lost"
                    } </p>
                </div>
            </li>))
        }
    </ul>
    </div>
}

export default Page;