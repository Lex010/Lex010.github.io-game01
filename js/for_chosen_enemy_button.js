rightChosenEnButt.onclick = function() {
   if (enemyName[0].textContent === 'Противник') {
    enemyName[0].textContent = 'Вепрь'
    enemyImgBack[0].style.opacity = '0'
    enemyImg[0].style.opacity = '1'
    return
   }
   if (enemyName[0].textContent === 'Вепрь') {
    enemyName[0].textContent = 'Леший'
    enemyImg[0].style.opacity = '0'
    enemyImgSecond[0].style.opacity = '1'
    return
   }
   if (enemyName[0].textContent === 'Леший') {
    enemyName[0].textContent = 'Горыныч Змей'
    enemyImgSecond[0].style.opacity = '0'
    enemyImgThree[0].style.opacity = '1'
    return
   }
   if (enemyName[0].textContent === 'Горыныч Змей') {
    enemyName[0].textContent = 'Вепрь'
    enemyImgThree[0].style.opacity = '0'
    enemyImg[0].style.opacity = '1'
    return
   }
   
  
} 
