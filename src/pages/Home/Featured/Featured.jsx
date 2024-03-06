import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {

    return (

        <div className ="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, doloremque. Dolor, porro perferendis. Fugiat repellat placeat officiis earum qui corrupti quisquam ipsum voluptatibus alias, aliquam magni delectus inventore, est dolorum nam nemo quod, voluptates mollitia laborum ipsa assumenda quasi expedita laudantium. Nisi officiis deserunt aut odio inventore, quisquam iusto deleniti?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;