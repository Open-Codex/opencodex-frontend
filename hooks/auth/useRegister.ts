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

            return await apiFetch('/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password
                }),
            });
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.token); // Usa 'token' como en login
            router.push('/me');
        },
        onError: (error) => {
            console.error('Registration error:', error.message);
        }
    });
}