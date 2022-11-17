type HangmanDrawingProps={
  incorrectLetters:number
}

export default ({incorrectLetters}:HangmanDrawingProps) => {
  const HEAD = (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: "none",
        position: "absolute",
        border: "10px solid black",
        borderRadius: "100%",
        top: "40px",
        right: "-30px",
      }}
    ></div>
  );
  const BODY = (
    <div
      style={{
        height: "85px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "100px",
        right: "0",
      }}
    ></div>
  );
  const LEFT_ARM = (
    <div
      style={{
        height: "80px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "60px",
        right: "0",
        rotate: "-50deg",
        transformOrigin: "right bottom",
      }}
    ></div>
  );
  const RIGHT_ARM = (
    <div
      style={{
        height: "80px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "60px",
        right: "0",
        rotate: "50deg",
        transformOrigin: "left bottom",
      }}
    ></div>
  );
  const LEFT_LEG = (
    <div
      style={{
        height: "80px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "175px",
        right: "0",
        rotate: "-50deg",
        transformOrigin: "right top",
      }}
    ></div>
  );
  const RIGHT_LEG = (
    <div
      style={{
        height: "80px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "175px",
        right: "0",
        rotate: "50deg",
        transformOrigin: "left top",
      }}
    ></div>
  );
  const BODY_PARTS=[HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG]
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0,incorrectLetters)}
      <div
        style={{
          height: "40px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      ></div>

      <div
        style={{
          height: "10px",
          width: "150px",
          backgroundColor: "black",
          marginLeft: "95px",
        }}
      ></div>
      <div
        style={{
          height: "300px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "95px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "200px", backgroundColor: "black" }}
      ></div>
    </div>
  );
};
