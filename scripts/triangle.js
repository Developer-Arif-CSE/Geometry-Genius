function calculateTriangle(){

    // get triangle value
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseTExt=triangleBaseInput.value;
    const base=parseFloat(triangleBaseTExt)
    // console.log( base);

    // get triangle height
    const triangleHeightInput=document.getElementById('triangle-height')
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText)
    // console.log(height)

    // calculate triangle area

    const area= 0.5 * base * height;
    // console.log('area of the Triangle is',area);

    // display triangle area
    const triangleAreaSpan= document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area;
}



