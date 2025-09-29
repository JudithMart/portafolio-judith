import { Link } from "react-router-dom";

interface ButtonProps {
    texto: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ texto, link }) => (
    <>
    <Link to={link}>
        <button
            className="h-12  w-36 sm:h-[57px] sm:w-[182px] bg-[#6C958D] rounded-full flex items-center justify-center relative
            transition-transform duration-200 hover:scale-110 hover:shadow-2xl shadow-xl ">
            <span className="text-gray-300 text-base sm:text-xl font-semibold">{texto}</span>
        </button>
    </Link>
    </>         
);

export default Button;