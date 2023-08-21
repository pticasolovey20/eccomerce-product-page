import { useApp } from "../../context/AppContext";
import { classNames } from "../../utils";

import CartIcon from "../icons/CartIcon";
import Counter from "../counter";
import Button from "../button";

const Description = () => {
	const { amount, setAmount, setCart } = useApp();

	const handleAddToCart = () => {
		if (amount > 0) {
			const itemsToAdd = Array.from({ length: amount }, (_, index) => index);
			setCart((prev) => [...prev, ...itemsToAdd]);
			setAmount(0);
		}
	};

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
			<div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-3 select-none">
				<Counter />
				<Button icon={<CartIcon mb="0px" />} text="Add to cart" action={handleAddToCart} />
			</div>
		</div>
	);
};

export default Description;
