type str=string;

type Button={
    up:str,
    down:str,
    right:str,
    left:str,
}

function getActions(btn:Button) {
    console.log(`Action for Button Up ${btn.up}`);
    console.log(`Action for Button down  ${btn.down}`);
    console.log(`Action for Button left ${btn.left}`);
    console.log(`Action for Button right ${btn.right}`);
    
}

getActions({up:"Jump",down:"Go Down",left:"Go left",right:"right"});

type Last=Button &{
    x:boolean
}
function getActions2(btn:Last) {
    console.log(`Action for Button Up ${btn.up}`);
    console.log(`Action for Button down  ${btn.down}`);
    console.log(`Action for Button left ${btn.left}`);
    console.log(`Action for Button right ${btn.right}`);
    console.log(`Action for Button right ${btn.x}`);

}

getActions2({up:"Jump",down:"Go Down",left:"Go left",right:"right",x:false});
