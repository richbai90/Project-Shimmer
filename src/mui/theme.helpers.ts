
export interface Helpers {
  grow: {
    flex : string;
  }
  
  vh100: {
    height : string;
  }
  vw100: {
    width : string;
  }
  backgrounds: {
    light: string;
    dark: string;
    darker: string;
  }
  colors: {
    greenBlue: string;
    darkGreenBlue: string;
    violetBlue: string;
    redOrange: string;
    yellowOrange: string;
    main: string;
  }
}
const helpers : Helpers = {
  grow: {
    flex: 'auto',
  },
  vh100: {
    height: '100vh',
  },
  vw100: {
    width: '100vw',
  },
  backgrounds: {
    light: '#8dabc0',
    dark: '#0f3b5a',
    darker: '#0b283d',
  },
  colors: {
    greenBlue: '#1ed7e5',
    darkGreenBlue: '#10777f',
    violetBlue: '#9C74E5',
    redOrange: '#ff7d7f',
    yellowOrange: '#ffde45',
    main: '#2D3E50',
  },
};
export default helpers;
