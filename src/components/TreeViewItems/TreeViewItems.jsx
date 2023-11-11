import { forwardRef } from "react";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { alpha, styled } from "@mui/material/styles";

import TransitionComponent from "../TransitionComponent";

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
  }
}));

const TreeViewItems = forwardRef((props, ref) => (
  <StyledTreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
));

export default TreeViewItems;
