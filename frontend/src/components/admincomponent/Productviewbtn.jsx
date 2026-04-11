'use client'

import ProductView from "./ProductView";

export default function ProductViewbtn({ product, imageBaseUrl,path }) {
  return (
    <>
      <ProductView 
      path={path}
        product={product} 
        imageBaseUrl={imageBaseUrl} 
      />
    </>
  );
}
