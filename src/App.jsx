import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";

export function App() {

  const [usuarioLogado, SetUsuarioLogado] = useState(null);

  useEffect(() => {
    // Monitorar/detectar o usuário conectado
    onAuthStateChanged(auth, (user) => { // onAuthStateChanged serve para saber se  o usuário esta logado ou não
      // user é nulo = deslogado
      // user tem objeto = logado
      SetUsuarioLogado(user);
    })
    // Esse efeito irá rodar apenas uma vez
    // Quando o app for renderizado
  }, [])


  return (
    <>
      <AuthContext.Provider value={usuarioLogado}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
      <Toaster />
    </>
  );
}