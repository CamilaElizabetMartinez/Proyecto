import { createContext, useState, useContext, useEffect } from "react";
import { VALIDATE_SESSION } from "../settings";
import jwt_decode from "jwt-decode";

const LoginContext = createContext(null);

export default function AuthContext({ children }) {

    const [loginUser, setLoginUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loginUser?.role === "ADMIN";

    const signIn = (token, user) => {
        setToken(token);
        setLoginUser(user);
        setIsAuthenticated(true);
    }

    const signOut = () => {
        removeToken();
        setLoginUser({});
        setIsAuthenticated(false);
    }

    const getAuthHeaders = (headers = {}) => {

        return { ...headers, Authorization: `Bearer ${getToken()}` }
    };

    useEffect(() => {

        const options = {
            method: "POST",
            headers: getAuthHeaders({
                "Content-type": "application/json",
                "Accept": 'application/json'
            })
        };

        getToken() && fetch(VALIDATE_SESSION, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
        const token = getToken();
        const user = jwt_decode(token);
        signIn(token, user);
    }, []);

    /*   useEffect(() => {
  
          if (getToken()){
              const token = getToken();
              const user = jwt_decode(token);
              signIn(token, user);
          }else{
              signOut();
          }
          
      }, []);  */

    const contextValue = {
        loginUser,
        isAuthenticated,
        isAdmin,
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