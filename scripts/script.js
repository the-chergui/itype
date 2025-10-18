function afficherResultat(score,nombreDeMot)
{
    console.log("Score : " + score +" sur " + nombreDeMot);
}
function choisirPhrasesOuMots()
{
    let choice=prompt("Choisir le mode de jeux : mots ou phrases");
    while(choice !== "mots" && choice !== "phrases")
    {
    choice=prompt("Choisir le mode de jeux : mots ou phrases");
    }
    return choice;

}
function lancerBoucleDeJeu(listJeux)
{
    let i=0,a=true;
    while(a===true && i<listJeux.length){
    let testUtilisateur=prompt("Entrer le mot : " +listJeux[i])
    switch(testUtilisateur){
        case listJeux[i]:
            i+=1;
            break
        default:
            a=false;
    }}
    afficherResultat(i,listJeux.length);
}
function lancerJeu()
{
if(choisirPhrasesOuMots() === "mots"){
lancerBoucleDeJeu(listMot);
} else {
lancerBoucleDeJeu(listPhras);
}
}


/*if(a===false){
    afficherResultat(i,listMot.length);
}
if(b===false)
{
    afficherResultat(i,listPhras.length)
}
if(i=== listMot.length || i===listPhras.length)
{
console.log("Bravo!")
}*/
