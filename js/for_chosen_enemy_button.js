rightChosenEnButt.onclick = function() {                         //<=  правая кнопка  =>
   if (enemyName[0].textContent === 'Противник') {
    enemyName[0].textContent = 'Вепрь'                    //появляется имя противника
    healthBar.textContent = 300                          //текущий уровень здоровья противника
    fixedHealthEnemy.textContent = 300                  //максимальный уровень здоровья(скрытый)

    healthBarBeforStart.style.opacity = '0'             //убирает старую полоску здоровья
    healthBar.style.opacity = '1'                      //появляется другая полоска здоровья

    enemyImgBack[0].style.opacity = '0'                //убирает старое изображеие противника
    enemyImg[0].style.opacity = '1'                   //появляется новое изображение противника
    return
   }
   if (enemyName[0].textContent === 'Вепрь') {
    enemyName[0].textContent = 'Леший'
    healthBar.textContent = 999                          //текущий уровень здоровья противника
    fixedHealthEnemy.textContent = 999                  //максимальный уровень здоровья(скрытый)


    enemyImg[0].style.opacity = '0'
    enemyImgSecond[0].style.opacity = '1'
    return
   }
   if (enemyName[0].textContent === 'Леший') {
    enemyName[0].textContent = 'Горыныч Змей'
    healthBar.textContent = 3000                          //текущий уровень здоровья противника
    fixedHealthEnemy.textContent = 3000                  //максимальный уровень здоровья(скрытый)

    enemyImgSecond[0].style.opacity = '0'
    enemyImgThree[0].style.opacity = '1'
    return
   }
   if (enemyName[0].textContent === 'Горыныч Змей') {
    enemyName[0].textContent = 'Вепрь'
    healthBar.textContent = 300                          //текущий уровень здоровья противника
    fixedHealthEnemy.textContent = 300                  //максимальный уровень здоровья(скрытый)

    enemyImgThree[0].style.opacity = '0'
    enemyImg[0].style.opacity = '1'
    return
   } 
} 
///////////////////////////////////////////////////////