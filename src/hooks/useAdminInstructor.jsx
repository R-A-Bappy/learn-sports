import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
// import useAxiosSecure from "./useAxiosSecure";

const useAdminInstructor = () => {
    const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();
    const { data: isAdminInstructor = [], isLoading: isAdminInstructorLoading } = useQuery({
        queryKey: ['isAdminInstructor', user.email],
        queryFn: async () => {
            const res = await fetch(`https://learn-sports-server.vercel.app/users/adminInstructor/${user?.email}`);
            const data = res.json();
            return data;
        }
    })
    return [isAdminInstructor, isAdminInstructorLoading];
}

export default useAdminInstructor;