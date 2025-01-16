import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Header from './Components/Header/Header';
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
  const [items, setItems] = useState([
    {id:1,title: "Idiation & Design", email: "test@test.com",
    name: "test@test.com",
    given_name: "Hello",
    family_name: "Test",
    nickname: "test"}, 
    {id:2,title: "Development",email: "test@test.com",
    name: "test@test.com",
    given_name: "Hello",
    family_name: "Test",
    nickname: "test"}, 
    {id:3,title: "Mantinance",email: "test@test.com",
    name: "test@test.com",
    given_name: "Hello",
    family_name: "Test",
    nickname: "test"}]);
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
    <>
     <Header/> 
     <Typography variant="h1" component="h2">
  h1. Heading
</Typography>
  <DndContext 
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}>
      <SortableItem  items ={items} />
    </DndContext>
    </>
  );
  
  function handleDragStart(event) {
    const {active} = event;
    console.log(event.active.id)
    
    setActiveId(active.id);
  }
  

}

export default App;