import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Portal from '@material-ui/core/Portal';
import ToolbarFilters from './components/ToolbarFilters';
import ComponentDrawer from './components/ComponentDrawer';
import { ToolbarStyles } from './styles';
import componentDefinitions from './componentDefinitions';
import Categories, { CategoryValues } from './components/Categories';

export interface ToolbarProps {
  activeItem: string;
  classes: ToolbarStyles;
  portalOpen: boolean;
  filteredComponents: typeof componentDefinitions;
  selectActiveItem: ( item : string ) => void;
  setPortalFilter: ( filter : string ) => void;
  setPortalExistance: ( exists : boolean ) => void;
  portalFilter: CategoryValues;
}

let container : any; // TODO 09/17/2018 Rich Baird : File a bug report with MUI their prop definition doesn't match

const Toolbar : React.SFC<ToolbarProps> = ({
  activeItem = '',
  classes,
  portalOpen = false,
  filteredComponents,
  selectActiveItem,
  portalFilter,
  setPortalFilter,
}) => (
    <ClickAwayListener onClickAway={setPortal(false)}>
      <MenuList className={classes.toolbar}>
        <Categories
          portalFilter={portalFilter}
          classes={classes}
          setPortalFilter = {setPortalFilter}
        />
      <div
        style={{ marginTop: `${filteredComponents.length && ( (filteredComponents[0].position || -3 ) + 3)  * 48 }px` }}
        ref={(ref) => { container = ref; }}
        className={classes.portalContainer}
      />
        { portalOpen === true ? (
          <Portal container={container} >
            <ComponentDrawer
              selectActiveItem = {selectActiveItem}
              activeItem = {activeItem}
              classes={classes}
              portalFilter={portalFilter}
              filteredComponents={filteredComponents}
            />
          </Portal>
        ) : null }
      </MenuList>
    </ClickAwayListener>
);

export default Toolbar;
