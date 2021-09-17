var randomNo1;
randomNo1=Math.random()*6+1;
randomNo1=Math.floor(randomNo1);
var randomNo2;
randomNo2=Math.random()*6+1;
randomNo2=Math.floor(randomNo2);
var image1="images/dice"+randomNo1+".png";
var image2="images/dice"+randomNo2+".png";
document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);
if(randomNo1>randomNo2)
{
    document.querySelector(".container h1").innerHTML="⛳Player 1 wins";
}
else if(randomNo2>randomNo1)
{
    document.querySelector(".container h1").innerHTML="Player 2 wins⛳";
}
else if(randomNo1==randomNo2)
{
    document.querySelector(".container h1").innerHTML="Draw!";
}