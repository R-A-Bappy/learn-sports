import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructors = () => {
    const { data: instructorsAllData = [], refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axios.get('https://learn-sports-server.vercel.app/instructors');
            return res.data;
        }
    })
    return [instructorsAllData, refetch]
}

export default useInstructors;