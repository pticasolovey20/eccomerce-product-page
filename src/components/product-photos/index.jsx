import MAIN_1 from "../../assets/image-product-1.jpg";
import MAIN_2 from "../../assets/image-product-2.jpg";
import MAIN_3 from "../../assets/image-product-3.jpg";
import MAIN_4 from "../../assets/image-product-4.jpg";

import TUMB_1 from "../../assets/image-product-1-thumbnail.jpg";
import TUMB_2 from "../../assets/image-product-2-thumbnail.jpg";
import TUMB_3 from "../../assets/image-product-3-thumbnail.jpg";
import TUMB_4 from "../../assets/image-product-4-thumbnail.jpg";

import PrevArrowIcon from "../icons/PrevArrowIcon";
import NextArrowIcon from "../icons/NextArrowIcon";

import { classNames } from "../../utils";
import { useState } from "react";

const TUMBS = [
	{ mainSrc: MAIN_1, src: TUMB_1, alt: "tumb_1" },
	{ mainSrc: MAIN_2, src: TUMB_2, alt: "tumb_2" },
	{ mainSrc: MAIN_3, src: TUMB_3, alt: "tumb_3" },
	{ mainSrc: MAIN_4, src: TUMB_4, alt: "tumb_4" },
];

const ProductPhotos = () => {
	const [current, setCurrent] = useState(0);

	return (
		<div
			className={classNames(
				"flex flex-col md:flex justify-center gap-4 sm:gap-2 md:gap-4 lg:gap-8",
				"sm:grid grid-cols-2",
				"md:pr-8 lg:pr-20"
			)}
		>
			<div className="relative max-h-[300px] sm:max-h-full w-full col-span-1">
				<button
					onClick={() => setCurrent((prev) => (prev - 1 < 0 ? 3 : prev - 1))}
					className={classNames(
						"absolute top-1/2 left-1 xs:left-3",
						"flex sm:hidden items-center justify-center"
					)}
				>
					<PrevArrowIcon />
				</button>
				<img
					className="h-full w-full object-cover sm:rounded-2xl overflow-hidden"
					src={TUMBS[current].mainSrc}
					alt="main"
				/>
				<button
					onClick={() => setCurrent((prev) => (prev + 1 > 3 ? 0 : prev + 1))}
					className={classNames(
						"absolute top-1/2 right-1 xs:right-3",
						"flex sm:hidden items-center justify-center"
					)}
				>
					<NextArrowIcon />
				</button>
			</div>
			<div
				className={classNames(
					"w-full hidden md:flex gap-4 lg:gap-8",
					"sm:grid grid-cols-2 col-span-1",
					"sm:p-4 md:p-0"
				)}
			>
				{TUMBS.map(({ src, alt }, index) => (
					<div key={index} className="w-full h-full relative">
						<img className="rounded-xl" src={src} alt={alt} />
						<div
							onClick={() => setCurrent(index)}
							className={classNames(
								"absolute top-0 left-0 w-full h-full",
								"rounded-xl opacity-60 cursor-pointer border-2 border-transparent",
								current === index && "bg-primary-pale-orange",
								current === index && "!border-primary-orange"
							)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductPhotos;
