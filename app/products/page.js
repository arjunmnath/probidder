'use client'
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import Tag from "@/components/tag";
import ProductCard from "@/components/productCard";

const ProductsPage = () => {
    const params = useSearchParams()
    console.log(params)
    const query = params.get('q');
    const category = params.get('category');
    const [results, setResults] = useState([]);
    const data = {
        image: 'https://demo.egenslab.com/html/probid/preview/assets/img/home3/auction-img1.jpg',
        status: 'upcoming',
        title: `Neo-classical marble busting rustic farmhouse`,
        bidPrice: '5949',
        id: '390242',
        endTime: '2024-11-18 15:30:00'
    }

    const [page, setPage] = useState(1);
    const pageLimit = 12;
    useEffect(() => {
        setResults(_ => new Array(49).fill(data));
    }, []);


    return <>
        <div className={`live-auctions my-4`}>
            <Tag text={`Results`} bg={`bg-[#FAF2EB]`}/>
            <div className={`flex flex-row justify-between`}>
                <h2 className={`p-2 text-[#5F625B] font-inter text-md`}
                >showing {results.length > pageLimit? (page - 1) * pageLimit + 1 : results.length}-
                    {(page) * pageLimit < results.length ? page * pageLimit : results.length } of {results.length} <span
                    className={`text-black font-bold`}> {query ? `For "${query}"`: ``}

                </span> {category ?`in "${category}"`: ``}</h2>
                <div className={`filter-btn`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_456_25)">
                            <path
                                d="M0.5625 3.17317H9.12674C9.38486 4.34806 10.4341 5.2301 11.6853 5.2301C12.9366 5.2301 13.9858 4.3481 14.2439 3.17317H17.4375C17.7481 3.17317 18 2.92131 18 2.61067C18 2.30003 17.7481 2.04817 17.4375 2.04817H14.2437C13.9851 0.873885 12.9344 -0.00871277 11.6853 -0.00871277C10.4356 -0.00871277 9.38545 0.873744 9.12695 2.04817H0.5625C0.251859 2.04817 0 2.30003 0 2.61067C0 2.92131 0.251859 3.17317 0.5625 3.17317ZM10.191 2.61215L10.191 2.6061C10.1935 1.78461 10.8638 1.11632 11.6853 1.11632C12.5057 1.11632 13.1761 1.78369 13.1796 2.6048L13.1797 2.61306C13.1784 3.43597 12.5086 4.10513 11.6853 4.10513C10.8625 4.10513 10.1928 3.43663 10.191 2.61422L10.191 2.61215ZM17.4375 14.8268H14.2437C13.985 13.6525 12.9344 12.7699 11.6853 12.7699C10.4356 12.7699 9.38545 13.6524 9.12695 14.8268H0.5625C0.251859 14.8268 0 15.0786 0 15.3893C0 15.7 0.251859 15.9518 0.5625 15.9518H9.12674C9.38486 17.1267 10.4341 18.0087 11.6853 18.0087C12.9366 18.0087 13.9858 17.1267 14.2439 15.9518H17.4375C17.7481 15.9518 18 15.7 18 15.3893C18 15.0786 17.7481 14.8268 17.4375 14.8268ZM11.6853 16.8837C10.8625 16.8837 10.1928 16.2152 10.191 15.3928L10.191 15.3908L10.191 15.3847C10.1935 14.5632 10.8638 13.8949 11.6853 13.8949C12.5057 13.8949 13.1761 14.5623 13.1796 15.3834L13.1797 15.3916C13.1785 16.2146 12.5086 16.8837 11.6853 16.8837ZM17.4375 8.43751H8.87326C8.61514 7.26262 7.56594 6.38062 6.31466 6.38062C5.06338 6.38062 4.01418 7.26262 3.75606 8.43751H0.5625C0.251859 8.43751 0 8.68936 0 9.00001C0 9.31068 0.251859 9.56251 0.5625 9.56251H3.75634C4.01498 10.7368 5.06559 11.6194 6.31466 11.6194C7.56439 11.6194 8.61455 10.7369 8.87305 9.56251H17.4375C17.7481 9.56251 18 9.31068 18 9.00001C18 8.68936 17.7481 8.43751 17.4375 8.43751ZM7.80901 8.99853L7.80898 9.00458C7.80652 9.82607 7.13619 10.4944 6.31466 10.4944C5.49429 10.4944 4.82393 9.82699 4.82038 9.00591L4.82027 8.99769C4.8215 8.17468 5.49141 7.50562 6.31466 7.50562C7.13753 7.50562 7.80718 8.17408 7.80905 8.99653L7.80901 8.99853Z"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
                {
                    results.slice(0, pageLimit).map((product, index) => <ProductCard key={index} {...product}/>)
                }
            </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <buttom onClick={() => setPage(page => (page > 1) ? page - 1 : page)}
                           className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
                                 data-slot="icon">
                                <path fillRule="evenodd"
                                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </buttom>
                        {
                            Array.from({length: (results.length % pageLimit === 0) ?  results.length / pageLimit : results.length / pageLimit + 1}, (_, i) => i+1).map(pageIndex => {

                                return pageIndex === page ? <button aria-current="page" onClick={()=> {setPage(page => pageIndex)}}
                                       className="relative z-10 inline-flex items-center bg-[#D8762D] px-4 py-2 text-sm
                                        font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{pageIndex}</button> :
                                    <button key={pageIndex} onClick={()=> {setPage(page => pageIndex)}} className="relative inline-flex items-center
                                px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300
                                hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{pageIndex}</button>
                            })
                        }
                        <buttom onClick={() => setPage(page => (page * pageLimit < results.length) ? page + 1 : page)}
                           className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
                                 data-slot="icon">
                                <path fillRule="evenodd"
                                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </buttom>
                    </nav>
                </div>
            </div>
        </div>

    </>
}

export default ProductsPage