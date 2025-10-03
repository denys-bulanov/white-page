import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type BlogState = {
  title: string
  date: string
  author: string
  slug: string
}

const initialState: BlogState = {
  title: '',
  date: '',
  author: '',
  slug: '',
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlog(state, action: PayloadAction<Partial<BlogState>>) {
      const payload = action.payload
      state.title = payload.title ?? state.title
      state.date = payload.date ?? state.date
      state.author = payload.author ?? state.author
      state.slug = payload.slug ?? state.slug
    },
  },
})

export const { setBlog } = blogSlice.actions
export default blogSlice.reducer
