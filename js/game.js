const ench = document.getElementById('ench')
const name = document.getElementById('name')
const img = document.getElementById('weap_img')
const ch = document.getElementById('ch')

let percent = (Math.random() * 100).toFixed(2)

ench.onclick = function game() {
if(name.textContent === 'Меч +0' ) {
    if (percent <= 90) {   
name.textContent = 'Меч +1'
ch.textContent = '- успех 80% -'
img.style.backgroundImage = "url('sword/sw1.png')"
    } else {
        ench.style.background = 'red'    
        ench.textContent = 'Рестар'    
        name.textContent = 'Все пропало'
        ch.textContent = ''
        img.style.backgroundImage = "url('sword/sw_broken.png')"    
    }
    return
} 

if(name.textContent === 'Меч +1' ) {
    if (percent <= 80) {   
name.textContent = 'Меч +2'
ch.textContent = '- успех 75% -'
img.style.backgroundImage = "url('sword/sw2.png')"
    } else {
        ench.style.background = 'red'    
        ench.textContent = 'Рестар'    
        name.textContent = 'Все пропало'
        ch.textContent = ''
        img.style.backgroundImage = "url('sword/sw_broken.png')"    
    }
    return
} 

}













/*ench.onclick = function() {
ench.style.background = 'red'    
ench.textContent = 'Рестар'    
name.textContent = 'Все пропало'
ch.textContent = ''
img.style.backgroundImage = "url('sword/sw_broken.png')"
}*/