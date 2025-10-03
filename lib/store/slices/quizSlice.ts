import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type QuizState = {
  girlAge: string
  yourAge: string
  womanDream: string
  figure: string
  ethnic: string
  hair: string
  eye: string
  specific: string
  idealWoman: any
  mostTurns: string
  likeToTry: string
  scenarios: string
  scenarios2: string
}

const initialState: QuizState = {
  girlAge: '',
  yourAge: '',
  figure: '',
  womanDream: '',
  ethnic: '',
  hair: '',
  eye: '',
  specific: '',
  idealWoman: {
    temperature: 5,
    role: 5,
    flirt: 5,
    danger: 5,
    freedom: 5,
    mood: 5,
  },
  mostTurns: '',
  likeToTry: '',
  scenarios: '',
  scenarios2: '',
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz(state, action: PayloadAction<Partial<QuizState>>) {
      const payload = action.payload
      state.girlAge = payload.girlAge ?? state.girlAge
      state.yourAge = payload.yourAge ?? state.yourAge
      state.figure = payload.figure ?? state.figure
      state.womanDream = payload.womanDream ?? state.womanDream
      state.ethnic = payload.ethnic ?? state.ethnic
      state.hair = payload.hair ?? state.hair
      state.eye = payload.eye ?? state.eye
      state.specific = payload.specific ?? state.specific
      state.idealWoman = { ...state.idealWoman, ...payload.idealWoman }
      state.mostTurns = payload.mostTurns ?? state.mostTurns
      state.likeToTry = payload.likeToTry ?? state.likeToTry
      state.scenarios = payload.scenarios ?? state.scenarios
      state.scenarios2 = payload.scenarios2 ?? state.scenarios2
    },
  },
})

export const { setQuiz } = quizSlice.actions
export default quizSlice.reducer
