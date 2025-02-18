function input({ type = "text", label, id, state, setState }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder="name@example.com"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default input;
