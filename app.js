let mark = document.querySelector('.header__mark'),
  cards = document.querySelectorAll('.card'),
  icons = document.querySelectorAll('.card__icon'),
  countElement = document.querySelector('.header__count'),
  countNumber = +countElement.innerHTML


mark.addEventListener('click', () => {
  
  cards.forEach(card => card.classList.remove('card_unread'))
  icons.forEach(icon => icon.remove())

  countNumber = 0
  updateNotificationsCount()
  mark.remove()

})

cards.forEach((card, i) => {

  card.addEventListener('click', () => {
    
    if (!card.classList.contains('card_unread'))
      return
    
    card.classList.remove('card_unread')
    icons[i].remove()
    countNumber--
    updateNotificationsCount()
  })

})

function updateNotificationsCount() {

  if (countNumber == 0) {
    countElement.remove()
    mark.remove()
    return
  }

  countElement.innerHTML = countNumber

}