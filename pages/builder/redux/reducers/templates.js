import { LOADING_TEMPLATE } from '../types/templates';
// import { startLoadingTemplate } from '../actions/templates';

const actionMap = {
  [LOADING_TEMPLATE]: (state, loading) => ({ ...state, loading }),
};

const defaultState = {
  available: [
    {
      import: 'none',
      name: 'None',
    },
    {
      import: 'withSideMenu',
      name: 'With Side Menu',
    },
  ],
  loading: false,
};

const defaultAction = state => state;

export default (state = defaultState, { type, payload }) => (
  (actionMap[type] || defaultAction)(state, payload)
);
