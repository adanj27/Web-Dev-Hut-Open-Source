import { useState } from 'react'

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const scrollOffset = 200

  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  document.addEventListener('scroll', () => {
    const scrollToTop = document.documentElement.scrollTop
    scrollToTop > scrollOffset ? setVisible(true) : setVisible(false)
  })

  return (
    <button
      className={`${
        !visible ? 'opacity-0' : ''
      } border-none flex cursor-pointer fixed bottom-[1rem] right-[1rem] z-30 bg-white rounded-3xl p-2 text-[#2738a4] shadow-md transition transition-duration-300 motion-reduce:transition-none`}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        className="stroke-current fill-none w-[24px] stroke-width-[3px]"
      >
        <path d="m4 16 8-8 8 8"></path>
      </svg>
    </button>
  )
}
