import { useApp } from "../../context/AppContext";
import { classNames } from "../../utils";

import MAIN from "../../assets/image-product-1.jpg";

import DeleteIcon from "../icons/DeleteIcon";
import Button from "../button";

const Cart = () => {
	const { cart, setCart } = useApp();

	return (
		<div
			className={classNames(
				"absolute flex flex-col",
				"top-[70px] lg:top-[80px]",
				"right-[-3px] sm:right-4 lg:right-[20px] xxl:right-[100px]",
				"w-[95%] sm:w-[360px] mx-3 sm:m-0",
				"rounded-xl z-10 bg-white",
				"shadow-black/25 shadow-md"
			)}
		>
			<div className="text-lg font-bold border-b p-6">Cart</div>
			<div className="flex flex-col gap-6 p-6">
				{cart.length > 0 ? (
					<>
						<div className="w-full flex items-center gap-3 justify-between">
							<img src={MAIN} alt="main" className="w-12 h-12 rounded-md" />
							<div className="text-neutral-dark-grayish-blue">
								<span className="text-base">Fall Limited Edition Sneakers</span>
								<div className="flex gap-2 text-lg">
									<span>$125.00 x {cart.length}</span>
									<span className="font-bold text-black">${125 * cart.length}</span>
								</div>
							</div>
							<div onClick={() => setCart([])} className="cursor-pointer">
								<DeleteIcon />
							</div>
						</div>
						<Button text="Checkout" fullWidth />
					</>
				) : (
					<div className="flex items-center justify-center h-[150px]">
						<span className="font-bold text-neutral-dark-grayish-blue">Your cart is empty</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
