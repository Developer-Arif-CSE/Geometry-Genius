// Rectangle Area Calculation

function calculateRectangle(){
    const rectangleWidthInput=document.getElementById('rectangle-width')
    const rectangleWidthText=rectangleWidthInput.value;
    const width=parseFloat(rectangleWidthText)
    // console.log(width)

    const rectangleHeightInput= document.getElementById('rectangle-length')
    const rectangleHeightText=rectangleHeightInput.value;
    const height=parseFloat(rectangleHeightText)
    // console.log(height)

    const area= width * height;
    // console.log(area)
    const rectangleAreaSpan=document.getElementById('rectangle-area')
    rectangleAreaSpan.innerHTML=area;
}