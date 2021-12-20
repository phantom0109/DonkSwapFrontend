// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '../uikit/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

declare module "*.mp4" {
  const value: any;
  export default value;
}

declare module "*.MP4" {
  const value: any;
  export default value;
}

declare module "*.mov" {
  const value: any;
  export default value;
}
