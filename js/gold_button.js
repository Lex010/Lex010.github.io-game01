
goltButt.onclick =  gameTimeOutGold;                                                                         //<=
function gameTimeOutGold () {                                                                           // тут сделана задержка при нажатии на кнопку улучшения
    gameGoldButton ();                                                                                       //
    ench.disabled = true;                                                                         //
    goltButt.disabled = true;                                                                    //
    function disFall () {                                                                       //
        goltButt.disabled = false;                                                             //
        ench.disabled = false;                                                                //
    };                                                                                       //
    setTimeout(disFall, 900);                                                               //
};                                                                                         //<=


function gameGoldButton () {
    let percent = (Math.random() * 100).toFixed(2)
    //
    if(resourcesCount[2].textContent > 0) {
        //
        progressEnchantBar.style.display = 'flex'                                        //<=
        progressEnchantBar.addEventListener("animationend", enchAnim, false);           //
        function enchAnim() {                                                          //при нажатии кнопки улучшения появляется анимированая полоска
            progressEnchantBar.style.display = 'none'                                 //
        }                                                                            //<=
        //
goldMinus[0].classList.add('gold-1_clik')//при клике отображает анимацию минусования ресурсов
///////////////////////////////////////
goldMinus[0].addEventListener("animationend", end, false);
function end(){                                                 //удаляет анимацию по ее завершению
    goldMinus[0].classList.remove('gold-1_clik');
}
///////////////////////////////////////
if(name.textContent === 'Меч +0' ) {
    if (percent <= 90) {   
name.textContent = 'Меч +1'
ch.textContent = '80%'
img.style.backgroundImage = "url('sword/sw1.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
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
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
       // alert('Не повезло. Но меч остался цел')
       function notLflex () {                                                         //                     
       notLuckTxt.style.display = 'flex'                                             //
       }                                                                            //
       setTimeout(notLflex,500)                                                    //
       function notL() {notLuckTxt.style.display = 'none'                         //
       }                                                                         // Текст сообщающий о неудачном улучшении
       setTimeout(notL,900)                                                     //
    }
    return
}
} else {
   // alert('Не хватает золота!')
   resourcesCount[2].style.color = 'red'                 //краснеют цифры если не достаточно ресурсов
    function gNum() {resourcesCount[2].style.color = 'bisque'}
    setTimeout(gNum,1000)
    //
    bgGoldIcon[0].style.background = 'red'
    function gBg() {bgGoldIcon[0].style.background = 'linear-gradient(rgb(147, 226, 171), orange)'}   
    setTimeout(gBg,1000) 
    return
}
////////////////
if(name.textContent === 'Меч +1' ) {
    if (percent <= 80) {   
name.textContent = 'Меч +2'
ch.textContent = '75%'
img.style.backgroundImage = "url('sword/sw2.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //                                                 
    }
    return
} 
if(name.textContent === 'Меч +2' ) {
    if (percent <= 75) {   
name.textContent = 'Меч +3'
ch.textContent = '70%'
img.style.backgroundImage = "url('sword/sw3.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    }
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    } 
    return
}
if(name.textContent === 'Меч +3' ) {
    if (percent <= 70) {   
name.textContent = 'Меч +4'
ch.textContent = '65%'
img.style.backgroundImage = "url('sword/sw4.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}  
if(name.textContent === 'Меч +4' ) {
    if (percent <= 65) {   
name.textContent = 'Меч +5'
ch.textContent = '60%'
img.style.backgroundImage = "url('sword/sw5.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    }
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
} 
if(name.textContent === 'Меч +5' ) {
    if (percent <= 60) {   
name.textContent = 'Меч +6'
ch.textContent = '55%'
img.style.backgroundImage = "url('sword/sw6.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}   
if(name.textContent === 'Меч +6' ) {
    if (percent <= 55) {   
name.textContent = 'Меч +7'
ch.textContent = '50%'
img.style.backgroundImage = "url('sword/sw7.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +7' ) {
    if (percent <= 50) {   
name.textContent = 'Меч +8'
ch.textContent = '47%'
img.style.backgroundImage = "url('sword/sw8.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}   
if(name.textContent === 'Меч +8' ) {
    if (percent <= 47) {   
name.textContent = 'Меч +9'
ch.textContent = '44%'
img.style.backgroundImage = "url('sword/sw9.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +9' ) {
    if (percent <= 44) {   
name.textContent = 'Меч +10'
ch.textContent = '41%'
img.style.backgroundImage = "url('sword/sw10.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +10' ) {
    if (percent <= 41) {   
name.textContent = 'Меч +11'
ch.textContent = '38%'
img.style.backgroundImage = "url('sword/sw11.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +11' ) {
    if (percent <= 38) {   
name.textContent = 'Меч +12'
ch.textContent = '35%'
img.style.backgroundImage = "url('sword/sw12.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +12' ) {
    if (percent <= 35) {   
name.textContent = 'Меч +13'
ch.textContent = '32%'
img.style.backgroundImage = "url('sword/sw13.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +13' ) {
    if (percent <= 32) {   
name.textContent = 'Меч +14'
ch.textContent = '29%'
img.style.backgroundImage = "url('sword/sw14.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +14' ) {
    if (percent <= 29) {   
name.textContent = 'Меч +15'
ch.textContent = '26%'
img.style.backgroundImage = "url('sword/sw15.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +15' ) {
    if (percent <= 26) {   
name.textContent = 'Меч +16'
ch.textContent = '23%'
img.style.backgroundImage = "url('sword/sw16.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
//
function luckItFlex () {                                                               //<=
    itsLuckTxt.style.display = 'flex'                                                   //
  };                                                                                   //
  setTimeout(luckItFlex,500)                                                          //
  function itL() {itsLuckTxt.style.display = 'none'                                  //
  }                                                                                 // Текст сообщающий о УДАЧНОМ улучшении
  setTimeout(itL,900)                                                              //<=
//

    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}
if(name.textContent === 'Меч +16' ) {
    if (percent <= 23) {   
name.textContent = 'Меч +17'
ch.textContent = 'ЗАВЕРШЕНО'
img.style.backgroundImage = "url('sword/sw17.png')"

resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
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
    } 
    else {
        resourcesCount[2].textContent = Number(resourcesCount[2].textContent) - 1;
        //alert('Не повезло. Но меч остался цел')
        function notLflex () {                                                             //                     
            notLuckTxt.style.display = 'flex'                                             //
            }                                                                            //
            setTimeout(notLflex,500)                                                    //
            function notL() {notLuckTxt.style.display = 'none'                         //
            }                                                                         // Текст сообщающий о неудачном улучшении
            setTimeout(notL,900)                                                     //
    }
    return
}


}

