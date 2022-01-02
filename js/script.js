(function () {
  function activeColor() {
    let color_array = document.getElementsByClassName('color')
    let i = 0
    for (i = 0; i < color_array.length; i++) {
      if (color_array[i].classList.value.includes('active') && !this.classList.value.includes('active')) {
        color_array[i].classList.remove('active')
        if (this.classList.value.includes('blue')) {
          document.getElementsByClassName('shoe')[0].src = 'img/jordan-blue.png'
        } else if (this.classList.value.includes('black')) {
          document.getElementsByClassName('shoe')[0].src = 'img/jordan-black.png'
        } else if (this.classList.value.includes('gray')) {
          document.getElementsByClassName('shoe')[0].src = 'img/jordan-gray.png'
        }
        this.classList.add('active')
      }          
    }
  }

  function changeHeart() {
    if (this.className =='far fa-heart') {
      this.className = 'fas fa-heart'
    } else {
      this.className = 'far fa-heart'
    }
  }

  function eventsListeners() {
    let color_array = document.getElementsByClassName('color')
    let i = 0
    for (i = 0; i < color_array.length; i++) {
      color_array[i].addEventListener('click', activeColor, false)
    }
    document.getElementById('heart-icon').addEventListener('click', changeHeart, false)
  }

  let interval = setInterval(function () {
    if (document.contains(document.getElementsByTagName('body')[0])) {
      eventsListeners()
      clearInterval(interval)
    }
  }, 10)

  interval
})();