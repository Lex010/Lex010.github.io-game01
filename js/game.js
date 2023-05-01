const ench = document.getElementById('ench')
const name = document.getElementById('name')
const img = document.getElementById('weap_img')
const ch = document.getElementById('ch')

const woodMinus = document.getElementsByClassName('wood-1')
const ironMinus = document.getElementsByClassName('iron-1')    /* классы для отображения отнимания ресурсов на панель(КРАСНЫЕ всплывающие цифры) */
const goldMinus = document.getElementsByClassName('gold-1')

const woodPlus = document.getElementsByClassName('wood_plus')
const ironPlus = document.getElementsByClassName('iron_plus')  /* классы для отображения добавления ресурсов на панель(ЗЕЛЕНЫЕ всплывающие цифры) */
const goldPlus = document.getElementsByClassName('gold_plus')

const resourcesCount = document.getElementsByClassName('count_rs')  /*resourcesCount[0] --- цифры ДЕРЕВА на панели в верху,
                                                                     resourcesCount[1] --- цифры ЖЕЛЕЗА на панели в верху,
                                                                     resourcesCount[2] --- цифры ЗОЛОТА  на панели в верху*/
const bgResIcon = document.getElementsByClassName('for_sr_im')   
const bgGoldIcon = document.getElementsByClassName('for_sr_im_gold')         //фон ресурсов                                                         
//////////////////////////
 const goltButt = document.getElementById('ench_red')
 const txBtn = document.getElementsByClassName('ench_red_tx')
                                                                     
 //
 const buttonStart = document.getElementById('button_start') // Кнопка старта "3 в ряд"
 const buttonReStart = document.getElementById('button_restart')   //Кнопка рестарта
 const buttonContinue = document.getElementById('button_continue') /* КНОПКА ПРОДОЛЖИТЬ*/
 //
 const healthBar = document.getElementById('health_bar') // Количество жизни противника
 const fixedHealthEnemy = document.getElementById('hundred_percent_helth')// фиксированое количество жихни противника для расчета процентов
 //
const progressEnchantBar = document.getElementById('progres_bar')                // полоска показывающая процесс улучшения меча
const notLuckTxt = document.getElementById('not_luck')                          //текст оповещения о неудачном улучшении
const itsLuckTxt = document.getElementById('its_luck')                            //текст оповещения об УСПЕШНОМ улучшении
                             /////////!!!!!!!!!!!//////////
                             //////////////////////////////////
///////////////////            ВСЕ ПЕРЕМЕННЫЕ ХРАНЯТСЯ ТУТ....  /////////////////////////////////////
                            ///////////////////////////
                         ////////////////////////////
                                                                     


