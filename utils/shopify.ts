import axios from 'axios';

const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN!;

const shopify = axios.create({
  baseURL: `https://${shopifyDomain}/api/2023-07/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    'Content-Type': 'application/json',
  },
});

export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: {
      node: {
        originalSrc: string;
        altText: string;
      };
    }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
};

export const fetchProducts = async (): Promise<Product[]> => {
  const query = `
    {
      products(first: 12) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopify.post('', { query });
  return response.data.data.products.edges.map((edge: { node: Product }) => edge.node);
};
