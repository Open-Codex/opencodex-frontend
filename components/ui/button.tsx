import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "sm" | "default" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "default",
    size = "default",
    className,
    children,
    ...props
}) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
        default: "bg-[#A855F7] text-white hover:bg-[#9333ea]",
        outline: "border border-white/10 text-white hover:border-white/30",
        ghost: "bg-transparent text-white hover:bg-white/10",
        link: "underline-offset-4 text-[#A855F7] hover:underline",
    };

    const sizes: Record<string, string> = {
        sm: "h-8 px-3",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6",
    };

    return (
        <button
            className={cn(base, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
