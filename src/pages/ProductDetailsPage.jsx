import { useParams } from "react-router-dom";
import { products } from "../data/products";

// Import all our specialized components
import ImageGallery from '../components/ImageGallery';
import ProductInfo from '../components/ProductInfo'; 
import GeekyDetails from '../components/GeekyDetails';
import RecommendedProducts from '../components/RecommendProduct';

const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-40 font-heading text-2xl">Product not found.</div>;
  }
  
  return (
    <>
      <div className="bg-off-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            <ImageGallery images={product.images} productName={product.name} />
            {/* Here we pass the product data and the addToCart function down */}
            <ProductInfo product={product} addToCart={addToCart} />
          </div>
        </main>
      </div>

      <GeekyDetails product={product} />
      <RecommendedProducts currentProductId={product.id} />
    </>
  );
};

export default ProductDetailsPage;