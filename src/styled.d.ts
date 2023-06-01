import "styled-components";
import { customTheme } from "./core/App/theme";

type CustomTheme = typeof customTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
