export default function Tooltip({ message, children, className = '' }) {
    return (
        <div className="group relative flex">
            {children}
            <span className={`${className} absolute top-10 scale-0 transition-all rounded border-none shadow-md p-2 text-xs bg-gray-600  text-white  group-hover:scale-100 origin-top-right`}>{message}</span>
        </div>
    )
}
