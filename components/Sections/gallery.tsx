// components/HappyClientsGallery.tsx
import { FC } from "react";
import Image from "next/image";

interface ClientImage {
  id: number;
  src: string;
  alt: string;
}

const clientImages = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-11_at_11.00.42_f1d9c90c.jpg?v=1731517742",
    alt: "Happy Client 1",
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-11_at_11.00.43_fa113cc9.jpg?v=1731517742",
    alt: "Happy Client 2",
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-11_at_11.00.42_37d9f15e.jpg?v=1731517743",
    alt: "Happy Client 3",
  },
  {
    id: 4,
    src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-11_at_11.00.43_ed7a6d3b.jpg?v=1731517743",
    alt: "Happy Client 4",
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-11-11_at_11.00.42_6430ab0f.jpg?v=1731517743",
    alt: "Happy Client 5",
  },
  // Add more images as needed
];

const HappyClientsGallery: FC = () => {
  const images = clientImages.concat(clientImages);

  return (
    <section className="max-w-screen-xl mx-auto py-20 px-6">
      <h2 className="text-4xl sm:text-5xl font-sans font-bold text-gray-900 text-center mb-12 animate-fadeIn">
      Nos clients satisfaits
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {images.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-60 h-60 m-2 relative"
            >
              <Image
                src={client.src}
                alt={client.alt}
                layout="fill"
                objectFit="contain"
                className=""
                priority={index < clientImages.length} // Prioritize initial images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsGallery;
