import { Effect, Reducer } from 'umi';
import { getChannelData } from './_service';
import { MoreListItem } from './data.d'

export interface MoreModelState {
    listData: MoreListItem[];
}

export interface MoreModelType {
    namespace: 'more';
    state: MoreModelState;
    effects: {
        getListdata: Effect;
    };
    reducers: {
        channelData: Reducer<{}>;
    };
}
const MoreModel: MoreModelType = {
    namespace: 'more',
    state: {
        listData: []
    },
    effects: {
        *getListdata({ payload }, { call, put }) {
            const response = yield call(getChannelData, payload);
            yield put({
                type: 'channelData',
                payload: response
            })
        }
    },
    reducers: {
        channelData(state, action) {
            const datas = action.payload.data;
            return {
                ...state,
                listData:[...datas]
            };
        }
    }
}

export default MoreModel;