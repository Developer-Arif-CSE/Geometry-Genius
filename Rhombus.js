function calculateRhombus(){

    const rhombusWidthInput= document.getElementById('Rhombus-width')
    const rhombusWidthText=rhombusWidthInput.value;
    const width=parseFloat(rhombusWidthText)


    const rhombusHeightInput=document.getElementById('Rhombus-length')
    const rhombusHeightText=rhombusWidthInput.value;
    const height= parseFloat(rhombusHeightText)

    const area= 0.5 * width *height;
    const areaSpan=document.getElementById('Rhombus-area')
    areaSpan.innerText=area;
}