import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Button from "./Button";

export default function Ellipsis() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text">
          <EllipsisVerticalIcon className="w-4" />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem>
          <Button variant="text">Edit</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
