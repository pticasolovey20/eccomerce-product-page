import { classNames } from "./utils";

import Layout from "./components/layout";
import Description from "./components/description";
import ProductPhotos from "./components/product-photos";

const App = () => {
	return (
		<Layout>
			<div
				className={classNames(
					"w-full flex flex-col md:flex-row gap-1 md:gap-4 xxl:gap-12",
					"sm:px-6 md:px-8 xl:px-12 xxl:px-16",
					"md:py-8 xl:py-16 xxl:py-24"
				)}
			>
				<ProductPhotos />
				<Description />
			</div>
		</Layout>
	);
};

export default App;
