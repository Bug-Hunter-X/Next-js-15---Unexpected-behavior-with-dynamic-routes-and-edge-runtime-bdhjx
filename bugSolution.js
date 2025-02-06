```javascript
// pages/product/[id].js

import { unstable_noStore } from 'next/cache';

export default async function ProductPage({ params }) {
  const res = await fetch(`https://api.example.com/products/${params.id}`, {
    next: { revalidate: 60 } // Add revalidation for improved performance
  });
  const product = await res.json();

  if (!product) {
    return (
      <div>Product not found</div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export const metadata = {
  unstable_noStore: true,
};
```