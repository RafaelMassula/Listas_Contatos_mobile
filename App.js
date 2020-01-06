import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { CapitalizeFirstLetter } from './src/util';


const AppNavigator = createStackNavigator({
	'Main': {
		screen: PeoplePage
	},
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({ navigation }) => {
			const peopleName = CapitalizeFirstLetter(
				navigation.state.params.people.name.first
			);

			return ({
				title: peopleName,
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
				}
			});
		}
	},
}, {
	defaultNavigationOptions: {
		title: 'Contatos',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#34AD9F',
			borderBottomWidth: 1,
			borderBottomColor: '#C5C5C5'
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 30,

			// centralizar o header
			flexGrow: 1,
			textAlign: 'center'
		},
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;