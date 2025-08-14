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
                body: JSON.stringify(data),
            });

            return response;
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            router.push('/me');
        },
        onError: (error) => {
            console.error('Login error:', error.message);
        }
    });
}