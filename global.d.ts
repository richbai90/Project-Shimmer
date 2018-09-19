type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
  interface Global {
    __INIT_MATERIAL_UI__: {
      theme: any;
      sheetsManager: Map<any, any>;
      sheetsRegistry: any;
      generateClassName: any;
      jss: any;
    }
  }
}

declare namespace Redux {
  interface Action<T> {
    readonly type: string
    readonly payload: T
  }
  
  type ActionCreator<T extends Action> = (...params : any) => T
  
}

declare module 'react-jss' {

  import * as React from 'react';

  export interface CSSProperties extends React.CSSProperties {
    composes?: string | string[]
  }

  export type StyleSheet<Props = {}>
    = Record<
        string, 
        CSSProperties 
        | ((props: Props) => React.CSSProperties)
      >;

  type StyleRules<ClassKey extends string = string, Props = {}> 
    = Record<ClassKey, CSSProperties 
    | ((props: Props) => React.CSSProperties)>;

  export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

  export interface WithStyles<ClassKey extends string = string> {
    classes: ClassNameMap<ClassKey>
  }

  export interface StyledComponentProps<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>
  }

  function injectSheet<ClassKey extends string>(
    style: StyleRules<ClassKey>,
    options?: any,
  ): <P>(
      component: React.ComponentType<P & WithStyles<ClassKey>>,
    ) => React.ComponentType<P & StyledComponentProps<ClassKey>>;

  export default injectSheet;

  export const jss: any

  export const JssProvider: any
}

declare module 'next-redux-saga' {
  function withReduxSaga<T>(arg: function | Partial<{[index : string] : any; async: boolean; }>) : T
  export default withReduxSaga;
}

// TODO 09/19/2018 Rich Baird : Define relevant types
declare module 'jss-preset-default' {
  export default () => any;
}