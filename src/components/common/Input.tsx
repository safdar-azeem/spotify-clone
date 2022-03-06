interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className="input"
  />
);

export default Input;
