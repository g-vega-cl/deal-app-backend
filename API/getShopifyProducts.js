const shopProductsURL =
  "https://deal-development.myshopify.com/admin/api/2023-01/products.json";
export async function getShopifyProducts() {
  // Default options are marked with *
  const response = await fetch(shopProductsURL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": "",
    },
  });
    return response.json(); // parses JSON response into native JavaScript objects
}
