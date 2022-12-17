import { Grid } from '@mui/material'
import BlogPost from './BlogPost'

const BlogSection = () => {
  return (
    <div className='bg-lightPurple mt-10 px-[50px] sm:px-20 py-10'>
      <h3 className='text-center text-3xl text-navyBlue'>Lastest Blog</h3>

      {/* <div className='mt-6 flex flex-wrap space-x-3'> */}
      <Grid container columnGap={2.5} justifyContent='center' mt={4} rowGap={3}>
        <Grid item xs={12} sm={12} md={3.5}>
          <BlogPost />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5}>
          <BlogPost />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5}>
          <BlogPost />
        </Grid>
      </Grid>

      {/* </div> */}
    </div>
  )
}

export default BlogSection
