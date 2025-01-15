import React from 'react';
import { SortableContext,
    verticalListSortingStrategy,} from '@dnd-kit/sortable';
import Box from '@mui/material/Box';


import Item from './Item';
//import { height } from '@mui/system';

export default function SortableItem({items}) {
    console.log(items);
 

  
  return (
    <Box sx={{ background:"#1e1e1e",width:"100%", paddingTop:"20px",marginTop:"20px", marginBottom:"20px", paddingBottom:"20px" }}>
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
   { items.map((item) => (
   <Item key={item.id} item={item} id={item.id} />))}
    </SortableContext> 
    </Box>

  );
}

{/*     <Item ref={setNodeRef} style={style} {...attributes} {...listeners} id = {item.id} props={item} />
 */} 