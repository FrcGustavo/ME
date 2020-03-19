export const LOGIN = (email) => {
  return {
    type: 'LOGIN',
    payload: {
      hasUser: true,
      email,
    },
  };
};
