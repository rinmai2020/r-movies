import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "apis/authAPI";

const initialState = {
	users: [],
	isLoading: false,
	error: null,
	search: "",
};

export const getUsers = createAsyncThunk(
	"home/admin/getUsers",
	async (_, { rejectWithValue }) => {
		try {
			const data = await authAPI.getUsers();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addUser = createAsyncThunk(
	"home/admin/addUser",
	async (values, { dispatch, rejectWithValue }) => {
		try {
			await authAPI.addUser(values);
			dispatch(getUsers());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteUser = createAsyncThunk(
	"home/admin/deleteUser",
	async (account, { dispatch, rejectWithValue }) => {
		try {
			await authAPI.deleteUser(account);
			dispatch(getUsers());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const updateUser = createAsyncThunk(
	"home/admin/updateUser",
	async (values, { dispatch, rejectWithValue }) => {
		try {
			await authAPI.updateUser(values);
			dispatch(getUsers());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const updateUserClient = createAsyncThunk(
	"home/admin/updateUserClient",
	async (values, { dispatch, rejectWithValue }) => {
		try {
			await authAPI.updateUserClient(values);
			dispatch(getUsers());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const searchUser = createAsyncThunk(
	"home/admin/search",
	async (value, { rejectWithValue }) => {
		try {
			const data = await authAPI.searchUser(value);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const userSlice = createSlice({
	name: "home/admin/users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUsers.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.isLoading = false;
		});
		builder.addCase(getUsers.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});

		builder.addCase(searchUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(searchUser.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.isLoading = false;
		});
		builder.addCase(searchUser.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});
	},
});

export default userSlice.reducer;
