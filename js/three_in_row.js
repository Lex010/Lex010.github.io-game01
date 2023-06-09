let config = {

	//containerColorBG: "#353336",                                                                                        //убрал общий фон    
	contentColorBG: "#525053",

	countRows: 6,
	countCols: 6,                                                                                                        //было 7 я поставил 6

	offsetBorder: 10,
	borderRadius: 8,
		
	gemSize: 64,

	imagesCoin: ["resorces_im/tempor_1.png", "resorces_im/tempor_2.png", "resorces_im/tempor_3.png", "resorces_im/tempor_4.png", //заменил изображения
	"resorces_im/tempor_5.png", "resorces_im/tempor_6.png", "resorces_im/tempor_7.png"],             //убрал 1 изображение    /*, "resorces_im/tempor.png"*/

	gemClass:"gem",
	gemIdPrefix: "gem",
	gameStates: ["pick", "switch", "revert", "remove", "refill"],
	gameState: "",
	
	movingItems: 0,

	countScore: 0
}

let player = {
	selectedRow: -1,
	selectedCol: -1,
	posX: "",
	posY: ""
}

let components = {
	container: document.createElement( "div" ),
	content: document.createElement( "div" ),
	wrapper: document.createElement( "div" ),
	cursor: document.createElement( "div" ),
	score: document.createElement( "div" ),
	gems: new Array(),
}




// start Game                                                                        //Мои изменения: добавляю кнопку старт
                                                                                    //-------------------------------------------------------
buttonStart.onclick = function() {                                                 //
	if(enemyName[0].textContent === 'Вепрь' || enemyName[0].textContent === 'Леший' || enemyName[0].textContent === 'Горыныч Змей' ) {  //запускает игру если выбран противник
	buttonStart.style.display = 'none'                                            //
	buttonReStart.style.display = 'flex'

	enemyImgBack[0].style.opacity = '0';
	healthBarBeforStart.style.opacity = '0';

	enemyImg[0].style.opacity = '1';
	healthBar.style.opacity = '1';

	rightChosenEnButt.style.opacity = 0;                              //скрываются кнопки выбора противника
	leftChosenEnButt.style.opacity = 0;                              //

initGame();
}
}
// Инициализация всех составляющих игры
function initGame () {
	document.body.style.margin = "0px";
	createPage();
	createContentPage();
	createWrapper();
	createCursor();
	createGrid();
	createScore();

	// Переключаем статус игры на "выбор"
	config.gameState = config.gameStates[ 0 ];
}

// Создание обертки для страницы
function createPage() {
	components.container.style.backgroundColor = config.containerColorBG;
	//components.container.style.height = "100vh";                                                             //закоментил для уменьшения размера фона
	components.container.style.overflow = "hidden";
	components.container.style.display = "flex";
	components.container.style.alignItems = "center";
	components.container.style.justifyContent = "center";
	components.container.style.marginTop = '1156px'                                                           //добавил строку (805px + 351px)
	components.container.style.position = 'absolute'                                                        //добавил строку
	components.container.style.width = '100%'                                                               //добавил строку
	components.container.style.opacity = '1'                                                              //добавил строку Прозрачность для настройки

	document.body.append( components.container );
}

// Создание обертки с контентом
function createContentPage () {
	components.content.style.padding = config.offsetBorder + "px";
	components.content.style.width = 	(config.gemSize * config.countCols) + 
										(config.offsetBorder * 2) + "px";
	components.content.style.height = 	(config.gemSize * config.countRows) +
										(config.offsetBorder * 2) + "px";
	components.content.style.background = 'url(bg_for_gems.jpg) no-repeat';                               //заменил фоновый цвет на картинку в виде шахматной доски
	components.content.style.backgroundSize = '404px 404px';                                             //добавил строку для подгона размера фоновой картинки добавленной выше
	components.content.style.boxShadow = config.offsetBorder + "px";
	components.content.style.borderRadius = config.borderRadius + "px";
	components.content.style.boxSizing = "border-box";

	components.container.append( components.content );
}

