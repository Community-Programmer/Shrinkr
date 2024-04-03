"use client";
import { Blocks } from "react-loader-spinner";

const Loading = () => {

  const style: React.CSSProperties = {
    position : "absolute",
    display : "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: "99999",
    top: '0'
  
    
  }

  return (
    <div style={style}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loading;
