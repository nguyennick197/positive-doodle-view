export const HeartIcon = ({ fill, size }: { fill?: string, size?: string }) => {
    return (
        <svg viewBox="0 0 24 24" width={size || "24"} height={size || "24"}>
            <path
                fill={fill || ""} d="M12 21.665L4.335 14C2.35 12.014 1 9.314 1 6.5 1 3.042 3.042 1 6.5 1c1.871 0 3.618.792 4.873 2.096C12.882 1.792 14.629 1 16.5 1 19.958 1 22 3.042 22 6.5c0 2.814-1.35 5.514-3.335 7.5L12 21.665z"
            />
        </svg>
    )
}