import { useState } from 'react'
import './style.css'

export const ScrollButton = () => {
	const [visible, setVisible] = useState(false)

	const handleClick = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	document.addEventListener("scroll", () => {
		const scrollToTop = document.documentElement.scrollTop
		scrollToTop > 200 ? setVisible(true) : setVisible(false)
	})

	return (
		<button className={visible ? `toTop` : ""} onClick={handleClick}>
			<svg viewBox="0 0 24 24">
				<path d="m4 16 8-8 8 8"></path>
			</svg>
		</button>

	)
}

export default ScrollButton