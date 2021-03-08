function alretFuction() {
    
    alert ("Hey evrey body");
}

alretFuction();
var Training=prompt("What course do you want?");
while (Training !="English" && Training !="programs developer")
{
Training = prompt ("What course do you want");
}

var itemorder ="";

if (Training == "programs developer")
{
    itemorder ="<img src='de.jpg'/>";
}
else
{
    itemorder ="<img src='en.jpg'/>";
}


var numofcourse = prompt("how many courses you want?");

var result ="";

for(var i = 0;i < numofcourse; i++)
{
document.write(itemorder)
}
var printing = function () {
    for (var i = 0; i <= 4; i++) {
        document.write('Upgrade your skills' + '<br>');
        
    }
        
}
printing();