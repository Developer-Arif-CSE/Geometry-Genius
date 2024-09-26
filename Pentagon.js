// function calculatePentagon(){
//     const pentagonWidthInput= document.getElementById('Pentagon-width')
//     const pentagonWidthText=pentagonWidthInput.value;
//     const width=parseFloat(pentagonWidthText)


//     const pentagonHeightInput=document.getElementById('Pentagon-length')
//     const pentagonHeightText=pentagonWidthInput.value;
//     const height= parseFloat(pentagonHeightText)

//     const area= 0.5 * width * height;
//     const areaSpan=document.getElementById('Pentagon-area')
//     areaSpan.innerText=area;
    
// }


function calculatePentagon(){
    const width=getInputValueById('Pentagon-width');
    const height=getInputValueById('Pentagon-length');
    const area=0.5*width*height;
    setInnerTextById('Pentagon-area',area)
}