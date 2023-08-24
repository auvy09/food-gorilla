import { useContext } from "react";
import { AuthContext } from '../../contexProvider/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [refetch] = useCarts();

    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        window.location.reload();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item Added to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login, for order the food',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="font-bold bg-slate-800 absolute mr-4 rounded-xl p-2 mt-3 right-0 ">Price: ${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p >{recipe}</p>

                <div className="card-actions justify-end mt-5">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-1 border-b-4 mb-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;