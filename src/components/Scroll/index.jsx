import {animateScroll} from 'react-scroll'

const options = {
  duration: 100,
  smooth: true,
  spy: true,
}

export const scrollToAnchor = (anchorId) => {
  if (!anchorId) return

  const anchorElement = document.getElementById(anchorId)

  if (anchorElement) {
    let offset = 0

    if (window.innerWidth >= 1280) {
      offset = -138
    } else if (window.innerWidth >= 765) {
      offset = -80
    } else {
      if (anchorId === 'volunteering_areas' || anchorId === 'our_volunteers') {
        offset = -100
      }
    }

    animateScroll.scrollTo(anchorElement.offsetTop + offset, options)
  }
}

export const scrollToTop = () => {
  animateScroll.scrollToTop(options)
}
