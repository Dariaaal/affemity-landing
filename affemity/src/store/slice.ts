import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GoalState = {
  goal: string | null; 
  selectedSkills: string[];
}

const initialState: GoalState = {
  goal: null,
  selectedSkills: [],
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    setGoal(state, action: PayloadAction<string>) {
      state.goal = action.payload; 
    },
    setSelectedOptions(state, action: PayloadAction<string[]>) {
      state.selectedSkills = action.payload; 
    },
    addSelectedOption(state, action: PayloadAction<string>) {
      if (!state.selectedSkills.includes(action.payload)) {
        state.selectedSkills.push(action.payload); 
      }
    },
    removeSelectedOption(state, action: PayloadAction<string>) {
      state.selectedSkills = state.selectedSkills.filter(
        (skill) => skill !== action.payload 
      );
    },
  },
});

export const {
  setGoal,
  setSelectedOptions,
  addSelectedOption,
  removeSelectedOption,
} = goalSlice.actions;

export default goalSlice.reducer;
