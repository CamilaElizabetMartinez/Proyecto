import { createContext, useState, useContext, useEffect } from "react";
import { CHECK_TOKEN_URL } from "../settings";

const LoginContext = createContext(null);

export default function AuthContext({ children }) {

    // const [loginUser, setLoginUser] = useState({});
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const getToken = () => localStorage.getItem("TOKEN_KEY");
    // const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    // const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    // const isAdmin = () => loginUser?.role === "ADMIN";

    // const signIn = (token, user) => {
    //     setToken(token);
    //     setLoginUser(user);
    //     setIsAuthenticated(true);
    // }

    // const signOut = () => {
    //     removeToken();
    //     setLoginUser({});
    //     setIsAuthenticated(false);
    // }

    // const [loginUser, setLoginUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const signIn = (token) => {

        setToken(token);
        // setLoginUser(user);
        setIsAuthenticated(true);
    }

    const signOut = () => {

        removeToken();
        // setLoginUser({});
        setIsAuthenticated(false);
    }

    const getAuthHeaders = (headers = {}) => {
        return { ...headers, Authorization: `Bearer ${getToken()}` }
    };

    //comente el useEffect para poder trabajar en la tabla de productos,luego descomentar.
    /* useEffect(() => {
        const options = {
            method: "POST",
            headers: getAuthHeaders({
                "Content-type": "application/json",
                "Accept": 'application/json'
            })
        };

        getToken() && fetch(VALIDATE_SESSION, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
        const token = getToken();
        const user = jwt_decode(token);
        signIn(token, user);
    }, []);
 */

    // useEffect(() => {
    //     Recuperar la sesión y comprobar su validez
    //     const options = {
    //         headers: getAuthHeaders()
    //     };

    //     si no hay token guardado, no hacemos la petición
    //     getToken() && fetch(VALIDATE_SESSION, options)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then(data => signIn(getToken())) // Token renovado
    //         .catch(() => signOut()); // Limpiamos la sesión

    // }, []);

    useEffect(() => {
        // Recuperar la sesión y comprobar su validez
        const options = {
            headers: getAuthHeaders()
        };

        // si no hay token guardado, no hacemos la petición
        getToken() && fetch(CHECK_TOKEN_URL, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => signIn(getToken())) // Token renovado
            .catch(() => signOut()); // Limpiamos la sesión

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const contextValue = {
        // loginUser,
        // isAdmin,
        isAuthenticated,
        getToken,
        signIn,
        signOut,
        getAuthHeaders
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

const useAuthContext = () => useContext(LoginContext);

export { useAuthContext };