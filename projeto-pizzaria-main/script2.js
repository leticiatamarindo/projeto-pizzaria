const wrapperA = document.querySelector('.wrapperA') /* Scroll 2 */

let ispressed = false
let initialX = 0

wrapperA.addEventListener('mousedown', function (e) {
  ispressed = true
  initialX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapperA.addEventListener('mouseleave', function (e) {
  ispressed = false
})

window.addEventListener('mouseup', function (e) {
  ispressed = false
  wrapperA.style.cursor = 'grab'
})

wrapperA.addEventListener('mousemove', function (e) {
  if(!ispressed) {
    return
  }

  this.scrollLeft += initialX - e.clientX
})
