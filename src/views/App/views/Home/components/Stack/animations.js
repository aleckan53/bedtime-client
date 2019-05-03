export default {
  NextCard(stackId, items, setItems, disableBtn) {
    disableBtn(true)
    const firstCard = document.getElementById(`${stackId}-card-${0}`).style
    const secondCard = document.getElementById(`${stackId}-card-${1}`).style
    const thirdCard = document.getElementById(`${stackId}-card-${2}`).style
    const lastCard = document.getElementById(`${stackId}-card-${items.length-1}`).style
    
    // #1 Movement
    lastCard.zIndex = '1'
    lastCard.transform = 'all .3s ease'
    lastCard.left = '30%'
    lastCard.transform = 'scale(.8,.8)'

    firstCard.transition ='all .3s ease'
    firstCard.left = '-100%'
    firstCard.zIndex = '5'
    firstCard.opacity = '0'
    
    secondCard.transition ='all .3s ease'
    secondCard.left = '0'
    secondCard.transform = 'scale(1,1)'
    secondCard.zIndex = '4'

    thirdCard.transition ='all .3s ease'
    thirdCard.left = '15%'
    thirdCard.transform = 'scale(.9,.9)'
    thirdCard.zIndex = '3'

    setTimeout(() => {

      disableBtn(false)
      // #3 Static
      lastCard.transition = '0'
      lastCard.zIndex = '5'
      lastCard.transform = 'scale(1,1)'
      lastCard.left = '-100%'

      firstCard.transition ='none 0s ease'
      firstCard.left = '0'
      firstCard.transform = 'scale(1,1)'
      firstCard.zIndex = '4'
      firstCard.opacity = '1'

      secondCard.transition ='none 0s ease'
      secondCard.left = '15%'
      secondCard.transform = 'scale(.9,.9)'
      secondCard.zIndex = '3'

      thirdCard.transition ='none 0s ease'
      thirdCard.left = '30%'
      thirdCard.transform = 'scale(.8,.8)'
      thirdCard.zIndex = '2'

      const firstItem = items[0]
      const newState = items.slice(1)      
      setItems([...newState, firstItem])

    }, 300)
  },
  PrevCard(stackId, items, setItems, diableBtn) {
    diableBtn(true)

    const firstCard = document.getElementById(`${stackId}-card-${0}`).style
    const secondCard = document.getElementById(`${stackId}-card-${1}`).style
    const thirdCard = document.getElementById(`${stackId}-card-${2}`).style
    const lastCard = document.getElementById(`${stackId}-card-${items.length-1}`).style
   
    // #1 Movement
    lastCard.transition = 'all .3s ease'
    lastCard.left = '0'
    lastCard.zIndex = '4'

    firstCard.transition ='all .3s ease'
    firstCard.left = '15%'
    firstCard.transform = 'scale(.9,.9)'
    firstCard.zIndex = '3'
    
    secondCard.transition ='all .3s ease'
    secondCard.left = '30%'
    secondCard.transform = 'scale(.8,.8)'
    secondCard.zIndex = '2'

    thirdCard.transition = 'all .3s ease'
    thirdCard.zIndex = '1'
    thirdCard.opacity = '0'

    setTimeout(() => {
      diableBtn(false)
      // #2 Static
      lastCard.transition ='none 0s ease'
      lastCard.left = '-100%'
      lastCard.zIndex = '5'

      firstCard.transition = 'none 0s ease'
      firstCard.left = '0'
      firstCard.transform = 'scale(1,1)'
      firstCard.zIndex = '4'

      secondCard.transition = 'none 0s ease'
      secondCard.left = '15%'
      secondCard.transform = 'scale(.9,.9)'
      secondCard.zIndex = '3'

      thirdCard.transition = 'none 0s ease'
      thirdCard.zIndex = '2'
      thirdCard.opacity = '1'

      const lastItem = items[items.length-1]
      const newState = items.slice(0, items.length-1)
      setItems([lastItem, ...newState])

    }, 300)
  }
}