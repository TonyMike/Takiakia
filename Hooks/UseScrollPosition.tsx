import { useEffect, useState } from 'react'

const UseScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    function handleScroll () {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return {
    scrollPosition
  }
}

export default UseScrollPosition
