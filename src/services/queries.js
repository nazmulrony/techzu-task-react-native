import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTasks } from "../firebase/tasks";

export function useGetTasks(uid) {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: () => getTasks(uid),

        // placeholderData: keepPreviousData,
    });
}
