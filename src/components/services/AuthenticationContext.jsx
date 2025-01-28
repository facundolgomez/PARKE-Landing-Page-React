import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AuthenticationContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user")) || null;

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(userValue);

    const handleLogin = (email) => {
        localStorage.setItem("user", JSON.stringify({ email }));
        setUser({ email });
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthenticationContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
