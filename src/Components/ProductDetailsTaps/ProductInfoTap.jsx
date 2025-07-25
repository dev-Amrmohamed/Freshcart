export default function ProductInfoTap({ productDetails }) {
  const { description } = productDetails;
  console.log(productDetails);

  return (
    <>
      <section>
        <h3 className="font-medium text-lg mb-4">Product Details</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </section>
    </>
  );
}
