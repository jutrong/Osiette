import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    // 여기에 테마 속성을 정의하세요
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      black: string;
    };
    // 필요한 다른 테마 속성들...
  }
}
