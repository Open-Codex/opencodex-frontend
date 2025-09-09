const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options: RequestInit = {}) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const headers = new Headers(options.headers);
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');

    const mergedOptions: RequestInit = {
        ...options,
        headers,
        credentials: 'include',
    };

    try {
        const res = await fetch(`${API_URL}${path}`, mergedOptions);

        if (res.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
            throw new Error('Unauthorized - Please login again');
        }

        if (!res.ok) {
            let errorMessage = 'Error fetching data';
            try {
                const errorData = await res.json();
                if (errorData.message) errorMessage = errorData.message;
                if (errorData.error) errorMessage = errorData.error;
            } catch (e) {
                // JSON error response
            }
            const error = new Error(errorMessage) as Error & { status?: number };
            error.status = res.status;
            throw error;
        }

        return await res.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
}