import Header from "../header";

const Layout = ({ children }) => {
	return (
		<section className="min-h-screen flex flex-col">
			<Header />
			<div className="flex flex-1 xxl:w-[80%] xxl:mx-auto">{children}</div>
		</section>
	);
};

export default Layout;
