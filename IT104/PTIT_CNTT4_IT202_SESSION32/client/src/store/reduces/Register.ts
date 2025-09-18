const initialState = {
  email: "",
  pass: "",
};

export const account = (state = initialState, action: any) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        email: action.payload.email,
        pass: action.payload.pass,
      };
    default:
      return state;
  }
};
