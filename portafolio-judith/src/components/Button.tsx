
interface ButtonProps {
    texto: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ texto, link }) => (
    <>
        <button
            className="h-12 w-36 sm:h-[57px] sm:w-[182px] bg-[#6C958D] rounded-full flex items-center justify-center relative shadow-md transition-all">
            <span className="text-gray-300 text-base sm:text-xl font-semibold">{texto}</span>
        </button>
    </>
);

export default Button;