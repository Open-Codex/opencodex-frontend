import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';
import { useRouter } from 'next/navigation';

interface LoginData {
    username: string;
    password: string;
}

interface LoginResponse {
    user: {
        id: string;
        name: string;
        username: string;
        email: string;
        userRol: string;
    };
    token: string;
}

export function useLogin() {
    const router = useRouter();

    return useMutation<LoginResponse, Error, LoginData>({
        mutationFn: async (data: LoginData) => {
            const response = await apiFetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed');
            }

            return response.json() as Promise<LoginResponse>;
        },
        onSuccess: (data) => {
            localStorage.setItem('authToken', data.token);
            router.push('/me');
        },
    });
}