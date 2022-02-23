import { useRef, useCallback, useEffect, useMemo, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  useEffect(() => {
    console.log(email)
  }, [email]);

  useEffect(() => {
    console.log(password)
  }, [password]);

  const handleEntrar = useCallback(() => {
    console.log(email)
    console.log(password)
  }, [email, password]);

  return(
    <div>
      <p>Quantidade de caracteres no email: {emailLength}</p>

      <InputLogin
        label="Email"
        value={email}
        onChange={newValue => setEmail(newValue)}
        onPresEnter={() => inputPasswordRef.current?.focus()}
      />

      <InputLogin
        type="password"
        label="Senha"
        value={password}
        ref={inputPasswordRef}
        onChange={newValue => setPassword(newValue)}
      />

      <ButtonLogin type="button" onClick={handleEntrar}>
        Entrar
      </ButtonLogin>
    </div>
  );
}
