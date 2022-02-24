import { createContext, useCallback } from 'react';

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {

  const handleLogout = useCallback(() => {
    console.log('Logout executou')
  }, [])

  return(
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Banana', logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
}
