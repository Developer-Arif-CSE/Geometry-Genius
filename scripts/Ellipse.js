function calculateEllipse(){
    const ellipseWidthInput=document.getElementById('Ellipse-width')
    const ellipseWidthTex=ellipseWidthInput.value;
    const width=parseFloat(ellipseWidthTex)


    const  ellipseHeightInput=document.getElementById('Ellipse-length')
    const ellipseHeightText=ellipseHeightInput.value;
    const height=parseFloat(ellipseHeightText)

    const area= 0.5 * width * height;

    const areaSpan=document.getElementById('Ellipse-area')
    areaSpan.innerText=area;

}