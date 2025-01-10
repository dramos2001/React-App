interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color + " mx-3"}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
