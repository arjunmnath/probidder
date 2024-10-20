import RemainingTime from "@/components/timer2";
const TrendingCard = (props) => {
    const Rupee = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    return <>
        <div className={`relative rounded-2xl bg-sprinkle-shade grid grid-cols-2 items-center font-inter ${ props.index === 0 ? 'bg-[#8e5537]' : 'bg-[#BFd173]'} h-[50vh] w-full`}>
            <div className={'flex flex-col justify-evenly h-full ml-6'}>
                <div className={`bid-price flex flex-col`}>
                   <span className={`${ props.index === 0 ? 'text-white' : 'text-black'} text-sm`}>Current bid at:</span>
                    <span className={`${ props.index === 0 ? 'text-white' : 'text-[#D8762D]'} font-extrabold text-2xl`}>{Rupee.format(props.bidPrice)}</span>
                </div>
                <div className={`${ props.index === 0 ? 'text-white' : 'text-black'} font-extrabold text-2xl`}>
                    {props.title}
                </div>
                <div className={`${ props.index === 0 ? 'text-white' : 'text-black'} `}>
                    <span className={`underline text-sm`}> Auction Will Be End: </span>
                    <RemainingTime endTime={props.endTime} />
                </div>

                <div className={``}>
                    <a className={`bg-[#D8762D] text-white rounded-md py-3 px-6 font-bold`}>
                      Bid Now
                    </a>
                </div>

            </div>

            <div className={`absolute p-4 text-white bg-[#D8762D] top-0 right-[30%] flex flex-col justify-center font-bold mx-6 mb-4 rounded-b-full`}>
                <span className={`w-min`}>Hot</span>
                <span className={`w-min`}>Now</span>
            </div>
            <div className={`h-[45vh] flex justify-end mx-12`}>
                <img className={`aspect-auto h-full`} src={props.image} alt="" />
            </div>
        </div>
    </>
}


export default TrendingCard;