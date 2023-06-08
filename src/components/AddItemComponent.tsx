// type Props = {
//   message: string;
//   setMessage: React.Dispatch<React.SetStateAction<string>>;
//   onClick: () => unknown;
// };

// export default function AddItemComponent({
//   message,
//   setMessage,
//   onClick,
// }: Props) {
//   function inputBox(e: React.ChangeEvent<HTMLInputElement>) {
//     setMessage(e.target.value);
//   }
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => inputBox(e)}
//         ></input>

//         <button type="button" onClick={() => onClick()}>
//           Add Item
//         </button>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

type Props = {
  onClick: (message: string) => unknown;
};

export default function AddItemComponent({ onClick }: Props) {
  const [message, setMessage] = useState<string>("");
  function inputBox(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <input type="text" value={message} onChange={(e) => inputBox(e)}></input>
      <button
        type="button"
        onClick={() => {
          onClick(message);
          setMessage("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}
