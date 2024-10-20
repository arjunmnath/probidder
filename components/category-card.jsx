import {
    Porcelain,
    Clocks,
    Jewelery,
    Manuscript,
    Ceramic
} from "@/components/category-svgs";
import Link from "next/link";



const CategoryCard = ({ image, title, itemCount, id}) => {

    let icon;
    switch (id) {
        case 'bg-porcelain':
            icon = <Porcelain styles={`h-12 w-12`}/>
            break;
        case 'bg-clock':
            icon = <Clocks styles={`h-12 w-12`}/>
            break;
        case 'bg-jewelery':
            icon = <Jewelery styles={`h-12 w-12`}/>
            break;
        case 'bg-manuscript':
            icon = <Manuscript styles={`h-12 w-12`}/>
            break;
        case 'bg-ceramic':
            icon = <Ceramic styles={`h-12 w-12`}/>
            break;
    }

    return <>
        <div className={`h-[30vh] group relative bg-center bg-cover rounded-lg cursor-pointer`}>
            <div
                className={`rounded-lg m-1 overflow-hidden transition-transform duration-500 ease-in-out `}>
                <img
                    className={`brightness-75 transition-transform duration-[600ms] ease-in-out transform group-hover:scale-125 h-auto `}
                    src={image} alt=""/>
            </div>
            <div className={`flex flex-col font-inter text-black group-hover:text-white justify-center items-center absolute bottom-[8%] left-[50%] -translate-x-[50%] translate-y-[8%] w-[70%] h-12 bg-white group-hover:bg-[#D8762D] rounded-lg`}>
                <span className={`font-extrabold `}>{title}</span>
                <span className={`font-light text-sm `}>{itemCount} Item</span>
            </div>
            <div
                className={`absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] h-max w-min bg-[#e7efe2] aspect-square p-3 rounded-full fill-amber-500`}>
                {icon}
            </div>
        </div>
    </>
}
export default CategoryCard;