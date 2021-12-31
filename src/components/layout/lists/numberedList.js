export const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
	return (
		<>
			{items.map((item, index) => (
				<>
					<h4>{index + 1}</h4>
					<ItemComponent key={index} {...{ [resourceName]: item }} />
				</>
			))}
		</>
	);
};
