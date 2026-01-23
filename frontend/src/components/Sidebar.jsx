import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar({ open }) {
  return (
    <Drawer variant="persistent" open={open}>
      <List>
        <ListItem button>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
}
