import { RootState } from "../store";

export const ThemeSelector = (state: RootState) => state.theme.theme;
