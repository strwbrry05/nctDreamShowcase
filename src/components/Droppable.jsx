import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  width: "900px",
  height: "600px",
  background: "pink",
};

const Droppable = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {children}
    </div>
  );
};

export default Droppable;
