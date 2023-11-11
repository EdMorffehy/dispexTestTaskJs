import { useGetApartmentsQuery } from "../../../../services";
import TreeViewItems from "../../../../components/TreeViewItems";

const Houses = ({ expanded, nodeId, label, houseId, streetId, companyId, onSelect }) => {
  const { data, isSuccess } = useGetApartmentsQuery(
    { houseId, streetId, companyId },
    { skip: !expanded.includes(String(nodeId)) }
  );

  const handleOnClick = addressId => () => {
    onSelect(String(addressId));
  };

  return (
    <TreeViewItems
      nodeId={String(nodeId)}
      label={`Дом ${label}`}
      sx={{
        "& > div:not(.MuiTreeItem-content)": {
          maxHeight: 250,
          overflow: "auto"
        }
      }}
    >
      {!data && !isSuccess && <TreeViewItems nodeId='example' />}
      {data &&
        data.map(({ flat, addressId }) => (
          <TreeViewItems
            key={addressId}
            nodeId={String(addressId)}
            label={`Квартира ${flat}`}
            onClick={handleOnClick(addressId)}
          />
        ))}
    </TreeViewItems>
  );
};

export default Houses;
