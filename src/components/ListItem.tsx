import TodoInterfaces from "../interfaces/ToDoInterfaces";

type Props = {
  item: TodoInterfaces;
  onChange: (item: TodoInterfaces) => unknown;
};

export default function ListItem({ item, onChange }: Props) {
  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onChange(item)}
      ></input>
      {item.message}
    </label>
  );
}
