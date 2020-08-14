import { fetchUsers } from "../actions";

// Helper function to load data on the server side, before we render the app
export default (store) => {
  return store.dispatch(fetchUsers());
};
