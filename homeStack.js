import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import ReviewDetail from './components/ReviewDetail';
import About from './components/About';
import ReviewList from './components/ReviewList';
import NewReviewDetails from './components/NewReviewDetails';

const screens = {
    Home: {
        screen:Home
    },
    About: {
        screen:About
    },
    ReviewDetail: {
        screen:ReviewDetail
    },
    NewReviewDetails:{
        screen:NewReviewDetails
    },
    ReviewList:{
        screen:ReviewList
    }

}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)
