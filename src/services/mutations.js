import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest, signupRequest } from "../firebase/auth";
import { addTaskRequest } from "../firebase/tasks";

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
            console.log("settled");
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ["tasks"] });
            }
        },
    });
};
