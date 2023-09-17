interface propsType {
  img: string;
  name: string;
  count: string;
}

const CategoryCard: React.FC<propsType> = ({ img, name, count }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg flex justify-center">
      <div className="flex items-center p-6">
        <div className="space-y-4 flex items-center gap-4">
          <div>
            <h3 className="font-medium text-xl ">{name}</h3>
            <p className="text-gray-500">{count}</p>
          </div>

          <div>
            <img className="w-[100px] " src={img} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
