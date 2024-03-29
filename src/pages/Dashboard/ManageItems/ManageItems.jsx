import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
    const handleDeleteItem = (item) =>{

    }

    const [menu] = useMenu();
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            menu.map((item,index) =>  <tr key={item._id}>
                                <td>
                                    {index+1}
                                </td>
                                 <td>
                                     <div className="flex items-center gap-3">
                                         <div className="avatar">
                                             <div className="mask mask-squircle w-12 h-12">
                                                 <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                             </div>
                                         </div>
                                     </div>
                                 </td>
                                 <td>
                                    {item.name}
                                 </td>
                                 <td className="text-right">${item.price}</td>
                                 <td>
                                     <button className="btn btn-ghost btn-lg bg-orange-500"><FaEdit className="text-white"></FaEdit></button>
                                 </td>
                                 <td>
                                     <button
                                     onClick={() => handleDeleteItem(item)}
                                     className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                     </button>
                                 </td>
                             </tr>)
                           }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;