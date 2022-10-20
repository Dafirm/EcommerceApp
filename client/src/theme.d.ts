// import { Theme, ThemeOptions } from "@mui/material/styles";
// declare module "@mui/material/styles" {
//   interface ExtendedTheme {
//     palette: {
//       primary: {
//         main: string;
//       };
//     };
//     gap: (spacing: number) => number;
//     space: {
//       0: number;
//       1: number;
//       2: number;
//       3: number;
//       4: number;
//       5: number;
//     };
//   }
//   interface Theme extends ExtendedTheme {}
//   interface ThemeOptions extends ExtendedTheme {}
// }
import { Theme } from '"mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string
    }
  }

  // allow configuration using 'creataTheme'
  interface CustomTheme extends Theme {
    status?: {
      danger: string
    }
  }

  export function creataTheme(option?: CustomThemeOptions): CustomTheme
}