// Создание обертки для монет и очков
function createWrapper () {
	components.wrapper.style.position = "relative";
	components.wrapper.style.height = "100%";
	components.wrapper.addEventListener("click", function(event) { handlerTab(event, event.target) });

	components.content.append( components.wrapper );
}

// Создание курсора для выделения монет
function createCursor () {
	components.cursor.id = "marker";
	components.cursor.style.width = config.gemSize - 10 + "px";
	components.cursor.style.height = config.gemSize - 10 + "px";
	components.cursor.style.border = "5px inset white";
	components.cursor.style.animation = 'gem_anim_select 0.7s infinite'
	components.cursor.style.borderRadius = "20px";
	components.cursor.style.position = "absolute";
	components.cursor.style.display = "none";

	components.wrapper.append( components.cursor );
}
// Показать курсор
function cursorShow () {
	components.cursor.style.display = "block";
}
// Скрыть курсор
function cursorHide () {
	components.cursor.style.display = "none";
}

// Создание блока для очков
function createScore () {
	components.score.style.width = 200 + "px";
	components.score.style.height = 50 + "px";
	components.score.style.display = "flex";
	components.score.style.justifyContent = "center";
	components.score.style.alignItems = "center";
	components.score.style.borderRadius = config.borderRadius + "px";
	components.score.style.backgroundColor = config.contentColorBG;
	components.score.style.position = "absolute";
	components.score.style.bottom = "calc(100% + " + 24 + "px)";
	components.score.style.left = "calc(50% - " + ( parseInt(components.score.style.width) / 2) + "px)";

	components.score.style.fontFamily = "sans-serif";
	components.score.style.fontSize = "16px";
	components.score.style.color = "#ffffff";
	

	updateScore();
}

// Обновить очки на странице
function updateScore () {
	components.score.innerHTML = config.countScore;
	components.wrapper.append( components.score );
}

// Добавление очков
function scoreInc ( count ) {
	if ( count >= 4 ) {
		count *= 2;
	} else if ( count >= 5 ) {
		count = ( count + 1 ) * 2;
	} else if ( count >= 6 ) {
		count *= ( count + 2 ) * 2;
	}

	config.countScore += count;
	updateScore();
}

// Создание монеты
function createGem ( t, l, row, col, img ) {
	let coin = document.createElement("div");

	coin.classList.add( config.gemClass );
	coin.id = config.gemIdPrefix + '_' + row + '_' + col;
	coin.style.boxSizing = "border-box";
	coin.style.cursor = "pointer";
	coin.style.position = "absolute";
	coin.style.top = t + "px";
	coin.style.left = l + "px";
	coin.style.width = config.gemSize + "px";
	coin.style.height = config.gemSize + "px";
	coin.style.border = "1p solid transparent";
	coin.style.backgroundImage = "url("+ img +")";
	coin.style.backgroundRepeat = 'no-repeat';                                                  //добавил эту строку чтоб меч отображался 1 в ячейке(до этого их полтора было)  
	coin.style.backgroundSize = "100%";

	components.wrapper.append( coin );
}

// Создание и наполнение сетки для монет
function createGrid() {
	// Создание пустой сетки
	for(i = 0; i < config.countRows; i++) {
		components.gems[i] = new Array();
		for(j = 0; j < config.countCols; j++) {
			components.gems[i][j] = -1;
		}
	}

	// Заполняем сетку
	for( i = 0; i < config.countRows; i++ ) {
		for( j = 0; j < config.countCols; j++ ) {

			do{
				components.gems[i][j] = Math.floor(Math.random() * 7);                                                          ///меняю *8 га *7(количество гемов -1)
			} while( isStreak(i, j) );

			createGem( i * config.gemSize, j * config.gemSize, i, j, config.imagesCoin[ components.gems[i][j] ] );
		}
	}
}

