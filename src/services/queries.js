import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUser } from "../firebase/auth";
import { getTasks } from "../firebase/tasks";

export function useGetTasks(uid) {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: () => getTasks(uid),
    });
}
// export function useGetAuthenticatedUser(email) {
//     return useQuery({
//         queryKey: ["user"],
//         queryFn: () => getAuthenticatedUser(email),
//     });
// }
