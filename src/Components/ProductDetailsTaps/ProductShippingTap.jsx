export default function ProductShippingTap({ productDetails }) {
  return (
    <div>
      <h3 className=" font-semibold text-lg mb-4">Shipping & Returns</h3>

      <div>
        <h3 className=" font-semibold mb-4">Shipping Information :</h3>
        <ul className="*:flex *:gap-4 space-y-2 ">
          <li>
            <span className="font-semibold">Standerd :</span>
            <p>3-5 business days ($4.99)</p>
          </li>
          <li>
            <span className="font-semibold">Express :</span>
            <p>1-2 business days ($9.99)</p>
          </li>
          <li>
            <span className="font-semibold">Free Shiping :</span>
            <p>Orders over $50</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
