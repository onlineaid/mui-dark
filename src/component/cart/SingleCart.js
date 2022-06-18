import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SingleCart() {
  return (
    <Box sx={{ flexGrow: 1, mt: '1rem'}}>
      <Grid container spacing={{xs: 1, md: 2}} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={3}>
          <Item sx={{ maxWidth: 345 }} >
              <img src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id493837244?k=20&m=493837244&s=612x612&w=0&h=nqX4zYwY1FioBqstjO5skXQhYmedCqIe1QWiWygVAFI=" class="img-control" alt="..." />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Item>
        </Grid>
        <Grid item xs={3}>
        <Item sx={{ maxWidth: 345 }} >
              <img src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id493837244?k=20&m=493837244&s=612x612&w=0&h=nqX4zYwY1FioBqstjO5skXQhYmedCqIe1QWiWygVAFI=" class="img-control" alt="..." />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ maxWidth: 345 }} >
              <img src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id493837244?k=20&m=493837244&s=612x612&w=0&h=nqX4zYwY1FioBqstjO5skXQhYmedCqIe1QWiWygVAFI=" class="img-control" alt="..." />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ maxWidth: 345 }} >
              <img src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id493837244?k=20&m=493837244&s=612x612&w=0&h=nqX4zYwY1FioBqstjO5skXQhYmedCqIe1QWiWygVAFI=" class="img-control" alt="..." />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SingleCart
