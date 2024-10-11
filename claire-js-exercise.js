
    //question 2//
    var firstButton = document.getElementById("firstButton");

    firstButton.addEventListener('click', () => {
        var text = document.createElement('p');
        text.textContent = "You pressed a button!";
        document.body.appendChild(text); 
    })

    
    //question 3//
    
    var number = document.getElementById("number");
    var incrementButton = document.getElementById("incrementButton");

    incrementButton.addEventListener('click', () => {
        var currentValue = parseInt(number.innerText);
        currentValue += 1;
        number.innerText = currentValue;
    });

    //question 4//
    var colorButtonOne = document.getElementById("colorButtonOne");
    var colorButtonTwo = document.getElementById("colorButtonTwo");
    var colorButtonThree = document.getElementById("colorButtonThree");
    var color = document.getElementById("color");
    
    colorButtonOne.addEventListener('click', () => {
        document.getElementById("color").style.color = "blue";
    });
    colorButtonTwo.addEventListener('click', () => {
        document.getElementById("color").style.color = "orange";
    });
    colorButtonThree.addEventListener('click', () => {
        document.getElementById("color").style.color = "green";
    });

    //question 5//
    var inputButton = document.getElementById("inputButton");
    var input = document.getElementById("input");
    inputButton.addEventListener('click', () => {
        var text = document.createElement('p');
        text.textContent = input.value;
        document.body.appendChild(text); 
    });

    //question 6//
      var fontselect = document.getElementById("fontselect");
    fontselect.addEventListener('change', () => {
        document.getElementById("font").style['font-family'] = fontselect.value;
    });
   