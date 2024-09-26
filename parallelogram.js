function calculateParallelogram(){
    // console.log('paise re baba paise')
    const parallelGramBaseInput= document.getElementById('parallelogram-base')
    const parallelGramText=parallelGramBaseInput.value;
    // console.log(parallelGramText)
    const base=parseFloat(parallelGramText)


    const parallelGramHeight=document.getElementById('parallelogram-height')
    const parallelGramHeightText=parallelGramHeight.value;
    const height=parseFloat(parallelGramHeightText)

    const area= base * height;
   const parallelGramAreaSpan=document.getElementById('parallelogram-area')
   parallelGramAreaSpan.innerText=area;
}