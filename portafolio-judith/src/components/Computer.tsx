

interface ComputerProps {
    
}

const Computer: React.FC<ComputerProps> = ({ }) => (
    <>
   <div className="relative w-16 h-16 sm:w-24 sm:h-24">
    <img src="/Projects/chefPick.png" alt="Project1" className="w-full h-full object-contain" />
    <img src="/computer/computer.png" alt="Computer" className="w-full h-full object-contain" />
   </div>
    </>         
);

export default Computer;