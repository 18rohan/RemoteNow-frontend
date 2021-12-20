export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const setDarkMode = (isDark) => ({
  type: TOGGLE_DARK_MODE,
  payload: isDark,
});
