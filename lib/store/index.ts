import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import CourseReducer from './slices/courseSlice'
import BlogReducer from './slices/blogSlice'
import QuizReducer from './slices/quizSlice'

export const store = configureStore({
  reducer: {
    course: CourseReducer,
    blog: BlogReducer,
    quiz: QuizReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

setupListeners(store.dispatch)

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
