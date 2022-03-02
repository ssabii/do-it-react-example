import {
  LOADING_TRANSACTION_LIST,
  SET_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';
import { handle } from 'redux-pack';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackAction';

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities, loading: false, hasError: false };
    }
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        // case LOADING_TRANSACTION_LIST와 동일
        start: (prevState) => ({
          ...prevState,
          loading: true,
          hasError: false,
        }),
        // case SET_TRANSACTION_LIST와 거의 유사함
        success: (prevState) => {
          const { data } = payload;
          const ids = data.map((entity) => entity['id']);
          const entities = data.reduce(
            (finalEntities, entity) => ({
              ...finalEntities,
              [entity['id']]: entity,
            }),
            {},
          );
          return {
            ...prevState,
            ids,
            entities,
            loading: false,
            hasError: false,
          };
        },
        // case SET_ERROR와 거의 유사함
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loading: false,
            hasError: true,
            errorMessage,
          };
        },
      });
    }
    default:
      return state;
  }
};
