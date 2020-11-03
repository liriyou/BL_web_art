$(document).ready(function(){

    
    let fontSize = 40;
    
    $("#box").on("click", function(){
        console.log("i was clicked in jq")
        addTheNumbers(10,20);
    
     $("body").css('background','white');
    
     $(this).css('font-size',fontSize);
        fontSize += 1;

        $("#box").addClass('my-special-rotate-class')

     })
//  
    // function addTheNumbers(num1,num2)
    // {
    //     let sum = num1+num2;
    //     console.log(sum);
    // }

    // function printoutsome(num1,num2,num3){
    //     let ans = num1*num2+num3
    //     console.log("ans")
    // }
    
       
})




    // let shouldAddText = True;
    $(document).on('wheel', function(){
        console.log("scrolling happned!")
        
        let coolBox = `<div class="cool-box"></div>`;

        let amountScrolled = $(document).scrollTop()

        console.log("scroll"+amountScrolled);
        
        if(amountScrolled >2000 && shouldAddText == true){
            $('body').css('background','pink');
            let p = `<p calss="some-text">"""""some text"""""""</p>`;

            $('body').append(p);
            $('.some-text').css('top',`${amountScrolled+400}px`);
            // shouldAddText = false;
        }
       

        $('body').append(coolBox);
    })


    setInterval(function(){
        let coolBox = `<div class="cool-box"></div>`;
        
        $('body').append(coolBox);

        let randomR = Math.floor(Math.random()*256);
        let randomG = Math.floor(Math.random()*256);
        let randomB = Math.floor(Math.random()*256);

        $('.cool-box').css('background',`rgb(${randomR},${randomG},${randomB})`)

    },100)

    setTimeout(function(){

        // alert('it has been 3s')

    },3000)

let mycoolBox = document.getElementById("box");

mycoolBox.addEventListener("click", function(){
    console.log("i was clicked");
})