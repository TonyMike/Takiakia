import TextArea from "../../Reusables/TextArea"

const AboutProduct = () => {
  return (
    <div>
      <h1 className='text-xl text-center md:hidden font-bold mb-5 '>
        Step 2: About Product
      </h1>
      <div className="w-full">
       <TextArea placeholder="Description*" />
      </div>

    </div>
  )
}

export default AboutProduct
