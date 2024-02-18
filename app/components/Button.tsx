// components/Button.tsx

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; // Add this line
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick,type='button' }) => {
    return (
      <button className="your-button-styles" onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  