const burgerButton = document.querySelector('.header__menu-button')
const nav = document.querySelector('.nav')

burgerButton.addEventListener('click', function () {
  this.classList.toggle('header__menu-button_closed')
  nav.classList.toggle('nav_visible')
  document.body.classList.toggle('block-scroll')
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  effect: "fade",
  autoplay: {
    delay: 3000,
  },
});

const howStepArr = document.querySelectorAll('.how__step')
const howItem = document.querySelector('.how__item')
const howSubtitleArr = document.querySelectorAll('.how__subtitle')
const howTextArr = document.querySelectorAll('.how__text')

const clearActive = () => {
  howStepArr.forEach(step => {
    step.classList.remove('how__step_active')
  })
  howSubtitleArr.forEach(subtitle => {
    subtitle.classList.add('hidden')
  })
  howTextArr.forEach(text => {
    text.classList.add('hidden')
  })
  howItem.classList.forEach(className => {
    if (className !== 'how__item') {
      howItem.classList.remove(className)
    }
  })
}

howStepArr.forEach(step => {
  step.addEventListener('click',()=> {
    clearActive()
    const targetData = step.dataset.step
    howStepArr.forEach(step => {
      if(step.dataset.step === targetData) {
        step.classList.add('how__step_active')
      }
    })
    howItem.classList.add(`how__item_${targetData}`)
    howSubtitleArr.forEach(subtitle => {
      if(subtitle.dataset.step === targetData) {
        subtitle.classList.remove('hidden')
      }
    })
    howTextArr.forEach(text => {
      if(text.dataset.step === targetData) {
        text.classList.remove('hidden')
      }
    })
  })
})

howStepArr[0].click()

$(".faq__list").accordion({
  heightStyle: "content",
  collapsible: true,
});


const showSearch = document.querySelector('.header__search_main')
const closeSearch = document.querySelector('.cross')
const searchButton = document.querySelector('.search-box__search')
const searchInput = document.querySelector('.search-box__input')
const searchBlock = document.querySelector('.search-box')
const searchWrapper = document.querySelector('.header__search-wrapper')
showSearch.addEventListener('click', ()=> {
  searchBlock.classList.remove("search-box_hidden")
  searchWrapper.classList.remove('no-overflow')
})
closeSearch.addEventListener('click', ()=> {
  searchBlock.classList.add("search-box_hidden")
  searchWrapper.classList.add('no-overflow')
})
searchButton.addEventListener('click', ()=> {
  alert(searchInput.value)
})
