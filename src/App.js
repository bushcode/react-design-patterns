// import { ContentWrapper } from './components/splitScreen/contentWrapper';
// import { SidePanel } from './components/splitScreen/sidePanel';
// import { SplitScreen } from './components/splitScreen/splitScreen';
// import { people, products } from './data';
// import { RegularList } from './components/layout/lists/regularList';
// import { SmallPerson } from './components/layout/lists/people/smallPerson';
// import { LargePerson } from './components/layout/lists/people/largePerson';
// import { NumberedList } from './components/layout/lists/numberedList';
// import { SmallProduct } from './components/layout/lists/products/smallProduct';
// import { LargeProduct } from './components/layout/lists/products/largeProduct';

import { CurrentUserLoader } from './components/container/loadCurrentUser';
import { UserInfo } from './components/container/userInfo';

function App() {
	return (
		<div className="App">
			<CurrentUserLoader>
				<UserInfo />
			</CurrentUserLoader>
		</div>
	);
}

export default App;

/* <RegularList items={people} resourceName="person" itemComponent={SmallPerson} />
			<RegularList items={people} resourceName="person" itemComponent={LargePerson} /> 
			<NumberedList items={products} resourceName="product" itemComponent={SmallProduct} />
			<NumberedList items={products} resourceName="product" itemComponent={LargeProduct} /> 
      			<RegularList items={people} resourceName="person" itemComponent={LargePerson} />
*/
