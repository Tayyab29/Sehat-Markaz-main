import CalendarNavigation from './calendar-navigation';
import Routes from './routes';
import {  LogBox} from 'react-native';

LogBox.ignoreLogs([
    'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
  ]);

export { CalendarNavigation, Routes };