ench.onclick =  gameTimeOut;                                                                         //<=
function gameTimeOut () {                                                                           // тут сделана задержка при нажатии на кнопку улучшения
     game();                                                                                       //
    ench.disabled = true;                                                                         //
    goltButt.disabled = true;                                                                    //
    function disFall () {                                                                       //
        goltButt.disabled = false;                                                             //
        ench.disabled = false;                                                                //
    };                                                                                       //
    setTimeout(disFall,900);                                                                //
};                                                                                         //<=
 function game () {
    let percent = (Math.random() * 100).toFixed(2)
    //
   if(resourcesCount[0].textContent > 0 && resourcesCount[1].textContent > 0) {
    //
    progressEnchantBar.style.display = 'flex'                                        //<=
    progressEnchantBar.addEventListener("animationend", enchAnim, false);           //
    function enchAnim() {                                                          //при нажатии кнопки улучшения появляется анимированая полоска
        progressEnchantBar.style.display = 'none'                                 //
    }                                                                            //<=
    //
    woodMinus[0].classList.add('wood-1_clik');  ironMinus[0].classList.add('iron-1_clik');//при клике отображает анимацию минусования ресурсов
///////////////////////////////////////
woodMinus[0].addEventListener("animationend", end02, false);
function end02(){                                                 //удаляет анимацию по ее завершению
    woodMinus[0].classList.remove('wood-1_clik');
};
ironMinus[0].addEventListener("animationend", end03, false);
function end03(){                                                 //удаляет анимацию по ее завершению
    ironMinus[0].classList.remove('iron-1_clik');
};
///////////////////////////////////////
if(name.textContent === 'Меч +0' ) {
    if (percent <= 90) {   
name.textContent = 'Меч +1'
ch.textContent = '80%'
img.style.backgroundImage = "url('sword/sw1.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
  function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
} 
   } else {
    //alert('Не хватает дерева или железа!')  
    resourcesCount[0].style.color = 'red'                 //краснеют цифры если не достаточно ресурсов
    function wNum() {resourcesCount[0].style.color = 'bisque'}
    setTimeout(wNum,1000)
    //
    resourcesCount[1].style.color = 'red'                 //краснеют цифры если не достаточно ресурсов
    function iNum() {resourcesCount[1].style.color = 'bisque'}
    setTimeout(iNum,1000)
                                                        ////// фон иконок ресурсов краснеет
    bgResIcon[0].style.backgroundColor = 'red'
    function wBg() {bgResIcon[0].style.backgroundColor = 'bisque'}   
    setTimeout(wBg,1000)                                                 
///////
    bgResIcon[1].style.backgroundColor = 'red'
    function iBg() {bgResIcon[1].style.backgroundColor = 'bisque'}   
    setTimeout(iBg,1000)   
    return
   }
/////////////////////   
if(name.textContent === 'Меч +1' ) {
    if (percent <= 80) {   
name.textContent = 'Меч +2'
ch.textContent = '75%'
img.style.backgroundImage = "url('sword/sw2.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
} 
if(name.textContent === 'Меч +2' ) {
    if (percent <= 75) {   
name.textContent = 'Меч +3'
ch.textContent = '70%'
img.style.backgroundImage = "url('sword/sw3.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +3' ) {
    if (percent <= 70) {   
name.textContent = 'Меч +4'
ch.textContent = '65%'
img.style.backgroundImage = "url('sword/sw4.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}  
if(name.textContent === 'Меч +4' ) {
    if (percent <= 65) {   
name.textContent = 'Меч +5'
ch.textContent = '60%'
img.style.backgroundImage = "url('sword/sw5.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
} 
if(name.textContent === 'Меч +5' ) {
    if (percent <= 60) {   
name.textContent = 'Меч +6'
ch.textContent = '55%'
img.style.backgroundImage = "url('sword/sw6.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}   
if(name.textContent === 'Меч +6' ) {
    if (percent <= 55) {   
name.textContent = 'Меч +7'
ch.textContent = '50%'
img.style.backgroundImage = "url('sword/sw7.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +7' ) {
    if (percent <= 50) {   
name.textContent = 'Меч +8'
ch.textContent = '47%'
img.style.backgroundImage = "url('sword/sw8.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}   
if(name.textContent === 'Меч +8' ) {
    if (percent <= 47) {   
name.textContent = 'Меч +9'
ch.textContent = '44%'
img.style.backgroundImage = "url('sword/sw9.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +9' ) {
    if (percent <= 44) {   
name.textContent = 'Меч +10'
ch.textContent = '41%'
img.style.backgroundImage = "url('sword/sw10.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +10' ) {
    if (percent <= 41) {   
name.textContent = 'Меч +11'
ch.textContent = '38%'
img.style.backgroundImage = "url('sword/sw11.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +11' ) {
    if (percent <= 38) {   
name.textContent = 'Меч +12'
ch.textContent = '35%'
img.style.backgroundImage = "url('sword/sw12.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +12' ) {
    if (percent <= 35) {   
name.textContent = 'Меч +13'
ch.textContent = '32%'
img.style.backgroundImage = "url('sword/sw13.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +13' ) {
    if (percent <= 32) {   
name.textContent = 'Меч +14'
ch.textContent = '29%'
img.style.backgroundImage = "url('sword/sw14.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +14' ) {
    if (percent <= 29) {   
name.textContent = 'Меч +15'
ch.textContent = '26%'
img.style.backgroundImage = "url('sword/sw15.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +15' ) {
    if (percent <= 26) {   
name.textContent = 'Меч +16'
ch.textContent = '23%'
img.style.backgroundImage = "url('sword/sw16.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
    }
    return
}
if(name.textContent === 'Меч +16' ) {
    if (percent <= 23) {   
name.textContent = 'Меч +17'
ch.textContent = 'ЗАВЕРШЕНО'
img.style.backgroundImage = "url('sword/sw17.png')"

resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//


txBtn[0].textContent = 'МАКС.'
goltButt.style.opacity = '.5'
ench.style.opacity = '.5'
    } else {
        resourcesCount[0].textContent = Number(resourcesCount[0].textContent) - 1;
        resourcesCount[1].textContent = Number(resourcesCount[1].textContent) - 1;

        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,1500)                                                     //

         function dontLackSimple () {
        goltButt.style.display = 'none'     
        ench.style.display = 'none'   
        name.textContent = 'Жми "Перековать"'
        img.style.backgroundImage = "url('sword/sw_broken.png')"   
        restart.style.display = 'flex' 
        };
        setTimeout(dontLackSimple, 600);
    
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