// Проверка на группу сбора
function isStreak( row, col ) {
	return isVerticalStreak( row, col ) || isHorizontalStreak( row, col );
}
// Проверка на группу сбора по колонкам
function isVerticalStreak( row, col ) {
	let gemValue = components.gems[row][col];
	let streak = 0;
	let tmp = row;

	while(tmp > 0 && components.gems[tmp - 1][col] == gemValue){
		streak++;
		tmp--;
	}

	tmp = row;

	while(tmp < config.countRows - 1 && components.gems[tmp + 1][col] == gemValue){
		streak++;
		tmp++;
	}

	return streak > 1;
}
// Проверка на группу сбора по строкам
function isHorizontalStreak( row, col ) {
	let gemValue = components.gems[row][col];
	let streak = 0;
	let tmp = col;

	while(tmp > 0 && components.gems[row][tmp - 1] == gemValue){
		streak++;
		tmp--;
	}

	tmp = col;

	while(tmp < config.countCols - 1 && components.gems[row][tmp + 1] == gemValue){
		streak++;
		tmp++;
	}

	return streak > 1;
}

// Обработчик клика
function handlerTab ( event, target ) {
	// Если это элемент с классом config.gameClass
	// и
	// Если подходящее состояние игры
	if( target.classList.contains( config.gemClass ) && config.gameStates[ 0 ]) {
		// определить строку и столбец
		let row = parseInt( target.getAttribute( "id" ).split( "_" )[ 1 ] );
		let col =  parseInt( target.getAttribute( "id" ).split( "_" )[ 2 ] );

		// Выделяем гем курсором
		cursorShow();
		components.cursor.style.top = parseInt( target.style.top ) + "px";
		components.cursor.style.left = parseInt( target.style.left ) + "px";

		// Если это первый выбор, то сохраняем выбор
		if( player.selectedRow == -1 ) {
			player.selectedRow = row;
			player.selectedCol = col;
		} else {
			// Если гем находится радом с первым выбором
			// то меняем их местами
			if ( ( Math.abs( player.selectedRow - row ) == 1 && player.selectedCol == col ) ||
				( Math.abs( player.selectedCol - col ) == 1 && player.selectedRow == row ) ){
					cursorHide();

					// После выбора меняем состояние игры
					config.gameState = config.gameStates[1];

					// сохранить позицию второго выбранного гема
					player.posX = col;
					player.posY = row;

					// поменять их местами
					gemSwitch();
			} else {
				// Если второй выбор произошел не рядом,
				// то делаем его первым выбором.
				player.selectedRow = row;
				player.selectedCol = col;
			}
		}
	}
}

// Меняем гемы местами
function gemSwitch () {
	let yOffset = player.selectedRow - player.posY;
	let xOffset = player.selectedCol - player.posX;

	// Метка для гемов, которые нужно двигать
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).classList.add("switch");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).setAttribute("dir", "-1");

	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).classList.add("switch");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).setAttribute("dir", "1");

	// меняем местами гемы
	$( ".switch" ).each( function() {
		config.movingItems++;

		$(this).animate( {
				left: "+=" + xOffset * config.gemSize * $(this).attr("dir"),
				top: "+=" + yOffset * config.gemSize * $(this).attr("dir")
			},
			{
				duration: 250,
				complete: function() {
					//Проверяем доступность данного хода
					checkMoving();
				}
			}
		);

		$(this).removeClass("switch");
	});
	

	// поменять идентификаторы гемов
	document.querySelector("#" + config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol).setAttribute("id", "temp");
	document.querySelector("#" + config.gemIdPrefix + "_" + player.posY + "_" + player.posX).setAttribute("id", config.gemIdPrefix + "_" + player.selectedRow + "_" + player.selectedCol);
	document.querySelector("#temp").setAttribute("id",  config.gemIdPrefix + "_" + player.posY + "_" + player.posX);

	// поменять гемы в сетке
	let temp = components.gems[player.selectedRow][player.selectedCol];
	components.gems[player.selectedRow][player.selectedCol] = components.gems[player.posY][player.posX];
	components.gems[player.posY][player.posX] = temp;
}

