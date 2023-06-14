import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClasses = () => {
    const { data: classesData = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('https://learn-sports-server.vercel.app/classes');
            return res.data;
        }
    })
    return [classesData, refetch]
}

export default useClasses;