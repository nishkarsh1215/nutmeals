import React, { useEffect } from 'react'

const ScrollComponent = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // You can access the scroll data from the event object
      const { deltaX, deltaY } = event

      // You can perform actions based on scroll direction or values
      if (deltaY > 0) {
        console.log('Scrolled down')
        // Perform actions for scrolling down
      } else if (deltaY < 0) {
        console.log('Scrolled up')
        // Perform actions for scrolling up
      }
    }

    // Attach the event listener when the component mounts
    window.addEventListener('wheel', handleScroll)

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {/* Your component content goes here */}
      <p>Scroll me!</p>
    </div>
  )
}

export default ScrollComponent
