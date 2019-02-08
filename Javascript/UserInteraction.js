
window.onload = init;

function init()
{
    if(window.event)
    {   
        document.onmousemove = getCursorPosition;
        document.onkeydown = userInput;
    }
}

function getCursorPosition(event)
{
    let text = document.getElementById('cursorText');

    let x = event.clientX;
    let y = event.clientY;

    text.style.top = y + "px";
    text.style.left = x + "px";
}

function userInput(event)
{
    let cursorText = document.getElementById("cursorText");
    let style = window.getComputedStyle(cursorText, null).getPropertyValue('font-size');
    let floatVal = parseFloat(style);

    if(event.altKey)
    { 
        cursorText.style.fontSize = (floatVal+1) + 'px';
    }
    else if(event.ctrlKey)
    {
        cursorText.style.fontSize = (floatVal-1) + 'px';
    }
}

function hoverReact()
{
    let text = document.getElementById("textbox");
    let cursorText = document.getElementById("cursorText");
    text.value = cursorText.textContent;
}