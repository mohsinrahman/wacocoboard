import React from 'react';
import { SortableContext,
    verticalListSortingStrategy,} from '@dnd-kit/sortable';
import Box from '@mui/material/Box';


import Item from './Item';
//import { height } from '@mui/system';

export default function SortableItem({items}) {
    console.log(items);
 

  
  return (
    <Box sx={{ background:"#f2f2f3", paddingTop:"50px",marginTop:"50px", marginBottom:"20px", paddingBottom:"20px" }}>
    <h2>Backlog</h2>
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
    { items.map((item) => (
    <Item key={item.id} item={item} id={item.id} />))}
    </SortableContext> 
    </Box>

  );
}