// Проверка перемещенных гемов
function checkMoving () {
	config.movingItems--;

	// Действуем тольпо после всех перемещений
	if( config.movingItems == 0 ) {

		// Действия в зависимости от состояния игры
		switch( config.gameState ) {

			// После передвижения гемов проверяем на появление групп сбора
			case config.gameStates[1]:
			case config.gameStates[2]:
				// проверяем, появились ли группы сбора
				if( !isStreak( player.selectedRow, player.selectedCol ) && !isStreak( player.posY, player.posX ) ) {
					// Если групп сбора нет, нужно отменить совершенное движение
					// а если действие уже отменяется, то вернуться к исходному состоянию ожидания выбора
					if( config.gameState != config.gameStates[2] ){
						config.gameState = config.gameStates[2];
						gemSwitch();
					} else {
						config.gameState = config.gameStates[0];
						player.selectedRow = -1;
						player.selectedCol = -1;
					}
				} else {
					// Если группы сбора есть, нужно их удалить
					config.gameState = config.gameStates[3]

					// Отметим все удаляемые гемы
					if( isStreak( player.selectedRow, player.selectedCol ) ) {
						removeGems( player.selectedRow, player.selectedCol );
					}

					if(isStreak(player.posY, player.posX)) {
						removeGems( player.posY, player.posX );
					}

					// Убираем с поля
					gemFade();
				}
				break;
			// После удаления нужно заполнить пустоту
			case config.gameStates[3]:
				checkFalling();
				break;
			case config.gameStates[4]:
				placeNewGems();
				break;
		}

	}

}

