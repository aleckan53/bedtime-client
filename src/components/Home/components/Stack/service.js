import React from 'react'

export default {
  handleNext(id) {
    const stack = document.getElementById(id)
    const total = stack.childElementCount
    const children = stack.querySelectorAll('li')
    // get focused card index
    const focusedIdx = [...children].findIndex(n => n.classList.contains('focus'))
    // move focused card to the left
    children[focusedIdx].classList.add('left')
    // get card index TO focus 
    const idxToFocus = (focusedIdx === total -1) ? 0 : focusedIdx + 1 
    
    children.forEach(n => n.classList.remove('focus'))
    children[idxToFocus].classList = ('card focus')
    // 
    const nextOrder = [...[...children].slice(idxToFocus + 1), ...[...children].slice(0, idxToFocus)]
    nextOrder.forEach((n,i) => (
      !i 
        ? n.classList = ('card second')
      :i === 1 
        ? n.classList = ('card third')
        : n.classList = ('card left')
    ))

    const dots = document.getElementById(id + '-dots')
    const totalDots = dots.childElementCount
    const childrenDots = dots.querySelectorAll('span')
    const focusedDotIdx = [...childrenDots].findIndex(n => n.classList.contains('on'))
    childrenDots[focusedDotIdx].classList.remove('on')
    const idToOn = (focusedDotIdx === totalDots-1) ? 0 : focusedDotIdx + 1
    childrenDots[idToOn].classList.add('on')
  },
  handlePrev(id) {
    const stack = document.getElementById(id)
    const total = stack.childElementCount
    const children = stack.querySelectorAll('li')
    // get focused card index
    const focusedIdx = [...children].findIndex(n => n.classList.contains('focus'))
    // move focused card to the right
    children[focusedIdx].classList.add('second')
    // get card index TO focus 
    const idxToFocus = (!focusedIdx) ? total-1 : focusedIdx - 1 
    
    children.forEach(n => n.classList.remove('focus'))
    children[idxToFocus].classList = ('card focus')
    // 
    const nextOrder = [...[...children].slice(idxToFocus + 1), ...[...children].slice(0, idxToFocus)]
    nextOrder.forEach((n,i) => (
      !i 
        ? n.classList = ('card second')
      :i === 1 
        ? n.classList = ('card third')
        : n.classList = ('card left')
    ))
    const dots = document.getElementById(id + '-dots')
    const totalDots = dots.childElementCount
    const childrenDots = dots.querySelectorAll('span')
    const focusedDotIdx = [...childrenDots].findIndex(n => n.classList.contains('on'))
    childrenDots[focusedDotIdx].classList.remove('on')
    const idToOn = (!focusedDotIdx) ? totalDots - 1 : focusedDotIdx - 1
    childrenDots[idToOn].classList.add('on')
  },
  mapStories(stories, Component) {

    return stories.map((story, idx) => (
      !idx 
        ? <Component key={idx} className='focus' {...story}/> 
      :idx === 1   
        ? <Component key={idx} className='second' {...story}/> 
      :idx === 2 
        ? <Component key={idx} className='third' {...story}/> 
        : <Component key={idx} className='left' {...story}/>
    ))
  },
  mapIndicators(count, title) {
    return new Array(count).fill().map((n,i) => {
      if (!i) {
        return <span className='dot on' id={`${title}-${i}`} key={i}/>
      }

      return <span className='dot' id={`${title}-${i}`} key={i}/>
    })
  }
}