import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '@/lib/fetcher';
import { useRouter } from 'next/navigation';

interface RegisterData {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface RegisterResponse {
    user: {
        id: string;
        name: string;
        username: string;
        email: string;
        userRol: string;
    };
    token: string;
}

export function useRegister() {
    const router = useRouter();

    return useMutation<RegisterResponse, Error, RegisterData>({
        mutationFn: async (data) => {
            if (data.password !== data.confirmPassword) {
                throw new Error('Las contraseñas no coinciden');
            }

            const response = await apiFetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Registration failed');
            }

            return response.json() as Promise<RegisterResponse>;
        },
        onSuccess: (data) => {
            localStorage.setItem('authToken', data.token);
            router.push('/me');
        },
    });
}