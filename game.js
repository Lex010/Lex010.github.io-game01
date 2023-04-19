const ench = document.getElementById('ench')
const name = document.getElementById('name')
const img = document.getElementById('weap_img')
const ch = document.getElementById('ch')














ench.onclick = function() {
ench.style.background = 'red'    
ench.textContent = 'Рестар'    
name.textContent = 'Все пропало'
ch.textContent = ''
img.style.backgroundImage = "url('sword/sw_broken.png')"
}