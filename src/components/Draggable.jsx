import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = ({ id, content, styles }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      {...listeners}
      {...attributes}
      className="hidden sm:block cursor-pointer 
      
      "
    >
      <img
        src={content}
        alt={id}
        className="sm:w-[125px] md:min-w-[150px] lg:min-w-[160px] xl:w-[175px] 
        rounded-[10px] shadow-[4px_5px_2px_rgba(0,0,0,0.65)]"
      />
    </button>
  );
};

export default Draggable;
