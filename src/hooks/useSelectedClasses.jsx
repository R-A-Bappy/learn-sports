import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/selectedClass?email=${user.email}`);
            return response.data;
        }
    })

    return [selectedClass, refetch];
}

export default useSelectedClasses;