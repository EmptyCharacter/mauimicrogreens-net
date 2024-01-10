import Header from "@/components/Header";
import React from "react";

const ServicesList = () => {
  const services = [
    {
      title: "Wholesale Production",
      description:
        "Supplying microgreens in bulk for businesses and distributors.",
    },
    {
      title: "End Consumer Individual Pricing",
      description:
        "Providing microgreens directly to individual consumers at competitive prices.",
    },
    {
      title: "Competitive Pricing",
      description: "Offering competitive rates for all microgreen products.",
    },
    {
      title: "On-site Harvesting",
      description:
        "Fresh harvesting of microgreens done on-site to ensure quality and freshness.",
    },
    {
      title: "Custom Orders",
      description:
        "Accepting custom orders for specialized microgreen varieties or quantities.",
    },
    {
      title: "Educational Workshops",
      description:
        "Conducting workshops to educate on microgreens cultivation and usage.",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-slate-900">
        <h1 className="text-3xl font-bold mb-8 text-green-800">
          Services Offered by Maui Microgreens
        </h1>
        <div className="max-w-lg w-full bg-white p-6 rounded-md shadow-lg">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index}>
                <h2 className="text-lg font-semibold mb-2 text-green-800">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>Contact us for more information or to place an order:</p>
          <p>Phone: 808-555-1234 | Email: info@mauimicrogreens.com</p>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
