import { useUsuarioLogado } from "../../../hooks";

interface IButtonLoginProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {

  const {nomeDoUsuario} = useUsuarioLogado();

  return(
    <button type={type} onClick={onClick}>
      {nomeDoUsuario} {children}
    </button>
  );
}
