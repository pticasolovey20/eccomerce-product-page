import { useApp } from "../../context/AppContext";
import { classNames } from "../../utils";

import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const Counter = () => {
	const { amount, setAmount } = useApp();

	return (
		<div
			className={classNames(
				"flex w-full lg:w-[160px] items-center justify-evenly gap-8",
				"px-4 py-3 mt-2 md:mt-0 bg-neutral-light-grayish-blue",
				"rounded-lg"
			)}
		>
			<div
				className={classNames(
					"h-4 w-4 cursor-pointer",
					"flex items-center justify-center",
					"hover:scale-125 duration-200"
				)}
				onClick={() => setAmount((prev) => (prev - 1 < 0 ? 0 : prev - 1))}
			>
				<MinusIcon />
			</div>
			<div className="h-4 w-4 flex items-center justify-center px-4 text-lg font-bold">{amount}</div>
			<div
				className={classNames(
					"h-4 w-4 cursor-pointer",
					"flex items-center justify-center",
					"hover:scale-125 duration-200"
				)}
				onClick={() => setAmount((prev) => prev + 1)}
			>
				<PlusIcon />
			</div>
		</div>
	);
};

export default Counter;
