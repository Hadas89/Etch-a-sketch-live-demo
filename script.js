console.log('i work')


 window.onload = function() {
  
  // for (let i =1;i < 6; i++) {
  //  var newbtn = document.createElement('button')
  //  document.body.appendChild(newbtn)
  //  newbtn.innerHTML = 'button ' + i
  //  newbtn.onclick = function () {
  //   alert(i)
  //  }

  // }

 }


   function createBoard () {
    

   for (var i = 0; i < 1400 ; i++) {
    
    var boardTiles = document.createElement('div')
    boardTiles.className = 'divs'
    //boardTiles.style.display = 'inline-block'
    var contentdiv = document.getElementsByClassName('container')
    contentdiv[0].appendChild(boardTiles)


    //jQuery
    // var board = $('<div>')
    // $('.container').append(board)
    // board.addClass('divs')
   }
  }
  createBoard()

  var divs = document.getElementsByClassName('divs')
  function clearBoard () {
   



   
   for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '#D6D2D2'
  
   }


   

   for (let i = 0; i < divs.length; i++) {
   divs[i].onmouseover = function () {
   this.style.backgroundColor = 'black'
   }

   }




   //jQuery
   //var divs = $('.divs').css('backgroundColor', '#D6D2D2')
   
  }


   
   for (let i = 0; i < divs.length; i++) {
   divs[i].onmouseover = function () {
   this.style.backgroundColor = 'black'
   }

   }

var optionsMenu = document.getElementsByTagName('li')


function changeSize(num, size) {

	optionsMenu[num].onclick = function() {
		
		this.style.backgroundColor = 'yellow' 
	$(this).siblings().not('p').css({
		backgroundColor: ' #62BAD0',
		
	});
		clearBoard()
	var divs = document.getElementsByClassName('divs')
	for (let i = 0; i <divs.length; i++) {
		divs[i].style.width = size + "px"
		divs[i].style.height = size + "px"
	}

}
}

changeSize(2, 40)
changeSize(1, 20)
changeSize(0, 10)

function changeShape(num, radius) {

	optionsMenu[num].onclick = function() {
		this.style.backgroundColor = 'yellow' 
	$(this).siblings().not('p').css({
		backgroundColor: ' #62BAD0',
		
	});
		clearBoard()
	var divs = document.getElementsByClassName('divs')
	for (let i = 0; i <divs.length; i++) {
		divs[i].style.border = "none"
		divs[i].style.borderRadius =radius + "%"
	}

}
}
changeShape(3, 0)
changeShape(4, 50)

function changeTriangle () {

	clearBoard()

	optionsMenu[5].onclick = function () {
		this.style.backgroundColor = 'yellow' 
		$(this).siblings().not('p').css({
		backgroundColor: ' #62BAD0',
		
	});
		var divs = document.getElementsByClassName('divs')
	for (let i = 0; i <divs.length; i++) {

	divs[i].style.borderLeft = 50 +'px solid transparent'
	divs[i].style.borderRight =  50 +'px solid transparent'
	divs[i].style.borderBottom = 100 +'px solid red'
}
	}
	
}
changeTriangle()





