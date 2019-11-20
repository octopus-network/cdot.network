const baseSize = 32
const setHtmlSize = () => {
  const scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
setHtmlSize()
window.onresize = function() {
  setHtmlSize()
}
