export function cn(...classes: (string | false | undefined | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string | Date): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
}