import React, {useState} from 'react';
import {
  closestCenter,
  closestCorners,
  DndContext, 
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';
import Item from './Item';
function App() {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([{id:1,title: "a"}, {id:2,title: "b"}, {id:3,title: "c"}]);
  const getItemPos = id => items.findIndex(item => item.id === id)
  const handleDragEnd = event => {
    const {active, over} = event;
    
    if (active.id === over.id) return;
    
    
      setItems((items) => {
        const oldIndex = getItemPos(active.id);
        const newIndex = getItemPos(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });  
  }
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  console.log(items)
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
      <SortableItem  items ={items} />
    </DndContext>
  );
  
  function handleDragStart(event) {
    const {active} = event;
    console.log(event.active.id)
    
    setActiveId(active.id);
  }
  

}

export default App;