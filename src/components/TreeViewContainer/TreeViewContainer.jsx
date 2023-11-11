import { TreeView } from "@mui/x-tree-view/TreeView";

import MinusSquare from "../../icons/MinusSquare";
import PlusSquare from "../../icons/PlusSquare";
import CloseSquare from "../../icons/CloseSquare";

const TreeViewContainer = ({ children, ...rest }) => (
  <TreeView
    defaultExpanded={["1"]}
    defaultCollapseIcon={<MinusSquare />}
    defaultExpandIcon={<PlusSquare />}
    defaultEndIcon={<CloseSquare />}
    sx={{ overflowX: "hidden" }}
    {...rest}
  >
    {children}
  </TreeView>
);

export default TreeViewContainer;
