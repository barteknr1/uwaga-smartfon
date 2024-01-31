import {useEffect, useRef} from 'react'
import {useLocation} from 'react-router-dom'

function ScrollToAnchor() {
  const location = useLocation()
  const lastHash = useRef('')

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1)
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current)

        if (element) {
          const offset = element.offsetTop - element.offsetHeight * 0.1 // Adjusting position by 10%
          window.scrollTo({top: offset, behavior: 'smooth'})
        }

        lastHash.current = ''
      }, 100)
    }
  }, [location])

  return null
}

export default ScrollToAnchor
