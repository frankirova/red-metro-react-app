import "../components/styles/H2.css";
export const H2 = ({ children }) => {
  return (
    <div className="title-container my-4">
      <h2 className="title">{children}</h2>
    </div>
  );
};
