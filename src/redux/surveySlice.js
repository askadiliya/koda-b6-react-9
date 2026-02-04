import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    submissions: []
  },
  reducers: {
    addSurvey: (state, action) => {
      state.submissions.push(action.payload);
    },
    deleteSurvey: (state, action) => {
      state.submissions = state.submissions.filter(
        (item) => item.id !== action.payload
      );
    },
    clearSurvey: (state) => {
      state.submissions = [];
    }
  }
});

export const { addSurvey, deleteSurvey, clearSurvey } = surveySlice.actions;
export default surveySlice.reducer;
