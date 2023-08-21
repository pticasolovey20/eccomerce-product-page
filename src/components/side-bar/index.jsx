import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../../context/AppContext";
import { NAVIGATION } from "../../constants";
import { classNames } from "../../utils";

import CloseIcon from "../icons/CloseIcon";

const SideBar = () => {
	const { sideIsOpen, setSideIsOpen } = useApp();

	const variant = { open: { x: 0 }, closed: { x: "-100%" } };

	return (
		<AnimatePresence>
			{sideIsOpen && (
				<motion.div
					className={classNames(
						"fixed top-0 left-0",
						"h-full w-[80%] xs:w-[65%] sm:w-[45%] md:hidden",
						"flex flex-col p-6 gap-8 z-10 bg-white"
					)}
					initial="closed"
					animate={sideIsOpen ? "open" : "closed"}
					exit="closed"
					variants={variant}
					transition={{ duration: 0.2, ease: "easeInOut" }}
				>
					<div onClick={() => setSideIsOpen(false)}>
						<CloseIcon />
					</div>
					<nav>
						<ul className="flex flex-col h-full">
							{NAVIGATION.map((link, index) => (
								<li key={index} className="flex items-center py-2 text-xl font-bold cursor-pointer">
									{link}
								</li>
							))}
						</ul>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SideBar;
