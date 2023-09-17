import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 products",
    img: "/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Fruits",
    count: "10 products",
    img: "/category__2.webp",
  },
  {
    id: 2,
    name: "Fresh Fruits",
    count: "14 products",
    img: "/category__3.webp",
  },
  {
    id: 3,
    name: "Fresh Fruits",
    count: "6 products",
    img: "/category__4.webp",
  },
  {
    id: 4,
    name: "Fresh Fruits",
    count: "22 products",
    img: "/category__5.webp",
  },
  {
    id: 5,
    name: "Fresh Fruits",
    count: "19 products",
    img: "/category__6.webp",
  },
  {
    id: 6,
    name: "Fresh Fruits",
    count: "11 products",
    img: "/category__7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 products",
    img: "/category__1.webp",
  },
];

const Category = () => {
  return (
    <div className="container pt-16 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
