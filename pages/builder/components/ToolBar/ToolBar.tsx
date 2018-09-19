import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Portal from '@material-ui/core/Portal';
// import ToolbarFilters from './components/ToolbarFilters';
import ComponentDrawer from './components/ComponentDrawer';
import { ToolbarStyles } from './styles';
import componentDefinitions from './componentDefinitions';
import Categories, { CategoryValues } from './components/Categories';

export interface ToolbarProps {
  activeItem?: string;
  classes: ToolbarStyles;
  portalOpen: boolean;
  filteredComponents: typeof componentDefinitions;
  componentDrawerFilter?: CategoryValues;
  toggleComponentDrawer: ( filter : CategoryValues ) => void;
}

let container : any; // TODO 09/17/2018 Rich Baird : File a bug report with MUI their prop definition doesn't match

const Toolbar : React.SFC<ToolbarProps> = ({
  // activeItem = '',
  classes,
  portalOpen = false,
  filteredComponents,
  componentDrawerFilter = "",
}) => (
    <ClickAwayListener onClickAway={() => false}> // TODO 09/19/2018 Rich Baird : Fix this
      <MenuList className={classes.toolbar}>
        <Categories
          componentDrawerFilter={componentDrawerFilter}
          classes={classes}
          setPortalFilter={ () => false} // TODO 09/19/2018 Rich Baird : Fix this
        />
      <div
        style={{ marginTop: `${filteredComponents.length && ( (filteredComponents[0].position || -3 ) + 3)  * 48 }px` }}
        ref={(ref) => { container = ref; }}
        className={classes.portalContainer}
      />
        { portalOpen === true ? (
          <Portal container={container} >
            <ComponentDrawer
            // TODO 09/19/2018 Rich Baird : Fix all of this
              // selectActiveItem = {selectActiveItem}
              // activeItem = {activeItem}
              // componentDrawerFilter={componentDrawerFilter}
              // filteredComponents={filteredComponents}
            />
          </Portal>
        ) : null }
      </MenuList>
    </ClickAwayListener>
);

export default Toolbar;
