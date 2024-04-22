
const loadingOverlay = document.createElement('div')

loadingOverlay.style.width = '100vw'
loadingOverlay.style.height = '100vh'
loadingOverlay.style.position = 'absolute'
loadingOverlay.style.zIndex = 10;
loadingOverlay.style.top = 0;
loadingOverlay.style.backgroundColor = 'black'

document.body.appendChild(loadingOverlay)
