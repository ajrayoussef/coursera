 $(document).ready(function(){
     console.log('loaded');
            $("#mycarousel").carousel({interval:2000});

            $("#carouselButton").click(function(){
                        console.log('c button licked')
                    if($("#carouselButton").children("span").hasClass("fa-pause")){

                        $("#mycarousel").carousel('pause');
                        $("#carouselButton").children("span").removeClass("fa-pause").addClass("fa-play");
                    
                    }
                    else if($("#carouselButton").children("span").hasClass("fa-play")){

                        $("#mycarousel").carousel('cycle');
                        $("#carouselButton").children("span").removeClass("fa-play").addClass("fa-pause");

                    }

                });

                $("#reserveButton").click(function(){
                        $("#formModal").modal('toggle');
                });

                $("#loginBtn").click(function(){
                    $("#loginModal").modal('toggle');
                })


            // $("#carousel-pause").click(function(){
               
            //     $("#mycarousel").carousel('pause')
            // });
            // $("#carousel-play").click(function(){
            //     $("#mycarousel").carousel('cycle')
            // });
        })