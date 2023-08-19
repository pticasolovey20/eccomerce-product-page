import { NAVIGATION } from "../../constants";
import { classNames } from "../../utils";

import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";

import avatar from "../../assets/images/image-avatar.png";

const Header = () => {
	return (
		<header
			className={classNames(
				"flex justify-center items-center",
				"px-6 xxl:px-0 select-none",
				"w-full h-[60px] sm:h-[75px] md:h-[90px] "
			)}
		>
			<div className="w-full xxl:w-[80%] h-full flex items-center justify-between md:border-b ">
				<div className="flex items-center gap-12 h-full">
					<div className="flex items-center gap-3">
						<MenuIcon />
						<div className="mb-2 hidden xs:block">
							<LogoIcon />
						</div>
					</div>
					<nav className="hidden lg:flex items-center h-full">
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
					<CartIcon />
					<div className={classNames("w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12", "mb-2 cursor-pointer")}>
						<img src={avatar} alt="avatar" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
