/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {
    
    //states for info button
    $(".btn--info").hover(function(){
        $(this).addClass('btn--info-light');
    });
    $(".btn--info").mouseleave(function(){
        $(this).removeClass('btn--info-light');
        $(this).removeClass('btn--info-dark');
    });
    $(".btn--info").mousedown(function(){
        $(this).addClass('btn--info-dark');
    });
    $(".btn--info").mouseup(function(){
        $(this).removeClass('btn--info-dark');
    });

    //states for bet buttons
    $(".btn--bet").hover(function(){
        $(this).addClass('btn--bet-light');
    });
    $(".btn--bet").mouseleave(function(){
        $(this).removeClass('btn--bet-light');
        $(this).removeClass('btn--bet-dark');
    });
    $(".btn--bet").mousedown(function(){
        $(this).addClass('btn--bet-dark');
    });
    $(".btn--bet").mouseup(function(){
        $(this).removeClass('btn--bet-dark');
    });

    //states for turbo checkbox
    $(".turbo__label").hover(function(){
        $(this).addClass('turbo__label-light');
    });
    $(".turbo__label").mouseleave(function(){
        $(this).removeClass('turbo__label-light');
        $(this).removeClass('turbo__label-dark');
    });
    $(".turbo__label").mousedown(function(){
        $(this).addClass('turbo__label-dark');
    });
    $(".turbo__label").mouseup(function(){
        $(this).removeClass('turbo__label-dark');
    });

    //states for auto button
    $(".btn--auto").hover(function(){
        $(this).addClass('btn--auto-light');
    });
    $(".btn--auto").mouseleave(function(){
        $(this).removeClass('btn--auto-light');
        $(this).removeClass('btn--auto-dark');
    });
    $(".btn--auto").mousedown(function(){
        $(this).addClass('btn--auto-dark');
    });
    $(".btn--auto").mouseup(function(){
        $(this).removeClass('btn--auto-dark');
    });

    //states for auto-stop button
    $(".btn--stop").hover(function(){
        $(this).addClass('btn--stop-light');
    });
    $(".btn--stop").mouseleave(function(){
        $(this).removeClass('btn--stop-light');
        $(this).removeClass('btn--stop-dark');
    });
    $(".btn--stop").mousedown(function(){
        $(this).addClass('btn--stop-dark');
    });
    $(".btn--stop").mouseup(function(){
        $(this).removeClass('btn--stop-dark');
    });

    //states for start button
    $(".btn--start").hover(function(){
        $(this).addClass('btn--start-light');
    });
    $(".btn--start").mouseleave(function(){
        $(this).removeClass('btn--start-light');
        $(this).removeClass('btn--start-dark');
    });
    $(".btn--start").mousedown(function(){
        $(this).addClass('btn--start-dark');
    });
    $(".btn--start").mouseup(function(){
        $(this).removeClass('btn--start-dark');
    });

    $(".btn--auto").hover(function () {
        $("#bottomBar__start-list-inner").css({
            "max-height":"192px"
        });
    });

    //auto list appearance
    $(".btn--auto").hover(function () {
        $("#bottomBar__start-list-inner").css({
            "max-height":"192px"
        });
    });
    $(".btn--auto").mouseleave(function () {
        $("#bottomBar__start-list-inner").css({
            "max-height":"0px"
        });
    });
    $("#bottomBar__start-list-inner").hover(function () {
        $(this).css({
            "max-height":"192px"
        });
    });
    $("#bottomBar__start-list-inner").mouseleave(function () {
        $(this).css({
            "max-height":"0px"
        });
    });

    //turbo checkbox background changing
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(".bottomBar__luck-turbo").removeClass("off");
            $(".bottomBar__luck-turbo").addClass("on");
        }
        else if($(this).prop("checked") == false){
            $(".bottomBar__luck-turbo").removeClass("on");
            $(".bottomBar__luck-turbo").addClass("off");
        }
    });

    //click and sound
    var audioClick = document.getElementById('audioClick');
    function fPlay() {
        audioClick.currentTime = 0;
        audioClick.play();
    }
    $(".clickAudio").on("click", function (event) {
        fPlay();
    });

    //increasing and decreasing bet
    var betCounter = $('.bottomBar__display-total');
    var betValue = parseFloat(betCounter.text().slice(1));
    var coinCounter = $('.bottomBar__luck-coin-total');
    var coinValue = parseFloat(coinCounter.text().slice(1));

    //decreasing bet fuction
    function lessBet(betLess, coinLess){
        betValue = betValue - betLess;
        betValue = Math.round((betValue)*100)/100;
        betCounter.text('¥'+betValue);

        coinValue = coinValue - coinLess;
        coinValue = Math.round((coinValue)*100)/100;
        coinCounter.text('¥'+coinValue);
    }

    //increasing bet fuction
    function moreBet(betMore, coinMore){
        betValue = betValue + betMore;
        betValue = Math.round((betValue)*100)/100;
        betCounter.text('¥'+betValue);

        coinValue = coinValue + coinMore;
        coinValue = Math.round((coinValue)*100)/100;
        coinCounter.text('¥'+coinValue);
    }

    //decreasing by click
    $('.btn--minus').click(function(){
        if(betValue==300){
            lessBet(150,10);
            $('.btn--plus').removeClass('disabled');
            $('.btn--plus').children().removeClass('opacityOn');
        } else if(betValue==150){
            lessBet(30,2);
        } else if(betValue==120){
            lessBet(45,3);
        } else if(betValue==75){
            lessBet(30,2);
        } else if ((betValue<=45)&&(betValue>15)){
            lessBet(15,1);
        } else if(betValue==15){
            lessBet(3,0.2);
        } else if(betValue==12){
            lessBet(4.5,0.3);
        } else if(betValue==7.5){
            lessBet(3,0.2);
        } else if ((betValue<=4.5)&&(betValue>1.5)){
            lessBet(1.5,0.1);
        } else if(betValue==1.5){
            lessBet(0.3,0.02);
        } else if (betValue==1.2){
            lessBet(0.45,0.03);
        } else if (betValue==0.75){
            lessBet(0.3,0.02);
        } else if ((betValue<=0.45)&&(betValue>0.15)){
            lessBet(0.15,0.01);
            if(betValue==0.15){
                $('.btn--minus').removeClass('btn--bet-light');
                $('.btn--minus').addClass('disabled');
                $('.btn--minus').children().addClass('opacityOn');
            }
        }
    });

    //increasing bet by click
    $('.btn--plus').click(function(){
        if((betValue>=0.15)&&(betValue<0.45)){
            moreBet(0.15, 0.01);
            $('.btn--minus').removeClass('disabled');
            $('.btn--minus').children().removeClass('opacityOn');
        } else if(betValue==0.45){
            moreBet(0.30, 0.02);
        } else if(betValue==0.75){
            moreBet(0.45, 0.03);
        } else if(betValue==1.2){
            moreBet(0.30, 0.02);
        } else if((betValue>=1.5)&&(betValue<4.5)){
            moreBet(1.5, 0.1);
        } else if(betValue==4.5){
            moreBet(3, 0.2);
        } else if(betValue==7.5){
            moreBet(4.5, 0.3);
        } else if(betValue==12){
            moreBet(3, 0.2);
        } else if((betValue>=15)&&(betValue<45)){
            moreBet(15, 1);
        } else if(betValue==45){
            moreBet(30, 2);
        } else if(betValue==75){
            moreBet(45, 3);
        } else if(betValue==120){
            moreBet(30, 2);
        } else if(betValue==150){
            moreBet(150, 10);
            if(betValue==300){
                $('.btn--plus').removeClass('btn--bet-light');
                $('.btn--plus').addClass('disabled');
                $('.btn--plus').children().addClass('opacityOn');
            }
        }
    });

    //start auto spins function
    function doSpins(){
        $(".instructions").text("auto play is activated");
        if(spinsConter!='infinite'){
            $('.bottomBar__start-auto-counter-text').text(spinsConter);
            $('.btn--start').addClass('disabled');
            $('.bottomBar__start-effect').addClass('bottomBar__start-effect-opacity');
            setTimeout(function(){
                $('.bottomBar__start-effect').removeClass('bottomBar__start-effect-opacity');
            }, 1000);
            changeStartButtonLogoToStop();            
            disableElementsOn();
            spinsConter--;
            if (spinsConter==0){
                setTimeout(function(){
                    clearInterval(spinsInterval);
                    $('.btn--auto').removeClass('hide');
                    $('.btn--stop').addClass('hide');
                    $('.bottomBar__start-list').removeClass('hide');
                    $('.btn--start').removeClass('disabled');
                    changeStartButtonLogoToArrows();
                    disableElementsOff();
                },3000);
                
            }
        }
        else{                
            $('.btn--start').addClass('disabled');
            $('.bottomBar__start-auto-counter-text').addClass('hide');
            $('.bottomBar__start-auto-counter-logo').removeClass('hide');
            $('.bottomBar__start-auto-counter-logo').addClass('rotate-stop');
            $('.bottomBar__start-effect').addClass('bottomBar__start-effect-opacity');
            setTimeout(function(){
                $('.bottomBar__start-effect').removeClass('bottomBar__start-effect-opacity');
            }, 1000);
            changeStartButtonLogoToStop();            
            disableElementsOn();
        }
    }

    //stop auto spins function
    function stopSpins(){
        spinsConter=null;
        clearInterval(spinsInterval);
        $('.btn--auto').removeClass('hide');
        $('.btn--stop').addClass('hide');
        $('.bottomBar__start-list').removeClass('hide');
        $('.btn--start').removeClass('disabled');
        $('.bottomBar__start-auto-counter-text').removeClass('hide');
        $('.bottomBar__start-auto-counter-logo').addClass('hide');
        changeStartButtonLogoToArrows();
        disableElementsOff();
        $(".instructions").text("click spin to start");
    }

    //stop auto spins by click
    $(".btn--stop").click(stopSpins);

    //interval for auto spins
    function spinsOn(spinsConter){
        $('.btn--auto').addClass('hide');
        $('.btn--stop').removeClass('hide');
        $('.bottomBar__start-list').addClass('hide');
        
        doSpins();
        spinsInterval = setInterval(doSpins,3000);
    }

    var spins = $("[data-count]");
    var spinsConter;
    var spinsInterval;

    //start auto spins by click
    spins.on("click", function(event){
        event.preventDefault();
        spinsConter = $(this).data('count');
        spinsOn(spinsConter);
    });

    //disable element on
    function disableElementsOn(){
        $('.btn--info').children().addClass('opacityOn');
        $('.btn--info').addClass('disabled');
        $('.btn--minus').children().addClass('opacityOn');
        $('.btn--minus').addClass('disabled');
        $('.btn--plus').children().addClass('opacityOn');
        $('.btn--plus').addClass('disabled');
        $('.turbo__label-text').addClass('opacityOn');
        $('.bottomBar__turbo').addClass('disabled');
        $('.turbo__label').addClass('disabled');
        $('.btn--auto').children().addClass('opacityOn');
        $('.btn--auto').addClass('disabled');
    }

    //disable elements off
    function disableElementsOff(){
        $('.btn--info').children().removeClass('opacityOn');
        $('.btn--info').removeClass('disabled');
        if(betValue!=0.15){
            $('.btn--minus').children().removeClass('opacityOn');
            $('.btn--minus').removeClass('disabled');
        }
        if(betValue!=300){
            $('.btn--plus').children().removeClass('opacityOn');
            $('.btn--plus').removeClass('disabled');
        }
        $('.turbo__label-text').removeClass('opacityOn');
        $('.bottomBar__turbo').removeClass('disabled');
        $('.turbo__label').removeClass('disabled');
        $('.btn--auto').children().removeClass('opacityOn');
        $('.btn--auto').removeClass('disabled');
        $('.btn--start').data('active', 'no');
    }

    //change arrows to stop on start button
    function changeStartButtonLogoToStop() {
        $('.bottomBar__start-button-logo').prop('src', 'build/images/bottomBar/start_stop_dark.png');
        $('.bottomBar__start-button-logo').prop('height', '60');
        $('.bottomBar__start-button-logo').removeClass('rotate-arrows');
    }

    //change stop to arrows on start button
    function changeStartButtonLogoToArrows() {
        $('.bottomBar__start-button-logo').prop('src', 'build/images/bottomBar/start_arrows_dark.png');
        $('.bottomBar__start-button-logo').prop('height', '93');
        $('.bottomBar__start-button-logo').addClass('rotate-arrows');
    }

    var timeoutCounterLogo, timeoutCounterElements;

    //start spin by start button click
    $('.btn--start').click(function(){
        if($('.btn--start').data('active')=='no'){
            $('.btn--start').data('active', 'yes');
            $('.btn--start').addClass('disabled');
            $('.bottomBar__start-effect').addClass('bottomBar__start-effect-opacity');
            setTimeout(function(){
                $('.btn--start').removeClass('disabled');
                $('.bottomBar__start-effect').removeClass('bottomBar__start-effect-opacity');
            }, 1000);
            changeStartButtonLogoToStop();
            timeoutCounterLogo = setTimeout(changeStartButtonLogoToArrows, 3000);
            
            disableElementsOn();
            timeoutCounterElements = setTimeout(disableElementsOff, 3000);
        } else {
            clearTimeout(timeoutCounterLogo);
            clearTimeout(timeoutCounterElements);
            $('.btn--start').addClass('disabled');
            $('.bottomBar__start-effect').addClass('bottomBar__start-effect-opacity');
            setTimeout(function(){
                $('.btn--start').removeClass('disabled');
                $('.bottomBar__start-effect').removeClass('bottomBar__start-effect-opacity');
                changeStartButtonLogoToArrows();
                disableElementsOff();
            }, 500);
            
        }
    });

});