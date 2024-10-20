import ProductCard from "@/components/productCard";

const SlidingDrawer = ({products}) => {
    return <>
    <div className={`w-full overflow-x-scroll flex flex-row gap-5 `}>
        {products.map(product => (<ProductCard key={product.id} {...product} />))}
    </div>
    </>
}

export default SlidingDrawer;
