/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {

    $("#auto_list").hover(function () {
        $("#bottomBar__start-list").css({
            "max-height":"192px"
        });
    });

    $("#bottomBar__start-list").hover(function () {
        $(this).css({
            "max-height":"192px"
        });
    });

    $("#bottomBar__start-list").mouseleave(function () {
        $(this).css({
            "max-height":"0px"
        });
    });

    $("#auto_list").mouseleave(function () {
        $("#bottomBar__start-list").css({
            "max-height":"0px"
        });
    });

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

    var audioClick = document.getElementById('audioClick');

    function fPlay() {
        audioClick.currentTime = 0;
        audioClick.play();
    }

    $(".clickAudio").on("click", function (event) {
        fPlay();
    });

    var betCounter = $('.bottomBar__display-total');
    var betValue = parseFloat(betCounter.text().slice(1));
    var coinCounter = $('.bottomBar__luck-coin-total');
    var coinValue = parseFloat(coinCounter.text().slice(1));

    function lessBet(betLess, coinLess){
        betValue = betValue - betLess;
        betValue = Math.round((betValue)*100)/100;
        betCounter.text('¥'+betValue);

        coinValue = coinValue - coinLess;
        coinValue = Math.round((coinValue)*100)/100;
        coinCounter.text('¥'+coinValue);
    }

    function moreBet(betMore, coinMore){
        betValue = betValue + betMore;
        betValue = Math.round((betValue)*100)/100;
        betCounter.text('¥'+betValue);

        coinValue = coinValue + coinMore;
        coinValue = Math.round((coinValue)*100)/100;
        coinCounter.text('¥'+coinValue);
    }

    $('.bottomBar__minus').click(function(){
        if(betValue==300){
            lessBet(150,10);
            $('.btn--plus').prop('disabled', false);
        }
        else{
            if(betValue==150){
                lessBet(30,2);
            }
            else{
                if(betValue==120){
                    lessBet(45,3);
                }
                else{
                    if(betValue==75){
                        lessBet(30,2);
                    }
                    else{
                        if ((betValue<=45)&&(betValue>15)){
                            lessBet(15,1);
                        }
                        else{
                            if(betValue==15){
                                lessBet(3,0.2);
                            }
                            else{
                                if(betValue==12){
                                    lessBet(4.5,0.3);
                                }
                                else{
                                    if(betValue==7.5){
                                        lessBet(3,0.2);
                                    }
                                    else{
                                        if ((betValue<=4.5)&&(betValue>1.5)){
                                            lessBet(1.5,0.1);
                                        }
                                        else{
                                            if(betValue==1.5){
                                                lessBet(0.3,0.02);
                                            }
                                            else{
                                                if (betValue==1.2){
                                                    lessBet(0.45,0.03);
                                                }
                                                else{
                                                    if (betValue==0.75){
                                                        lessBet(0.3,0.02);
                                                    }
                                                    else{
                                                        if ((betValue<=0.45)&&(betValue>0.15)){
                                                            lessBet(0.15,0.01);

                                                            if(betValue==0.15){
                                                                    $('.btn--minus').prop('disabled', true);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    $('.bottomBar__plus').click(function(){
        if((betValue>=0.15)&&(betValue<0.45)){
            moreBet(0.15, 0.01);

            $('.btn--minus').prop('disabled', false);
        }
        else{
            if(betValue==0.45){
                moreBet(0.30, 0.02);
            }
            else{
                if(betValue==0.75){
                    moreBet(0.45, 0.03);
                }
                else{
                    if(betValue==1.2){
                        moreBet(0.30, 0.02);
                    }
                    else{
                        if((betValue>=1.5)&&(betValue<4.5)){
                            moreBet(1.5, 0.1);
                        }
                        else{
                            if(betValue==4.5){
                                moreBet(3, 0.2);
                            }
                            else{
                                if(betValue==7.5){
                                    moreBet(4.5, 0.3);
                                }
                                else{
                                    if(betValue==12){
                                        moreBet(3, 0.2);
                                    }
                                    else{
                                        if((betValue>=15)&&(betValue<45)){
                                            moreBet(15, 1);
                                        }
                                        else{
                                            if(betValue==45){
                                                moreBet(30, 2);
                                            }
                                            else{
                                                if(betValue==75){
                                                    moreBet(45, 3);
                                                }
                                                else{
                                                    if(betValue==120){
                                                        moreBet(30, 2);
                                                    }
                                                    else{
                                                        if(betValue==150){
                                                            moreBet(150, 10);

                                                            if(betValue==300){
                                                                $('.btn--plus').prop('disabled', true);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
        
    });


});