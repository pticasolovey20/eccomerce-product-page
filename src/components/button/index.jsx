import { classNames } from "../../utils";

const Button = ({ icon, text, fullWidth = false, action }) => {
	return (
		<button
			onClick={action}
			className={classNames(
				"flex items-center justify-center gap-3 w-full",
				!fullWidth && "lg:w-[60%]",
				"py-3 px-2 rounded-xl",
				"lg:text-lg font-bold text-white",
				"bg-primary-orange"
			)}
		>
			{icon}
			{text}
		</button>
	);
};

export default Button;