// Отмечаем элементы для удаления и убираем их из сетки
function removeGems( row, col ) {
	let gemValue = components.gems[ row ][ col ];
	let tmp = row;

	document.querySelector( "#" + config.gemIdPrefix + "_" + row + "_" + col ).classList.add( "remove" );
	let countRemoveGem = document.querySelectorAll( ".remove" ).length;

	if ( isVerticalStreak( row, col ) ) {
		while ( tmp > 0 && components.gems[ tmp - 1 ][ col ] == gemValue ) {
			document.querySelector( "#" + config.gemIdPrefix + "_" + ( tmp - 1 ) + "_" + col ).classList.add( "remove" );
			components.gems[ tmp - 1 ][ col ] = -1;
			tmp--;
			countRemoveGem++;
		}

		tmp = row;

		while ( tmp < config.countRows - 1 && components.gems[ tmp + 1 ][ col ] == gemValue ) {
			document.querySelector( "#" + config.gemIdPrefix + "_" + ( tmp + 1 ) + "_" + col ).classList.add( "remove" );
			components.gems[ tmp + 1 ][ col ] = -1;
			tmp++;
			countRemoveGem++;
		}
	}

	if ( isHorizontalStreak( row, col ) ) {
		tmp = col;

		while ( tmp > 0 && components.gems[ row ][ tmp - 1 ] == gemValue ) {
			document.querySelector( "#" + config.gemIdPrefix + "_" + row + "_" + ( tmp - 1 ) ).classList.add( "remove" );
			components.gems[ row ][ tmp - 1 ] = -1;
			tmp--;
			countRemoveGem++;
		}

		tmp = col;

		while( tmp < config.countCols - 1 && components.gems[ row ][ tmp + 1 ] == gemValue ) {
			document.querySelector( "#" + config.gemIdPrefix + "_" + row + "_" + ( tmp + 1 ) ).classList.add( "remove" );
			components.gems[ row ][ tmp + 1 ] = -1;
			tmp++;
			countRemoveGem++;
		}
	}
////////////////////////////////////////////////////
if(config.imagesCoin[ components.gems[row][col] ] === "resorces_im/tempor_6.png"){                                               //добавление ресурсов при сложении пазлов       
	ironPlus[0].classList.add('iron_plus_clik')                                                                                 // <= анимация ЗЕЛЕНЫХ цифр прибавления ресурсов
    ironPlus[0].textContent = `+ ${countRemoveGem}`
	ironPlus[0].addEventListener("animationend", greenNum, false);                                                           // <=
function greenNum(){                                                                                                        //удаляет анимацию по ее завершению
    ironPlus[0].classList.remove('iron_plus_clik');                                                                          // <=
}                                                                                                                             // <= анимация ЗЕЛЕНЫХ цифр прибавления ресурсов  
bgResIcon[1].style.backgroundColor = 'rgb(0, 197, 0)'                                                                                    //>=
    function iGrBg() {bgResIcon[1].style.backgroundColor = 'bisque'}                                                            //ЗЕЛЕНЕЕТ фон железа
    setTimeout(iGrBg,1000)                                                                                                      //>=
               
	resourcesCount[1].textContent = Number(resourcesCount[1].textContent) /**/ + 1 * countRemoveGem; /**/ };              //  добавляет железо  /**/+ 1 * countRemoveGem; /**/ 
////////////////////////////////////////////////////                                                /**/+ 1 * countRemoveGem; /**/ убраное количество гемов = добавленные ресурсы
if(config.imagesCoin[ components.gems[row][col] ] === "resorces_im/tempor_7.png") {                                //         дерево
	woodPlus[0].classList.add('wood_plus_clik') 
	woodPlus[0].textContent = `+ ${countRemoveGem}`
	woodPlus[0].addEventListener("animationend", greenNum, false); 
function greenNum(){  	
	woodPlus[0].classList.remove('wood_plus_clik');                                                                          // <= зеленые цифры для дерева
}                                                                                                                          
bgResIcon[0].style.backgroundColor = 'rgb(0, 197, 0)'                                                                               //>=
function wGrBg() {bgResIcon[0].style.backgroundColor = 'bisque'}                                                          // зеленеет фон дерева
setTimeout(wGrBg,1000)                                                                                                   //>=
	resourcesCount[0].textContent = Number(resourcesCount[0].textContent) /**/ + 1 * countRemoveGem; /**/                 //прибавка к дереву  
};
///////////////////////////////////////////////////
if(config.imagesCoin[ components.gems[row][col] ] === "resorces_im/tempor_2.png") {                                    // сбор ОДИНОЧНЫХ МЕЧ
	//
	soloStr.style.opacity = 1                                                                                          //<=
	function soloOpacity() {                                                                                          //  появление пореза при сборе мечей
		soloStr.style.opacity = 0                                                                                    //
	};                                                                                                              //
	setTimeout(soloOpacity , 300)                                                                                  //<=
	
	allEnemyImg.style.animation = 'hit_by_enemy 0.1s'                                                                 //<=
	allEnemyImg.addEventListener("animationend",enemyHit, false);                                                    //движение изображения противника при сборе мечей
 function enemyHit () {	                                                                                            //
	allEnemyImg.style.animation = ''                                                                               //
};                                                                                                                //<=
//
	let healthEnemyAtNow = healthBar.textContent = (healthBar.textContent - countRemoveGem) - (countRemoveGem  * name.textContent.replace(/[^\d]/g, '')) // ФОРМУЛА УРОНА
//<=                                      //  <<("Количество здоровья" - "количество убраных гемов") - ("количество убраных гемов" * "значение улучшености меча") >>
const onePercentHealthOfEnemy = fixedHealthEnemy.textContent / 100                                                  //  выисчитываем 1% от фиксированого показателя жизни противника
 let result = Math.ceil(healthEnemyAtNow / onePercentHealthOfEnemy)                                                  // считаем текущий показатель жизни в %
let stringColorStyle = 'linear-gradient(to right, green 100%, red 10%)'                                              // базовое значение со 100% заполненостью полоски жизни
healthBar.style.background = stringColorStyle.slice(0, 32) + result + stringColorStyle.slice(35)                      //внесение изменений в стиль исходя из текущих показателей
};	
//<=
//////////////////////////////////////////////////
if(config.imagesCoin[ components.gems[row][col] ] === "resorces_im/tempor_4.png") {                                    // сбор СДВОЕНЫХ МЕЧ
		//
		doubleStr.style.opacity = 1                                                                                          //<=
		function doubleOpacity() {                                                                                          //  появление пореза при сборе мечей
			doubleStr.style.opacity = 0                                                                                    //
		};                                                                                                                //
		setTimeout(doubleOpacity , 300)                                                                                  //<=


		allEnemyImg.style.animation = 'hit_by_enemy 0.1s'                                                                 //<=
		allEnemyImg.addEventListener("animationend",enemyHit, false);                                                    //движение изображения противника при сборе мечей
	 function enemyHit () {	                                                                                            //
		allEnemyImg.style.animation = ''                                                                               //
	};                                                                                                                //<=
//
	let healthEnemyAtNowTwo = healthBar.textContent = (healthBar.textContent - countRemoveGem * 2) - (countRemoveGem  * name.textContent.replace(/[^\d]/g, '') * 2)
	//<=                                                                                                               //<= 
const onePercentHealthOfEnemyTwo = fixedHealthEnemy.textContent / 100                                              //  выисчитываем 1% от фиксированого показателя жизни противника 
let resultTwo = Math.ceil(healthEnemyAtNowTwo / onePercentHealthOfEnemyTwo)                                         // считаем текущий показатель жизни в % 
let stringColorStyleTwo = 'linear-gradient(to right, green 100%, red 10%)'                                           // базовое значение со 100% заполненостью полоски жизни
healthBar.style.background = stringColorStyleTwo.slice(0, 32) + resultTwo + stringColorStyleTwo.slice(35)             //внесение изменений в стиль исходя из текущих показателей
};                                                                                                                       //<=
if(healthBar.textContent < 1) {                                                                                        /************************************* */
    enemyImg[0].style.opacity = '0'                                         // при жизни противника 0< возвращает стартовую надпись вместо изображения противника
	enemyImgSecond[0].style.opacity = '0'                                  //  
	enemyImgThree[0].style.opacity = '0'                                  // и имя противника меняетс на надпись "противник"
	enemyName[0].textContent = 'Противник'                               //    
	enemyImgBack[0].style.opacity = '1' 					            //<=									   
    

    rightChosenEnButt.style.opacity = 1                                //<= после победы над противником появляются кнопки выбора между противниками
	leftChosenEnButt.style.opacity = 1                                //<=

    healthBar.textContent = '0'                                                                       // число жизни у противника не опускается меньше 0 
	resourcesCount[2].textContent = Number(resourcesCount[2].textContent) + 1                                         //добавляет золото при уровне хп противника < 0 
	bgGoldIcon[0].style.background = 'rgb(0, 197, 0)'                                                          //>=
    function gGrBg() {bgGoldIcon[0].style.background = 'linear-gradient(rgb(147, 226, 171), orange)'}         // ЗЕЛЕНЕЕТ фон золота
    setTimeout(gGrBg,1000)                                                                                   //>=
                                                                      
	goldPlus[0].classList.add('gold_plus_clik')                                                                   //<=
	goldPlus[0].textContent = '+ 1'
	goldPlus[0].addEventListener("animationend", greenNum, false);                                                //анимация добавления золота
function greenNum(){  	
	goldPlus[0].classList.remove('gold_plus_clik');                                    
}                                                                                                                   //<=                                                                                                      
components.container.style.display = 'none'                                                                          // скрываю гемы до нажатия кнопки
buttonReStart.style.display = 'none'                                                                                 //убираю кнопку "обновить"
buttonContinue.style.display = 'inline'                                                                                  //третья кнопка("продолить") теперь видна
}
////////////////////////////////////////////////
	components.gems[ row ][ col ] = -1;

	scoreInc( countRemoveGem );
}

