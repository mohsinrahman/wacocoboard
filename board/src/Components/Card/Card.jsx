import React from "react";
import { useDraggable } from '@dnd-kit/core';

export default function Card({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        background: "#DDDCEA"
       
      }
    : {background: "#E3E3E3"};

  return (
    <div
    ref={setNodeRef}
    {...listeners}
    {...attributes}
    className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
    style={style}
  >
    <h3 className="font-medium text-neutral-100">{task.title}</h3>
    <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
  </div>
  );
}
