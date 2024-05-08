import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);
  return (
    <>
      {isPending && <h3 className="text-xl text-center ">Loading...</h3>}
      {product && (
        <div className="align-content">
          <h1 className="text-4xl font-bold mb-10  text-red-500 text-center">
            <span className="text-gray-400">Product - </span>
            {product.title}
          </h1>
          <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div className="carousel-item">
                  <img
                    src={image}
                    className="rounded-box max-h-60 lg:max-h-96 h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 text-2xl font-medium  mt-10  pl-8 mb-10 text-green-600 ">
            <p className="text-2xl flex items-center gap-1">
              <span className="text-gray-400  font-bold ">
                Price:  
              </span>
               $ {product.price}
            </p>
            <p className="text-2xl">
              <span className="text-gray-400  font-bold">Brand:</span>
              {product.brand}
            </p>
            <p className="text-2xl">
              <span className="text-gray-400  font-bold">Rating:</span>
              {product.rating}
            </p>{" "}
            <p className="text-2xl">
              <span className="text-gray-400  font-bold">Category:</span>{" "}
              {product.category}
            </p>{" "}
            <p className="text-2xl">
              <span className="text-gray-400  font-bold">Description:</span>
              {product.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
