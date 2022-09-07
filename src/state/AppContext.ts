import { createContext } from 'react';
import { initialState } from './StateTypes';

const AppContext = createContext(initialState);
export default AppContext;
