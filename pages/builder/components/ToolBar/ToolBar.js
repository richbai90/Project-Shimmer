// import Link from 'next/link';
import propTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Portal from '@material-ui/core/Portal';
import ToolBarItems from './components/ToolBarItems';

// const Component = props => (
//   <Grid item>
//     <DraggableItem { ...props } />
//   </Grid>
// );

// const DndComponent = DragSource(COMPONENT, componentSpec, collector)(Component);

// const PortalItems = ({
//   items,
//   classes,
// }) => (
//   <div>
//     <Grid container className={classes.portal}>
//     {items.map((item) => {
//       const { name, value, id } = item;
//       if (value === 'heading') {
//         return (
//           <div className={classes.headerWrapper}>
//             < Typography
//               key={shortid.generate()}
//               className={classes.header}
//               id={value}
//             >
//               {name}
//             </Typography>
//           </div>
//         );
//       }
//       if (value === 'subheading') {
//         return (
//           <div>
//             < Typography key={shortid.generate()} variant="subheading" className={classes.subheader}>
//               {name}
//             </Typography>
//           </div>
//         );
//       }
//       return (
//         <DndComponent
//           className={classes.item}
//           id={id}
//           key={id}
//           name={name}
//           classes={classes}
//         />
//       );
//     })}
//     </Grid>
//   </div>
// );

// PortalItems.propTypes = {
//   // connectDragSource: PropTypes.func,
//   // connectDragPreview: PropTypes.func,
//   classes: propTypes.object,
//   items: propTypes.arrayOf(
//     propTypes.shape({
//       name: propTypes.string,
//       value: propTypes.string,
//       key: propTypes.string,
//     }),
//   ),
// };

let portal;
const ToolBar = ({
  activeItem = '',
  classes,
  loadComponentDetailsAction,
  closeComponentDetailsAction,
  // setActiveItem = null,
  items = null,
  isOpen = false,
  selectActiveItem,
  filterValue,
}) => (
    <ClickAwayListener onClickAway={closeComponentDetailsAction}>
      <MenuList className={classes.toolBar}>
        <ToolBarItems
          isOpen={isOpen}
          filterValue={filterValue}
          classes={classes}
          loadComponentDetailsAction = {loadComponentDetailsAction}
        />
      < div
        ref={(ref) => { portal = ref; }}
        className={classes.portalContainer}
      />
      { isOpen ? (
        < Portal
          className={classes.portal}
          container={portal}
        >
          < PortalItems
            selectActiveItem = {selectActiveItem}
            activeItem = {activeItem}
            items={items}
            classes={classes}
          />
        </Portal>
      ) : null }
      </MenuList>
    </ClickAwayListener>
);

ToolBar.propTypes = {
  classes: propTypes.object.isRequired,
  loadComponentDetailsAction: propTypes.func.isRequired,
  closeComponentDetailsAction: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
  isOpen: propTypes.bool.isRequired,
};

export default ToolBar;
