import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Skill } from "../models/Skill";

type GoalState = {
  goal: string | null;
  selectedSkills: Skill[];
  email: string;
};

const initialState: GoalState = {
  goal: null,
  selectedSkills: [],
  email: "",
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    setGoal(state, action: PayloadAction<string>) {
      state.goal = action.payload;
    },
    setSelectedOptions(state, action: PayloadAction<Skill[]>) {
      state.selectedSkills = action.payload;
    },
    addSelectedOption(state, action: PayloadAction<Skill>) {
      if (!state.selectedSkills.includes(action.payload)) {
        state.selectedSkills.push(action.payload);
      }
    },
    removeSelectedOption(state, action: PayloadAction<Skill>) {
      state.selectedSkills = state.selectedSkills.filter(
        (skill) => skill.id !== action.payload.id
      );
    },
    addEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const {
  setGoal,
  setSelectedOptions,
  addSelectedOption,
  removeSelectedOption,
  addEmail
} = goalSlice.actions;

export default goalSlice.reducer;
