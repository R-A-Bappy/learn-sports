import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedClass?email=${user.email}`);
            return response.json();
        }
    })

    return [selectedClass, refetch];
}

export default useSelectedClasses;