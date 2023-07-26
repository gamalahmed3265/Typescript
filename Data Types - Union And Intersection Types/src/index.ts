type A={
    one:string,
    two:boolean,
    three:number
}
type B=A& {
    four:boolean
}
type C={
    five:string
}
type mix=A &C

function getActions(btn:mix) {
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.five}`);
    
}

getActions({one: "jjjf",two:false,three:32,five:"ee"})