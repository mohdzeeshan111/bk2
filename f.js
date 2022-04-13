document.getElementById("music").style.display = "none";
var alarmaudio = document.getElementById("music");
var voiceMessage = document.getElementById("voicemessage");
window.onload = voiceMessage.play();

var i = 0;

var txt1 = ["Happy birthday BUSHRA,may Allah SWT always bless you endlessly with happiness,success,wealth and satisfaction. keep smiling like this",
    " ",
    "Hey BUSHRA, this is for you and only you and I mean it from bottom of my heart.",
    "You already know how much you mean to me. I always thank Allah SWT for sending you in my life. Thanks for coming in my life and realising me that i too have a heart which loves and someone and needs love. You understood me when no one did. You are the best thing happened in my life after i was born to my parents. Because of you i have found the best version of me. From being careless to being mature, from never listening to anyone to waiting to listen your voice, from rude to lovable. Always thought money is enough to live in this world but when I met you I was wrong it's not money it's a person or moment or memories with her you can't live happy life with even billion dollars but you can live satisfied life with that one memory of your loved ones. A big big big thanks to you from bottom of my heart for proving me wrong and showing this beautiful view of life. I don't know you will be my best half or not but you are definitely my best person of my life in this world. Ik we fight alot may be cause of understanding but every fight we come back we don't take it to ego or something else isn't it enough to be with someone whole life.   'I WILL BE THERE FOR YOU NO MATTER WHAT MAY BE AGAINST THE ODD TOO.'",
    ""
];



var speed = 50;
function typeWriter(val) {

    const textData = txt1[val];
    if (i < textData.length) 
    {
        // console.log(textData.length);

        document.getElementById("demo").innerHTML += textData.charAt(i);
        i++;
        setTimeout(() => {

            typeWriter(val);
       }, speed);
    }
    else
     {
              setTimeout(() =>{
                i = 0;
                document.getElementById("demo").innerHTML += " <br> ";
                val++;
                typeWriter(val);
              },speed);
          }
    }

    document.getElementById("clickme").onclick = function(){
        alarmaudio.currentTime = 1;
        alarmaudio.play();
        typeWriter(0);
        document.getElementById("clickme").style.display ="none";
        document.getElementById("demo").style.marginTop= "-50px";
        document.getElementsByTagName("h3")
        document.getElementById("headingtext").innerText = "Happiest Birthday BUSHRA KHAN ❤️🌎";
        setInterval(function(){
            document.getElementById("thank-you").style.display="block";
            alarmaudio.pause();
        },46300);
    }