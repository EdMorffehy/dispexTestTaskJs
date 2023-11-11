import TreeViewItems from "../../../../components/TreeViewItems";
import { useGetHousesQuery } from "../../../../services";
import Houses from "../Houses";

const Streets = ({ expanded, nodeId, label, companyId, onSelect }) => {
  const { data, isSuccess } = useGetHousesQuery(+nodeId, { skip: !expanded.includes(String(nodeId)) });

  return (
    <TreeViewItems nodeId={String(nodeId)} label={label}>
      {!data && !isSuccess && <TreeViewItems nodeId='example' />}
      {data &&
        data.map(({ id, name }) => (
          <Houses
            key={id}
            expanded={expanded}
            nodeId={id}
            streetId={nodeId}
            houseId={id}
            companyId={companyId}
            label={name}
            onSelect={onSelect}
          />
        ))}
    </TreeViewItems>
  );
};

export default Streets;
