import { classNames } from "../../utils";

import CartIcon from "../icons/CartIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const Description = () => {
	return (
		<div className={classNames("w-full flex flex-col justify-center gap-2", "md:gap-6 p-4 sm:p-6 md:p-0")}>
			<span className="uppercase text-primary-orange font-bold tracking-widest">Sneaker Company</span>
			<h1 className="text-3xl md:text-5xl font-bold text-neutral-very-dark-blue">
				Fall Limited Edition Sneakers
			</h1>
			<p className="text-base md:text-lg text-neutral-dark-grayish-blue mt-2 md:mt-0">
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
				sole, they’ll withstand everything the weather can offer.
			</p>
			<div
				className={classNames(
					"flex flex-col justify-between gap-2",
					"xs:flex-row sm:flex-row md:flex-col",
					"mt-2 md:mt-0"
				)}
			>
				<div className="flex gap-3 items-center font-bold">
					<span className="text-2xl md:text-3xl text-neutral-very-dark-blue">$125.00</span>
					<span className="px-[6px] text-xl text-primary-orange rounded-md bg-primary-pale-orange">50%</span>
				</div>
				<span className="text-xl font-semibold text-neutral-dark-grayish-blue line-through select-none">
					$250.00
				</span>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-4 select-none">
				<div
					className={classNames(
						"flex w-full lg:w-[160px] items-center justify-evenly gap-8",
						"px-4 mt-4 md:mt-0 bg-primary-light-grayish-blue"
					)}
				>
					<div className="cursor-pointer">
						<MinusIcon />
					</div>
					<span className="text-lg font-bold px-4">3</span>
					<div className="cursor-pointer">
						<PlusIcon />
					</div>
				</div>
				<button
					className={classNames(
						"flex items-center justify-center gap-3 w-full lg:w-[60%]",
						"py-3 px-2 rounded-xl",
						"lg:text-lg font-bold text-white",
						"bg-primary-orange"
					)}
				>
					<CartIcon mb="0px" />
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Description;
