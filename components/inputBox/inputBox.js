import { Fragment } from "react";

export default function InputBox(props) {
  const { onChange } = props;
  return (
    <input
      type="text"
      className="relative outline-none rounded py-4 px-3 w-full bg-blue-600 shadow text-base text-white placeholder-white focus:outline-none focus:shadow-outline"
      placeholder="Enter Planet Names... ( e.g. Mercury, Venus, Earth, Mars, Jupiter, Saturn )"
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
}
