//mainText에 h1을 선택하도록 지정
let mainText = document.querySelector(".mainTxt");
let rain = document.querySelector(".rain");
let daisyPerfume = document.querySelector(".daisy");

//scroll을 했을 때 함수 이벤트(2번째 파라미터)를 발생시킴
window.addEventListener("scroll",function(){
    
    //value 값에 스크롤시, Y 좌표 값을 저장
    let value=window.scrollY;
    console.log(value);

    //mainText
    //스크롤의 Y값이 177 이상이면 
    if (value > 710) {
        //H1의 애니메이션 스타일을 css에 disappear 키프레임을 실행
        mainText.style.animation="h1Disappear 1s ease-out forwards";
        //rainPerfume.style.animation="photo1Appear 1.2s linear forwards";
    } 
    else if(value=0) {
        mainText.style.animation="h1No 1s linear forwards"
    }
    //177 이하일 때, 다시 slide 키프레임을 실행
    else if (145<value<=710) {
        mainText.style.animation="h1Appear 1s ease-out";
        //rainPerfume.style.animation="photo1Disappear 1.2s linear forwards";
    }

    //rain
    if(value <= 980 || value > 1700) {
        rain.style.animation="photo1Appear 1s linear forwards";
    } else if(value > 980 || value <= 1700) {
        rain.style.animation="photo1Disappear 1s linear forwards";
    }


    //daisy
    if (value<=1700 || value>2330) {
        daisyPerfume.style.animation="photo2Appear 1s linear forwards"
    } else if (1700<value<=2330) {
        daisyPerfume.style.animation="photo2Disappear 1s linear forwards"
    }
})