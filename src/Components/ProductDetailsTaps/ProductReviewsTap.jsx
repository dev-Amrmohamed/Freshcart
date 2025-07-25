import Ratings from "../Ratings/Ratings";

export default function ProductReviewsTap({ productDetails }) {
  const { ratingsAverage, ratingsQuantity } = productDetails;
  return (
    <>
      <section className="space-y-4">
        <h3 className="font-medium text-lg mb-4">Customer Reviews</h3>
        <div className="flex gap-1.5 flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <Ratings ratings={ratingsAverage} ratingsQuantity={ratingsQuantity} />
            <p className="text-sm text-gray-500">{ratingsAverage}</p>
            <p className="text-sm text-gray-500">({ratingsQuantity})</p>
          </div>
          <p className="text-gray-500 px-1">Based On 700 review</p>
        </div>

        <div className="flex gap-1.5 flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <Ratings ratings={4.2} />
            <p className="text-sm text-gray-500">Isak nile</p>
          </div>
          <p className="text-gray-500 px-1">
            "Absolutely delicious! The strawberries were fresh, sweet, and perfectly ripe. Will
            definitely order again."
          </p>
        </div>

        <div className="flex gap-1.5 flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <Ratings ratings={3} />
            <p className="text-sm text-gray-500">Mark Shnider</p>
          </div>
          <p className="text-gray-500 px-1">"Great Items , I will be buying one agin."</p>
        </div>

        <div className="flex gap-1.5 flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <Ratings ratings={ratingsAverage} />
            <p className="text-sm text-gray-500">Franc Albert</p>
          </div>
          <p className="text-gray-500 px-1">
            "Absolutely delicious! The strawberries were fresh, sweet, and perfectly ripe."
          </p>
        </div>
        <div className="flex gap-1.5 flex-col justify-center">
          <div className="flex gap-1.5 items-center">
            <Ratings ratings={7} />
            <p className="text-sm text-gray-500">Jhon Doe</p>
          </div>
          <p className="text-gray-500 px-1">
            "Absolutely delicious! The strawberries were fresh, sweet, and perfectly ripe. Will
            definitely order again."
          </p>
        </div>
      </section>
    </>
  );
}
