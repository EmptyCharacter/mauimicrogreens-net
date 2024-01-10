import React from "react";
import Header from "@/components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          About Maui Microgreens
        </h1>
        <p className="mb-4">
          At Maui Microgreens, our passion lies in cultivating the freshest and
          most nutrient-rich microgreens on the beautiful island of Maui. Our
          journey began with a simple vision: to bring the health benefits and
          flavorful goodness of microgreens directly to your plate.
        </p>
        <h2 className="text-xl font-bold mb-2">Our Story</h2>
        <p className="mb-4">
          Founded by a group of dedicated urban farmers with a shared love for
          sustainable agriculture, Maui Microgreens started as a humble project
          in a small backyard. Over time, our commitment to quality and
          innovation has allowed us to grow into a leading provider of premium
          microgreens across the island.
        </p>
        <h2 className="text-xl font-bold mb-2">What Sets Us Apart</h2>
        <p className="mb-4">
          What makes us stand out is our dedication to sustainable farming
          practices. We believe in harnessing the power of natural resources
          while minimizing our environmental footprint. Our microgreens are
          cultivated in eco-friendly environments, utilizing organic methods and
          water-efficient systems to ensure the freshest, healthiest produce for
          our customers.
        </p>
        <h2 className="text-xl font-bold mb-2">A Commitment to Quality</h2>
        <p className="mb-4">
          Quality is at the heart of everything we do. From seed selection to
          harvesting, our process is meticulously curated to deliver microgreens
          bursting with flavor and packed with nutrients. We prioritize
          freshness, ensuring that each batch reaches you at the peak of its
          vitality.
        </p>
        {/* Other sections... */}
        <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
        <p>
          Join us on this journey toward healthier, sustainable living. Whether
          you're a local business looking for fresh produce or an individual
          seeking nutritious greens, Maui Microgreens is here to serve you.
          Contact us today to learn more about our products, services, or how
          you can get involved. Let's cultivate a healthier future together!
        </p>
        <div className="mt-6 text-center text-gray-600">
          <p>Contact: Phone: 808-555-1234 | Email: info@mauimicrogreens.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
