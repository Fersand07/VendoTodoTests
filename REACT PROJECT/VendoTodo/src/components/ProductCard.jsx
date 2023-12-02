import { useProducts } from "../context/ProductContext"
import { Link } from 'react-router-dom'

function ProductCard({ product }) {

    const {deleteProduct} = useProducts();

    return (
        <div className="bg-gray-300 max-w-md w-full p-10 rounded-md my-4"  >
            <header className="flex justify-between">
                <h1 className="text-1xl font-bold">{product.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteProduct(product._id);
                    }}>Delete</button>
                    <Link to= {`/products/${product._id}`} >Edit</Link>
                </div>
            </header>
            <p className="text-slate-600">{product.price}</p>
            <p className="text-slate-950" >{product.description}</p>
        </div>
    )
}

export default ProductCard