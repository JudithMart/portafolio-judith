import { Link } from "react-router-dom";

interface ButtonProps {
    texto: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ texto, link }) => (
    <>
    <Link to={link}>
        <button
            className="h-10  w-24 md:h-12 md:w-32 bg-[#6C958D] rounded-2xl flex items-center justify-center relative
            transition-transform duration-200 hover:scale-110 hover:shadow-2xl shadow-xl ">
            <span className="text-gray-300 text-sm md:text-base font-semibold">{texto}</span>
        </button>
    </Link>
    </>         
    
);


export default Button;  