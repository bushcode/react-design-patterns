export const SmallProduct = ({ product }) => {
	const { name, price } = product;
	return (
		<h3>
			Name: {name} - price: {price}
		</h3>
	);
};
