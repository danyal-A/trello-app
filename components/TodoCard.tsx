"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todo: Todo;
  index: number;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
  id,
  todo,
  index,
  innerRef,
  dragHandleProps,
  draggableProps,
}: Props) => {
  return (
    <div
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      className="bg-white rounded-md space-x-2 drop-shadow-md"
    >
      <div className="flex justify-between p-5 items-center">
        <p> {todo.title}</p>
        <button className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
