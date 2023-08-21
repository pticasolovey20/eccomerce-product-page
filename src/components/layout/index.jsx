import { useApp } from "../../context/AppContext";
import Header from "../header";
import SideBar from "../side-bar";

const Layout = ({ children }) => {
	const { isOpen } = useApp();

	return (
		<section className="min-h-screen flex flex-col">
			<Header />
			{isOpen && <SideBar />}
			<div className="flex flex-1 xxl:w-[80%] xxl:mx-auto">{children}</div>
		</section>
	);
};

export default Layout;
