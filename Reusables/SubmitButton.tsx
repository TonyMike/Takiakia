const SubmitButton = ({ text }: { text: string }) => {
  return (
    <button
      type='button'
      className='bg-orange py-2 font-semibold text-white mt-3'
    >
      {text}
    </button>
  )
}

export default SubmitButton
