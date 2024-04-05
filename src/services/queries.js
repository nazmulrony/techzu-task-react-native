import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTasks } from "../firebase/tasks";

export function useGetTasks() {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: () => getTasks(),
        // placeholderData: keepPreviousData,
    });
}
