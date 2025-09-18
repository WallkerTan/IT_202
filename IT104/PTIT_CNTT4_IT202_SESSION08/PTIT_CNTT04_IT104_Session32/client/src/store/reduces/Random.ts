const initialState = {
  arrNumberRandom: [],
};
export const randomNumber: any = (state = initialState, action: any) => {
  switch (action.type) {
    case "RANDOM":
      const newNumber = Math.floor(Math.random() * 100);
      return {
        ...state,
        arrNumberRandom: [...state.arrNumberRandom, newNumber],
      };
    default:
      return state;
  }
};
