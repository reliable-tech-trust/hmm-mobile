import authReducer from '@screens/Auth/reducer';
import chatReducer from '@screens/Bottom/Chat/reducer';
import homeReducer from '@screens/Bottom/Home/reducer';
import activityReducer from '@screens/Bottom/Moments/reducer';
import feedbackReducer from '@screens/Common/Feedback.SubmitForm/reducer';
import customizationReducer from '@screens/Common/Gadgets.Customization/reducer';
import mileStoneReducer from '@screens/Common/Milestone/reducer';
import momentReducer from '@screens/Common/Moments/reducer';
import {combineReducers} from 'redux';
import generalReducer from './general/reducer';

const rootReducer = combineReducers({
  ...generalReducer,
  ...authReducer,
  ...homeReducer,
  ...activityReducer,
  ...mileStoneReducer,
  ...momentReducer,
  ...customizationReducer,
  ...feedbackReducer,
  ...chatReducer,
});

export default rootReducer;
