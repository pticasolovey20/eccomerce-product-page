import MAIN from "../../assets/images/image-product-1.jpg";

import TUMB_1 from "../../assets/images/image-product-1-thumbnail.jpg";
import TUMB_2 from "../../assets/images/image-product-2-thumbnail.jpg";
import TUMB_3 from "../../assets/images/image-product-3-thumbnail.jpg";
import TUMB_4 from "../../assets/images/image-product-4-thumbnail.jpg";

import PrevArrowIcon from "../icons/PrevArrowIcon";
import NextArrowIcon from "../icons/NextArrowIcon";

import { classNames } from "../../utils";

const TUMBS = [
	{ src: TUMB_1, alt: "tumb_1" },
	{ src: TUMB_2, alt: "tumb_2" },
	{ src: TUMB_3, alt: "tumb_3" },
	{ src: TUMB_4, alt: "tumb_4" },
];

const ProductPhotos = () => {
	return (
		<div
			className={classNames(
				"flex flex-col md:flex justify-center gap-4 lg:gap-8",
				"sm:grid grid-cols-2",
				"md:pr-8 lg:pr-20"
			)}
		>
			<div className="relative max-h-[300px] sm:max-h-full w-full col-span-1">
				<button
					className={classNames(
						"absolute top-1/2 left-1 xs:left-3",
						"flex sm:hidden items-center justify-center"
					)}
				>
					<PrevArrowIcon />
				</button>
				<img className="h-full w-full object-cover sm:rounded-2xl overflow-hidden" src={MAIN} alt="main" />
				<button
					className={classNames(
						"absolute top-1/2 right-1 xs:right-3",
						"flex sm:hidden items-center justify-center"
					)}
				>
					<NextArrowIcon />
				</button>
			</div>
			<div className={classNames("w-full hidden md:flex gap-4 lg:gap-8", "sm:grid grid-cols-2 col-span-1")}>
				{TUMBS.map(({ src, alt }, index) => (
					<div key={index} className="w-full h-full">
						<img className="rounded-xl" src={src} alt={alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductPhotos;
