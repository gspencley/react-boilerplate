import {combineEpics} from 'redux-observable';

import homeEpics from './home.epics';

export default combineEpics(homeEpics);
