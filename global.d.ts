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