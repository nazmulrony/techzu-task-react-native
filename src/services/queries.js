import { useQuery } from "@tanstack/react-query";
import { getUserByEmailRequest, getUsersRequest } from "../firebase/auth";
import { getTasksRequest } from "../firebase/tasks";

export function useGetTasks(uid) {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: () => getTasksRequest(uid),
    });
}
export function useGetAuthenticatedUser(email) {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => getUsersRequest(email),
    });
}

export function useGetUserByEmail(email) {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => getUserByEmailRequest(email),
        enabled: !!email,
    });
}
