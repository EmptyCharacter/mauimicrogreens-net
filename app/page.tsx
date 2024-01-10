import Image from "next/image";
import { AppProps } from "next/app";
import Header from "@/components/Header";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <>
      <body className="bg-gray-100">
        <Header />

        <main className="container mx-auto py-8">
          <section className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Maui Microgreens
            </h2>
            <div style={{ borderRadius: "5px", overflow: "hidden" }}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1624241732981-2cb6f13363e9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                height={800}
                width={1000}
                alt="Kahului"
              />
            </div>

            <p className="text-4xl text-white mb-6 pt-8 text-center">
              Nourish your body with our locally grown, nutrient-packed
              microgreens.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </section>
          <ProductSection {...pageProps} />
        </main>

        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Kahului Holdings. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </>
  );
}

interface Product {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  rating,
  image,
}) => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>
      );
    }

    if (rating - fullStars > 0) {
      stars.push(
        <span key={totalStars} className="text-yellow-400">
          &#9734;
        </span>
      );
    }

    return stars;
  };

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

const ProductSection: React.FC = () => {
  const products: Product[] = [
    {
      name: "Arugula",
      description:
        "Fresh, peppery arugula leaves perfect for salads or as a garnish.",
      price: 3.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1593850685398-e79bab596d1d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
    {
      name: "Pak Choi Cabbage",
      description:
        "Crunchy and flavorful, great for stir-fries and Asian-inspired dishes.",
      price: 2.49,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1648128774225-b7cf04eb94c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
    {
      name: "Rambo Radish",
      description:
        "Vibrant and crisp radishes that add a zing to any salad or dish.",
      price: 1.99,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1647613233077-c323b019968b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
    {
      name: "Salad Mix",
      description:
        "A blend of fresh greens and herbs, perfect for creating delightful salads.",
      price: 4.49,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1593850685398-e79bab596d1d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
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
