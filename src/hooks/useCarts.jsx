import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';
const useCarts = () => {
    const { user, } = useAuth();
    // const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.json();
        },
    })
    console.log(cart);
    return [cart]

}
export default useCarts;