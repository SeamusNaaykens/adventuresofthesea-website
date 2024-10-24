import React, { useEffect, useState } from 'react';
import { getPrintfulProducts } from './printfulService';

interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  retail_price: string;
}

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getPrintfulProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="store">
      <h1>Photography Prints</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.retail_price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;