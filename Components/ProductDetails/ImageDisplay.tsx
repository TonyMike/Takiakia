import { Grid } from '@mui/material'

const ImageDisplay = () => {
  return (
    <Grid container className=''>
      <Grid
        item
        md={2.5}
        direction='row'
        className='overflow-y-scroll  h-[400px]'
      >
        <div className='w-full h-24 mb-1 bg-navyBlue'></div>
        <div className='w-full h-24 mb-1 bg-navyBlue'></div>
        <div className='w-full h-24 mb-1 bg-navyBlue'></div>
        <div className='w-full h-24 mb-1 bg-navyBlue'></div>
        {/* <div className='w-full h-24 mb-1 bg-navyBlue'></div> */}
        {/* <div className='w-full h-24 mb-1 bg-navyBlue'></div> */}
      </Grid>
      <Grid item md={9.5}>
        imgae
      </Grid>
    </Grid>
  )
}

export default ImageDisplay
