import React, {forwardRef} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CSS} from '@dnd-kit/utilities';
import {useSortable} from '@dnd-kit/sortable';




 const Item = forwardRef(({id, item}, ref) => {
    console.log( id)
    console.log(item)
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id});
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: "300px",
        marginLeft:"20px",
      };

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', }}
        >  •
        </Box>
      );

      const card = (
        <React.Fragment>
        
          <CardContent  sx={{ background:"#E4C1FF" }}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          
        </React.Fragment>
      );
      
      
  return (
    <Box sx={{ minWidth: 275 , margin:"10px"}} ref={setNodeRef}  {...attributes} {...listeners} style={style}>
    <Card variant="outlined"   >{id} This is the text{card}</Card>
  </Box>
  )
});

export default Item;




