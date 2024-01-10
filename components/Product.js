import React from "react";

const ProductCard = ({ name, description, price, rating, image }) => {
  // ... rest of the code remains the same

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={image}
        alt={name}
        className="mb-4 rounded-lg"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-900 font-bold mb-2">${price}</p>
      <div className="flex items-center">{renderStars()}</div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      name: "Arugula",
      description:
        "Fresh, peppery arugula leaves perfect for salads or as a garnish.",
      price: 3.99,
      rating: 4.5,
      image: "https://via.placeholder.com/300", // Replace with actual image URLs
    },
    {
      name: "Pak Choi Cabbage",
      description:
        "Crunchy and flavorful, great for stir-fries and Asian-inspired dishes.",
      price: 2.49,
      rating: 4,
      image: "https://via.placeholder.com/300", // Replace with actual image URLs
    },
    // Add image URLs for other products
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
