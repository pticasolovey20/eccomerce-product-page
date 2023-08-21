import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <AppContext.Provider value={{ isOpen, setIsOpen }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
