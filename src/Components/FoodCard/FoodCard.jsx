
const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <p className="bg-slate-900 absolute right-0 text-white mr-4 mt-4 px-4">${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;