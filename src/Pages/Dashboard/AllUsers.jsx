import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleUserDelete = user => {
        console.log(user)
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
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {



                        window.location.reload();
                        Swal.fire(
                            'Deleted!',
                            'Your user has been deleted.',
                            'success'
                        )

                    })
            }
        })

    }
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    window.location.reload();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1700
                    })

                }
            })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>FoodGorilla | All Users</title>

            </Helmet>
            <h2 className="text-3xl my-4 font-semibold">Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{
                                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn hover:bg-yellow-100 btn-ghost btn-xs"><FaUserShield className=" text-yellow-600 text-lg"></FaUserShield></button>
                            }</td>
                            <td><button onClick={() => handleUserDelete(user)} className="btn hover:bg-red-200 btn-ghost btn-xs"><FaTrash className=" text-red-500 text-lg" /></button></td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;