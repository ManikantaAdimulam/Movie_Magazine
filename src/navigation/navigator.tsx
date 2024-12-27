import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {screens} from './constants';
import Authentication from '@screens/auth/authentication';
import Movies from '@screens/movies/movies';
import InitialScreen from '@screens/auth/initialSceen';

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const Routes = (isAuthenticated: boolean = false) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={screens.INITIAL} component={InitialScreen} />
        <Stack.Screen name={screens.AUTH} component={Authentication} />
        <Stack.Screen name={screens.MOVIES} component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
