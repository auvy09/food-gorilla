import { Helmet } from "react-helmet-async";

import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";


const MyCart = () => {
    const [cart] = useCarts();
    { console.log(cart); }
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = item => {
        console.log(item._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            window.location.reload();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="ml-7 w-full" >
            <Helmet>
                <title>FoodGorilla | My Cart</title>

            </Helmet>
            <div className="uppercase h-9 items-center font-semibold mb-5 flex  justify-evenly">
                <h3 className="text-3xl">Total Product: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-end">${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn hover:bg-red-200 btn-ghost btn-xs"><FaTrash className=" text-red-500 text-lg" /></button>
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

export default MyCart;