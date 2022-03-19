import React from 'react';
import deepmerge from 'deepmerge';
import { darkColors, lightColors, } from '@react-native-elements/base/dist/helpers';
export const ThemeContext = React.createContext({
    theme: {
        colors: lightColors,
    },
});
export const createTheme = (theme) => {
    return deepmerge({ colors: lightColors, darkColors, mode: 'light' }, theme);
};
const separateColors = (theme, themeMode) => {
    const { darkColors: themeDarkColors = {}, colors: themeLightColors = {}, mode = themeMode, ...restTheme } = theme;
    const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
    return { colors: themeColors, mode, ...restTheme };
};
export const ThemeProvider = ({ theme = {}, children }) => {
    const [themeState, setThemeState] = React.useState(createTheme(theme));
    const updateTheme = React.useCallback((updatedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof updatedTheme === 'function'
                ? updatedTheme(oldTheme)
                : updatedTheme;
            return deepmerge({ ...oldTheme }, newTheme);
        });
    }, []);
    const replaceTheme = React.useCallback((replacedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof replacedTheme === 'function'
                ? replacedTheme(oldTheme)
                : replacedTheme;
            return deepmerge(createTheme({}), newTheme);
        });
    }, []);
    return (<ThemeContext.Provider value={{
            theme: separateColors(themeState),
            updateTheme,
            replaceTheme,
        }}>
      {children}
    </ThemeContext.Provider>);
};
export const ThemeConsumer = ThemeContext.Consumer;
