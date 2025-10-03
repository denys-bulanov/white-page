import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CourseState = {
  title: string
  duration: string
  level: string
  description: string
  slug: string
}

const initialState: CourseState = {
  title: '',
  duration: '',
  level: '',
  description: '',
  slug: '',
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse(state, action: PayloadAction<Partial<CourseState>>) {
      const payload = action.payload
      state.title = payload.title ?? state.title
      state.duration = payload.duration ?? state.duration
      state.level = payload.level ?? state.level
      state.description = payload.description ?? state.description
      state.slug = payload.slug ?? state.slug
    },
  },
})

export const { setCourse } = courseSlice.actions
export default courseSlice.reducer
