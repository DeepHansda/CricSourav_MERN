import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({data,modalHandler}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="ad"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Link:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.ads_link}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="error" onClick={()=>modalHandler(data._id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
