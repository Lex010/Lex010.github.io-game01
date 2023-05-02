function gemFadeForQuick() {
   $( ".remove" ).each(function() {
      config.movingItems++;

      $(this).animate( {
            opacity: 0
         },
         {
            duration: 1,                   ////duration: 200 заменил на 1, при удаление через кнопку "обновление" был баг(200 давало не омментальное изчезновение удаляемого)
            complete: function() {
               $(this).remove();
               checkMoving();
            }
         }
      );
   });
}







buttonReStart.onclick = function refresh () {
   //document.querySelector( "#" + config.gemIdPrefix + "_" + "0" + "_" + "5" ).classList.add( "remove" );  удаляет указаный гем после сложения 3х гемов

   //document.querySelector("#" + config.gemIdPrefix + "_0_5").classList.add( "remove" );                //тоже самое по другому записаное
   //gemFade()                                                                                           //gemFade() убирает сразу после нажатия на обновить

  /**/ document.querySelector("#" + config.gemIdPrefix + "_0_0").classList.add( "remove" );  
   document.querySelector("#" + config.gemIdPrefix + "_0_1").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_0_2").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_0_3").classList.add( "remove" );     ////////выбираю каждый гем по штучно, позже надо заменить на нормальны способ
   document.querySelector("#" + config.gemIdPrefix + "_0_4").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_0_5").classList.add( "remove" ); 

   document.querySelector("#" + config.gemIdPrefix + "_1_0").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_1_1").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_1_2").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_1_3").classList.add( "remove" ); 
   document.querySelector("#" + config.gemIdPrefix + "_1_4").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_1_5").classList.add( "remove" ); 
   
   document.querySelector("#" + config.gemIdPrefix + "_2_0").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_2_1").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_2_2").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_2_3").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_2_4").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_2_5").classList.add( "remove" );

   document.querySelector("#" + config.gemIdPrefix + "_3_0").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_3_1").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_3_2").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_3_3").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_3_4").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_3_5").classList.add( "remove" );

   document.querySelector("#" + config.gemIdPrefix + "_4_0").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_4_1").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_4_2").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_4_3").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_4_4").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_4_5").classList.add( "remove" );

   document.querySelector("#" + config.gemIdPrefix + "_5_0").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_5_1").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_5_2").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_5_3").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_5_4").classList.add( "remove" );
   document.querySelector("#" + config.gemIdPrefix + "_5_5").classList.add( "remove" );
   //gemFade()     //удаляет выбраные гемы
   //initGame();  //перезапускает поле
   gemFadeForQuick()



   createContentPage();                             //<=
   createGrid();                                    //вместо initGame()
   config.gameState = config.gameStates[ 0 ];       //<=    
   
};


 buttonContinue.onclick = function() {    //ТРЕТЬЯ скрытая кнопка "продолжить"
   if(enemyName[0].textContent === 'Вепрь' || enemyName[0].textContent === 'Леший' || enemyName[0].textContent === 'Горыныч Змей') {
  healthBar.textContent = fixedHealthEnemy.textContent                                                                //значение количества жизни = базововому значению
  healthBar.style.background = 'linear-gradient(to right, green 100%, red 10%)'                                         //возвращается полностью зеленая полоска здоровья противника
  components.container.style.display = 'flex'                                               //гемы снова видны
  buttonContinue.style.display = 'none'                            //прячу кнопку которую только что нажали
  buttonReStart.style.display = 'inline'                           //появляется кнопка "обновить"

  rightChosenEnButt.style.opacity = 0;                           //скрываются кнопки выбора противника
	leftChosenEnButt.style.opacity = 0;                          //
   }
 }