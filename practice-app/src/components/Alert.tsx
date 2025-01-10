import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible fade show m-3">
        {children}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-dismiss="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
