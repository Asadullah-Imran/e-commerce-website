import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "product__5.webp", name: "Fresh Tomato", price: "$50" },
  { id: 1, img: "product__2.webp", name: "Dried Crisp", price: "$200" },
  { id: 2, img: "product__3.webp", name: "Dried orange", price: "$150" },
  { id: 3, img: "product__4.webp", name: "Dried pine", price: "$350" },
];

const FeaturesSectionBreakfast = () => {
  return (
    <div className="container pt-16 ">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-500 mt-2">
            Buy best quality Breakfast online from big-basket stop neat you
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & dairy</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/feature__2.webp"
            alt="banner"
          />
        </div>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSectionBreakfast;
