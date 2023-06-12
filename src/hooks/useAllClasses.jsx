import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useAllClasses = () => {
    // fetch('')
    //     .then(res => res.json())
    //     .then(data => setClassData(data))

    const { data: classData = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes');
            return res.data;
        }
    })

    return [classData, refetch];
}

export default useAllClasses;