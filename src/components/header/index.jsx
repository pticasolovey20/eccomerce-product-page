import { useApp } from "../../context/AppContext";
import { NAVIGATION } from "../../constants";
import { classNames } from "../../utils";

import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";
import Cart from "../cart";

import avatar from "../../assets/image-avatar.png";

const Header = () => {
	const { setSideIsOpen, cartIsOpen, setCartIsOpen, cart } = useApp();

	return (
		<header
			className={classNames(
				"relative flex justify-center items-center",
				"px-3 sm:px-4 md:px-6 xxl:px-0 select-none",
				"w-full h-[60px] sm:h-[75px] md:h-[90px] "
			)}
		>
			<div className="w-full xxl:w-[80%] h-full flex items-center justify-between md:border-b ">
				<div className="flex items-center gap-8 lg:gap-12 h-full">
					<div className="flex items-center gap-3">
						<div onClick={() => setSideIsOpen(true)}>
							<MenuIcon />
						</div>
						<div className="mb-2 hidden xs:block">
							<LogoIcon />
						</div>
					</div>
					<nav className="hidden md:flex items-center h-full">
						<ul className="flex items-center h-full gap-8">
							{NAVIGATION.map((link, index) => (
								<li
									key={index}
									className={classNames(
										"flex items-center py-2 h-full",
										"text-gray-500",
										"border-b-4 border-transparent cursor-pointer",
										"hover:border-primary-orange hover:text-black"
									)}
								>
									{link}
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
					<div onClick={() => setCartIsOpen(!cartIsOpen)} className="relative">
						<CartIcon />
						{cart.length > 0 && (
							<div
								className={classNames(
									"absolute top-[-2px] right-[-4px]",
									"flex items-center justify-center px-1.5",
									"rounded-md text-[10px] bg-primary-orange"
								)}
							>
								{cart.length}
							</div>
						)}
					</div>
					{cartIsOpen && <Cart />}
					<div className={classNames("w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12", "mb-2 cursor-pointer")}>
						<img src={avatar} alt="avatar" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