// Удаляем гемы
function gemFade() {
	$( ".remove" ).each(function() {
		config.movingItems++;

		$(this).animate( {
				opacity: 0
			},
			{
				duration: 100,                   ////duration: 200 заменил на 1, при удаление через кнопку "обновление" был баг(200 давало не омментальное изчезновение удаляемого)
				complete: function() {
					$(this).remove();
					checkMoving();
				}
			}
		);
	});
}

// Заполняем пустоту
function checkFalling() {
	let fellDown = 0;

	for( j = 0; j < config.countCols; j++ ) {
		for( i = config.countRows - 1; i > 0; i-- ) {

			if(components.gems[i][j] == -1 && components.gems[i - 1][j] >= 0) {
				document.querySelector( "#" + config.gemIdPrefix + "_" + (i - 1) + "_" + j ).classList.add( "fall" );
				document.querySelector( "#" + config.gemIdPrefix + "_" + (i - 1) + "_" + j ).setAttribute( "id", config.gemIdPrefix + "_" + i + "_" + j );
				components.gems[ i ][ j ] = components.gems[ i - 1 ][ j ];
				components.gems[ i - 1 ][ j ] = -1;
				fellDown++;
			}

		}
	}

	$( ".fall" ).each( function() {
		config.movingItems++;

		$( this ).animate( {
				top: "+=" + config.gemSize
			},
			{
				duration: 100,
				complete: function() {
					$( this ).removeClass( "fall" );
					checkMoving();
				}
			}
		);
	});

	// Если все элементы передвинули,
	// то сменить состояние игры
	if( fellDown == 0 ){
		config.gameState = config.gameStates[4];
		config.movingItems = 1;
		checkMoving();
	}
}


