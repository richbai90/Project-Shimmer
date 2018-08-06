import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';


export const blank = {
  component: 'div',
  className: 'root',
  children: [
    {
      component: Grid,
      container: true,
      children: [],
    },
  ],
};

export const withLeftMenu = {
  component: 'div',
  className: 'root',
  children: [
    {
      component: Drawer,
      variant: 'permanent',
      children: [
        {
          component: List,
          children: [
            {
              component: 'div',
              children: [
                {
                  component: ListItem,
                  button: true,
                  children: [
                    {
                      component: ListItemIcon,
                      children: {
                        component: InboxIcon,
                      },
                    },
                    {
                      component: ListItemText,
                      primary: 'Inbox',
                    },
                  ],
                },
                {
                  component: ListItem,
                  button: true,
                  children: [
                    {
                      component: ListItemIcon,
                      children: {
                        component: StarIcon,
                      },
                    },
                    {
                      component: ListItemText,
                      primary: 'Starred',
                    },
                  ],
                },
                {
                  component: ListItem,
                  button: true,
                  children: [
                    {
                      component: ListItemIcon,
                      children: {
                        component: SendIcon,
                      },
                    },
                    {
                      component: ListItemText,
                      primary: 'Send Mail',
                    },
                  ],
                },
                {
                  component: ListItem,
                  button: true,
                  children: [
                    {
                      component: ListItemIcon,
                      children: {
                        component: DraftsIcon,
                      },
                    },
                    {
                      component: ListItemText,
                      primary: 'Drafts',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
