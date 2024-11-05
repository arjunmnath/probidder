import {Live, Sold, LotNumber, Upcoming} from "@/components/badges";
import RemainingTime from "@/components/timer";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState} from "react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import axios from 'axios';

const ProductCard = (props) => {
    let Badge;
    const { toast } = useToast()
    const [price, setPrice] = useState(0)
    switch (props.status) {
        case "live":
            Badge = <Live/>;
            break;
        case "sold":
            Badge = <Sold/>;
            break;
        case 'upcoming':
            Badge = <Upcoming/>;
            break;
        default:
            break;

    }

    const triggerBidAction = async  () => {
        try {
            const hostname ='https://probidder-backend.vercel.app'
            const req = await axios.post(`${hostname}/api/v2/bids`,
                {
                    bidAmount: price,
                    bidTime: Date.now(),
                    userId: localStorage.getItem('userId'),
                    productId: 1,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await req.json();
            console.log(res);
            toast({
                title: "Error",
                description: `${environment} is bid price`,
            })
        } catch (error) {
            toast({
                title: "Error",
                description: `${error} is bid price`,
            })
        }
    }

    const Rupee = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

    return <>
        <div className={`card h-max sm:w-[80vw] md:w-[24vw] lg:w[24vw] flex-shrink-0 border border-1 broder-[#D9D9D9] rounded-lg overflow-hidden`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`relative group`}>
                <div className={`rounded-lg  m-1 overflow-hidden transition-transform duration-500 ease-in-out `}>
                    <Link href={`/products/${props.id}`} passHref>
                    <img className={`transition-transform duration-[600ms] ease-in-out transform hover:scale-125 h-auto `} src={props.image} alt=""/>
                    </Link>
                </div>
                <div className={`absolute top-2 left-2 px-2 py-1 flex-col flex gap-2`}>
                {Badge}
                    <span className={`transition-opacity duration-300 ease-in-out group-hover:opacity-0`} >
                    <LotNumber id={props.id}/>
                    </span>
                </div>
                <div className={`absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0 mx-auto bottom-2 left-1/2 transform -translate-x-1/2`}>
                    <RemainingTime endTime={props.endTime}/>
                </div>
            </div>

            <div className={`title font-sans font-extrabold m-4`}>
                <Link href={`/products/${props.id}`} passHref>
                    {props.title}
                </Link>
            </div>

            <div className={`flex flex-row justify-between m-4 h-max items-center`}>
               <div className={`bid-price flex flex-col`}>
                   <span className={`text-sm text-gray-600`}>
                Current Bid at:
                   </span>
                   <span className={`text-2xl font-extrabold`}>
                       {Rupee.format(props.bidPrice)}
                   </span>
               </div>

                <div className={`px-4 ${props.status !== 'live' ? 'hover:cursor-not-allowed hover:bg-[rgba(0, 0, 0, 0.7)]' : 'hover:cursor-pointer hover:bg-[#D8762D]'} h-max py-2 text-sm font-extrabold rounded-md place-bid-action bg-black text-white `}>
                        <Dialog>
                            <DialogTrigger>Bid now</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Bid now</DialogTitle>
                                        <Input value={price} type={'number'} onChange={(e) => {
                                            setPrice(parseInt(e.target.value));
                                        }}/>
                                    <Button
                                        onClick={triggerBidAction}
                                    >
                                        Bid
                                    </Button>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                </div>
            </div>

        </div>

    </>
}

export default ProductCard;