import MAIN from "../../assets/images/image-product-1.jpg";

import TUMB_1 from "../../assets/images/image-product-1-thumbnail.jpg";
import TUMB_2 from "../../assets/images/image-product-2-thumbnail.jpg";
import TUMB_3 from "../../assets/images/image-product-3-thumbnail.jpg";
import TUMB_4 from "../../assets/images/image-product-4-thumbnail.jpg";

const TUMBS = [
	{ src: TUMB_1, alt: "tumb_1" },
	{ src: TUMB_2, alt: "tumb_2" },
	{ src: TUMB_3, alt: "tumb_3" },
	{ src: TUMB_4, alt: "tumb_4" },
];

const ProductImages = () => {
	return (
		<div className="w-full flex flex-col gap-4 lg:gap-8 sm:px-10 xl:px-8">
			<div className="sm:rounded-2xl overflow-hidden max-h-[350px] sm:max-h-full">
				<img src={MAIN} alt="main" className="object-contain" />
			</div>
			<div className="hidden sm:flex gap-4 lg:gap-8">
				{TUMBS.map(({ src, alt }, index) => (
					<div key={index} className="rounded-xl overflow-hidden">
						<img src={src} alt={alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductImages;
