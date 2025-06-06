import { configureStore } from "@reduxjs/toolkit";
import authApi from "../features/api/loginSlice/loginApiSlice";
import commentApi from "../features/api/commentSlice/commentSlice";
import postApi from "../features/api/postSlice/postSlice";
import userApi from "../features/api/userSlice/userSlice";
import imageApi from "../features/api/imageuoloadoncloud/img";
import postUIStateSlice from "@/app/features/slice/postUiState/postUiStateSlice";
import postSlices from "@/app/features/slice/createPostSlice/createPostSlice";
import userProfileSlice from "@/app/features/slice/userProfileSlice/userProfileSlice";
import postSlice from "@/app/features/slice/publicPostSlice/publicPostSlice";
import userSlice from "@/app/features/slice/userMangementSlice/userMangementSlice";
import postSliceee from "@/app/features/slice/postMangementSlice/postMangementSlice";
import searchSlice from "@/app/features/api/searchSlice/searchSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
    postUIState: postUIStateSlice,
    createPost: postSlices,
    userProfile: userProfileSlice,
    publicPost: postSlice,
    userMangement: userSlice,
    postManagement: postSliceee,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(commentApi.middleware)
      .concat(postApi.middleware)
      .concat(userApi.middleware)
      .concat(imageApi.middleware)
      .concat(searchSlice.middleware),
});

export default store;
