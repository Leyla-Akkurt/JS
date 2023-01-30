//personName should be declerade in function scope otherwise canPlay function can't used this variable. Local variables can be used in their scope. 
function canPlay() { 
    let sport = " Football";
    let personName="Cosimo";
    console.log(personName + sport); }
    canPlay();