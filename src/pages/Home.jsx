import ProductsList from "../components/ProductsList";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");

  
  return (
    <div className="align-content">
      <h1 className="text-3xl text-center mb-4">All products</h1>
      {isPending && <h3 className="text-xl text-center ">Loading...</h3>}
      <ProductsList products={products} />
    </div>
  );
}

export default Home;
