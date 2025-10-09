import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {

    const params = useParams(); // after the colon  

    // to='..' ==> to the route (default)
    // relative='path' up one level (by path)    
    return (
        <>
            <h1>
                {params.id}
                
            </h1>
            <p><Link to='..' relative="path">BACK</Link></p>    
        </>

    )


}

export default ProductDetailPage;