import { combineReducers} from 'redux';
import kittens from './kittens.jsx';
import puppies from './puppies.jsx';
import users from './users.jsx';

const rootReducer = combineReducers({ kittens, puppies, users });

export default rootReducer;
