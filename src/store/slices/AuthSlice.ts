import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { error } from "console";

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (body: { login: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://e68a5f89ae16826a.mokky.dev/userData",
        {
          method: "POST",
          body: JSON.stringify(body),
        },
      );
      if (!response.ok) throw new Error("Ошибка подключения в удаленной БД");
      const { user, token } = await response.json();
      localStorage.setItem("UserToken", token);
      return { user, token };
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Ошибка входа");
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    body: { login: string; role: UserRole; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        "https://e68a5f89ae16826a.mokky.dev/userData",
        {
          method: "POST",
          body: JSON.stringify(body),
        },
      );
      if (!response.ok) throw new Error("Ошибка подключения в удаленной БД");
      const { user, token } = await response.json();
      localStorage.setItem("UserToken", token);
      return { user, token };
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Ошибка регистрации",
      );
    }
  },
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    // switchRole: (state, action: PayloadAction<UserRole>) => {
    //   if (state.user) state.user.role = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          const { user, token } = action.payload;
          state.isLoading = false;
          state.user = user;
          state.token = token;
        },
      )
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          const { user, token } = action.payload;
          state.isLoading = false;
          state.user = user;
          state.token = token;
        },
      );
  },
});

export const { logout, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;
