import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {
  return (
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column' >
        {(provider) => (
            <div>
                // * rendering all the columns  
            </div>
        ) }
        </Droppable>

    </DragDropContext>
  )
}

export default Board