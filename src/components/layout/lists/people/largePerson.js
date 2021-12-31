export const LargePerson = ({ person }) => {
	const { name, age, hairColor, hobbies } = person;
	return (
		<>
			<h3>Name: {name}</h3>
			<p>age: {age} years</p>
			<p>Hair Color: {hairColor} </p>

			<h3>Hobbies</h3>
			<ul>
				{hobbies.map((hobby, index) => (
					<li key={index}>{hobby}</li>
				))}
			</ul>
		</>
	);
};
