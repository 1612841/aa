import { createStore, combineReducers, applyMiddleware } from "redux"; //vi la 4 reducers rieng biet nen de ke hop lai thanh 1 state thi can combineReducers
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({  //create-form để có thể giữ form ban đầu, khi nào cần reset thì sài action.reset('feedback'), còn bình thường sẽ nhận dữ liệu vào state
                feedback: InitialFeedback  //model = " feedback" createForm tạo model=feedback cho form nào nhận reducer này
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}