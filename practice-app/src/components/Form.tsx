import { FormEvent } from "react";
import { FormEventHandler } from "react";

function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // reset the form
    event.target.reset();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button>
        <span className="btn-disabled">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}
export default Form;
