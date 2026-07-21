import React from "react";
import products from "../data/products.js";
import { useParams } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice.jsx";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams(); //grab ID from URL
  const product = products.find((item) => item.id === Number(id));

  return (
    <div className="w-screen ml-2 md:ml-0 md:w-[953px]">
      {/* back */}
      <Link
        to="/"
        className="flex space-x-[8px] py-2 hover:translate-x-5 transition-all duration-300
      "
      >
        {/* arrow icon */}
        <img src="/Arrow-left.svg" alt="arrow-back" />
        <p className="text-xl">Back</p>
      </Link>

      {/* PRODUCT SHOW SECTIOLN - to remove the border*/}
      <div className="grid md:grid-cols-[auto_auto_1fr] p-2  items-start">
        {/* left images */}

        <div className="space-y-4 space-x-4 flex md:flex-col">
          <div className="bg-white h-[58px] w-[50px] p-[8px] rounded-[13px]">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="bg-white h-[58px] w-[50px] p-[8px] rounded-[13px]">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="bg-white h-[58px] w-[50px] p-[8px] rounded-[13px]">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        {/* product image */}
        <div className="bg-white rounded-[13px] w-[200px] mt-5 md:mt-0 ml-20 md:ml-4">
          <img
            src={product.image}
            alt={product.title}
            className="md:w-[242px] md:h-[302px]"
          />
        </div>

        {/* product content */}
        <div className="ml-0 md:ml-[32px] mt-6 md:mt-0 px-4 pb-4">
          <h1 className="text-4xl xl:text-[61px] font-bold">{product.title}</h1>
          <p className="font-medium text-[31px] text-tertiary mb-[25.5px]">
            {product.color}
          </p>
          {/* star rating */}
          <div className="flex mb-[17.5px] ">
            <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
            <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
            <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
            <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
            <FaStarHalfAlt className="fill-accent text-accent w-[22.5px] h-[21px]" />
            <span className="text-accent text-xl ml-[25px]">4.5/5</span>
          </div>
          {/* price */}
          <span className="text-[31px] font-medium">{product.price}</span>
          <p className="p-2 hidden md:block md:w-[300px] xl:w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
            imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
            tincidunt lorem mi duis. Vitae elementum libero.
          </p>

          {/* MOBILE VIEW */}
          <div className="md:hidden flex items-center justify-center w-[200px] mt-6 md:mt-0 p-3 rounded-xl bg-white shadow-lg">
            {" "}
            <a className="text-xl font-medium">See Description</a>
          </div>

          {/* CTA button */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn-primary mt-8 md:mt-2 md:ml-35 xl:ml-auto scale-hover"
          >
            <img src="/add-cart.svg" alt="add to cart" />
            <span className="text-white">Add to Bag</span>
          </button>
        </div>
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div className="mt-[24px] p-[16px]">
        {/* line */}
        <div className="h-0.75 w-[200px] md:w-[600px] xl:w-[858px] mb-8 bg-dark/50" />
        {/* text */}
        <h2 className="text-[31.25px] font-medium">Description</h2>
        <p className="pt-2 w-[300px] w-[600px] xl:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          odio faucibus nec malesuada purus volutpat vel sed viverra. Id
          sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
          pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
          purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque
          sit mattis in egestas neque. Eu porta tempor sodales nisl integer
          turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor
          diam quisque suspendisse. Orci vel ridiculus diam viverra. Libero
          malesuada orci, quis placerat suscipit augue imperdiet. Et praesent
          augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque
          massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
          sit viverra enim. Id id placerat eu etiam nulla laoreet. Dignissim leo
          fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam
          justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin
          ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi
          sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur
          morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra
          hendrerit risus. Odio phasellus nibh senectus nec id enim quam sed. At
          potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et
          adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at
          facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam
          cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius
          risus eros.
        </p>
      </div>
    </div>
  );
}
