import maingImg from "../Assets/image-omelette.jpeg";

const Body = () => {
  return (
    <div className="sm:m-8">
      <div>
        <img className="sm:rounded-lg shadow-md sm:flex justify-center items-center" src={maingImg} alt="" />
      </div>
      <div className="ml-4 mt-4">
        <p className="font-bold text-3xl w-auto font-serif ">
          Simple Omelette Recipe
        </p>
      </div>
      <div className="m-2 p-2">
        <p className="font-mono">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="bg-pink-100 m-3 p-2">
        <h3 className="text-lg font-semibold text-pink-500 ml-2">
          Preparation Time
        </h3>
        <ul className="list-disc p-3 ">
          <li>
            <span className="font-bold m-4 ">Total:</span> Approximately 10
            minutes
          </li>

          <li>
            <span className="font-bold m-4">Prepartion:</span> 5 minutes
          </li>
          <li>
            {" "}
            <span className="font-bold m-4">Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>
      <div className="m-2 p-2 border-b-2 border-slate-500">
        <h1 className="font-extrabold text-amber-800 text-2xl">Ingredients</h1>
        <div className="m-4">
          <ul className="list-disc mt-5">
            <li className="mt-5"> 2-3 large eggs</li>
            <li className="mt-5"> Salt, to taste</li>
            <li className="mt-5">Pepper, to taste</li>
            <li className="mt-5">1 tablespoon of butter or oil</li>
            <li className="mt-5">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
      </div>

      <div className="m-2 p-2  border-b-2 border-slate-500">
        <h1 className="font-extrabold text-amber-800 text-2xl">Instructions</h1>
        <div>
          <ul className="list-decimal m-2 p-2">
            <li className="mt-5 p-2">
              <span className="font-bold"> Beat the eggs:</span> In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="mt-5 p-2">
              <span className="font-bold">  Heat the pan:</span>Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li> 
            <li className="mt-5 p-2">
              <span className="font-bold">Cook the omelette:</span>Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li className="mt-5 p-2">
              <span className="font-bold">Add fillings (optional):</span> When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li className="mt-5 p-2">
              <span className="font-bold">Fold and serve:</span> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li className="mt-5 p-2">
              <span className="font-bold">Enjoy: </span>Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ul>
        </div>
      </div>

        <div className="m-2 p-2">
            <h1  className="font-extrabold text-amber-800 text-2xl">Nutrition</h1>
            <div className="m-1 ">
                <p className="font-mono"> The table below shows nutritional values per serving without the additional fillings.</p>
            </div>
            <div className="flex justify-around "  >
                <table className="border-spacing-5">
                    <tr className="border-b-2 border-slate-400">
                        <td className="p-2 ">Calories</td>
                        <td className="p-2 font-bold" >227kcal</td>
                    </tr>
                    <tr className="border-b-2 border-slate-400">
                        <td className="p-2 ">Carbs</td>
                        <td className="p-2 font-bold" >0g</td>
                    </tr>
                    <tr className="border-b-2 border-slate-400">
                        <td className="p-2 ">Protiens</td>
                        <td className="p-2 font-bold" >20g</td>
                    </tr>
                    <tr className="border-b-2 border-slate-400">
                        <td className="p-2 ">Fat</td>
                        <td className="p-2 font-bold" >22g</td>
                    </tr>
                </table>
            </div>
        </div>
 
    </div>
  );
};

export default Body;