// Создание новых гемов
function placeNewGems() {
	let gemsPlaced = 0;

	// Поиск мест, в которых необходимо создать гем
	for( i = 0; i < config.countCols; i++ ) {
		if( components.gems[ 0 ][ i ] == -1 ) {
			components.gems[ 0 ][ i ] = Math.floor( Math.random() * 7 );                                                                      //( Math.random() * 7 ) ..было *8(-1 гем убрал)
			
			createGem( 0, i * config.gemSize, 0, i, config.imagesCoin[ components.gems[ 0 ][ i ] ] );
			gemsPlaced++;
		}
	}

	// Если мы создали гемы, то проверяем необходимость их сдвинуть вниз.
	if( gemsPlaced ) {
		config.gameState = config.gameStates[ 3 ];
		checkFalling();
	} else {
		// Проверка на группы сбора
		let combo = 0

		for ( i = 0; i < config.countRows; i++ ) {
			for ( j = 0; j < config.countCols; j++ ) {

				if ( j <= config.countCols - 3 && components.gems[ i ][ j ] == components.gems[ i ][ j + 1 ] && components.gems[ i ][ j ] == components.gems[ i ][ j + 2 ] ) {
					combo++;
					removeGems( i, j );
				}
				if ( i <= config.countRows - 3 && components.gems[ i ][ j ] == components.gems[ i + 1 ][ j ] && components.gems[ i] [ j ] == components.gems[ i + 2 ][ j ] ) {
					combo++;
					removeGems( i, j );
				}

			}
		}

		// удаляем найденные группы сбора
		if( combo > 0 ) {
			config.gameState = config.gameStates[ 3 ];
			gemFade();
		} else { 
			// Запускаем основное состояние игры
			config.gameState = config.gameStates[ 0 ];
			player.selectedRow= -1;
		}
	}
}