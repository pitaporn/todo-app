type Props<T> = {
  item: T;
  onChange: (item: T) => unknown;
};

export default function ListItem<
  T extends { message?: string; done?: boolean }
>({ item, onChange }: Props<T>) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onChange(item)}
        ></input>
        {item.message}
      </label>
    </>
  );
}
