enum kids{
    five=25,
    seven=20,
    ten=15
}

enum Level{
    kid=kids.five,
    easy=9,
    medium=kids.seven-3,
    hard=3
}

const getLevel=()=>`the level is ${Level.kid}`