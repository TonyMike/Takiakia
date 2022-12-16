import BlogPost from './BlogPost'

const BlogSection = () => {
  return (
    <div className='bg-lightPurple mt-10 px-20 py-10'>
      <h3 className='text-center text-3xl text-navyBlue'>Lastest Blog</h3>

      <div className='mt-6 flex'>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  )
}

export default BlogSection
