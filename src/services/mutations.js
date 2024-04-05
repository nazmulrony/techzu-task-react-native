import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest, signupRequest } from "../firebase/auth";
import { addTaskRequest, deleteTask, updateTask } from "../firebase/tasks";

export const useSignup = () => {
    return useMutation({ mutationFn: signupRequest });
};
export const useLogin = () => {
    return useMutation({ mutationFn: loginRequest });
};

export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTaskRequest,
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["tasks"] });
            }
        },
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateTask,
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["tasks"] });
            }
        },
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTask,
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["tasks"] });
            }
        },
    });
};
