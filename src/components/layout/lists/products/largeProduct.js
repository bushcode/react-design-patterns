export const LargeProduct = ({ product }) => {
	const { name, price, description, rating } = product;
	return (
		<>
			<h3>Name: {name}</h3>
			<p>price: {price} years</p>
			<p>Description: {description} </p>

			<p>{rating}</p>
		</>
	);
};
