export default () => {
  const word = "test";
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      {word.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              textTransform: "uppercase",
              fontFamily: "monospace",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            <span style={{borderBottom:"5px solid black"}}> {letter}</span>
          </span>
        );
      })}
    </div>
  );
};
