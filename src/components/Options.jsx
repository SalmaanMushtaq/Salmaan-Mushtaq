import Button from "../components/Button";
// eslint-disable-next-line react/prop-types
function Options({ options, isActive }) {
  return (
    <div className="mt-4 gap-4 flex flex-wrap justify-center md:justify-evenly bg-background rounded-full p-2">
      {options.map((option, index) => (
        <Button key={index} text={option} isActive={isActive} />
      ))}
    </div>
  );
}

export default Options;
