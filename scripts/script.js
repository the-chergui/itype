
function afficherResultat(score,nombreDeMot)
{
    //console.log("Score : " + score +" sur " + nombreDeMot);
    let span=`${score} / ${nombreDeMot}
    `
    let scoreSpan= document.querySelector(".zoneScore span");
    scoreSpan.innerText=span;

}
function afficherProposition(proposition)
{
    //console.log("Score : " + score +" sur " + nombreDeMot);
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText=proposition;

}
function afficherEmail(nom,email,score)
{
    let mailto=`mailto:${email}+?subject=Partager score sur Azertype&body= Salut, je suit ${nom} et mon score sur le site Azertype est ${score}`;
    location.href=mailto;
}
function verifierChamp(balise)
{
    if(balise.value ==="" || balise.value.length <2)
    {
        throw new Error("Le nom est tres petit");
        
    }
}
function verifierEmail(balise)
{   
    emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(!emailRegExp.test(balise.value))
    {
        throw new Error("L'email est non valide");
    }
}
function afficherMessageErreur(message)
{   
    let spanMessageErreur = document.getElementById("messageErreur");
    if(!spanMessageErreur)
    {
        let popup=document.querySelector(".popup");
        spanMessageErreur=document.createElement("span");
        spanMessageErreur.id="messageErreur";
        popup.append(spanMessageErreur);
    }
    spanMessageErreur.innerText=message;
}

function gererFormulaire(scoreEmail)
{
     
    try{
    let baliseNom=document.getElementById("nom");
    let baliseEmail=document.getElementById("email");
    let nom=baliseNom.value;
    let email=baliseEmail.value;
    verifierChamp(baliseNom);
    verifierEmail(baliseEmail);
    afficherEmail(nom,email,scoreEmail);
    afficherMessageErreur("");
    }catch(erreur){
        afficherMessageErreur(erreur.message);

    }

    /*baliseNom.classList.remove("erreur");
    baliseEmail.classList.remove("erreur");
    baliseNom.classList.add("erreur");
    baliseEmail.classList.add("erreur");*/

    
}

function lancerJeu()
{
    let btnValider =document.getElementById("btnValiderMot");
    let inputEcriture= document.getElementById("inputEcreture");
    let i=0,score=0;
    let listPropoition =listMot;
    afficherProposition(listPropoition[i]);
    let listBtmRadio=document.querySelectorAll(".optionSource input");
    for(let index=0;index<listBtmRadio.length;index++){
        listBtmRadio[index].addEventListener("change", (event) =>{
            if(event.target.value === "1"){
                listPropoition=listMot;
                
            }else{
                listPropoition= listPhras;
            }
            
            afficherProposition(listPropoition[i]);
        })  
    }
    btnValider.addEventListener("click",() =>
    {
        if(inputEcriture.value===listPropoition[i]){
            score++;
        }
        i++;
        afficherResultat(score,i);
        if(listPropoition[i]===undefined){
            afficherProposition("Le jeu est terminé");
            btnValider.disabled = true;
        }else{afficherProposition(listPropoition[i]);}  
        inputEcriture.value='';
    });
    let form=document.querySelector(".popup form");
    form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let scoreEmail = `${score}/${i}`;
    gererFormulaire(scoreEmail);
    })  
}

//if(choisirPhrasesOuMots() === "mots"){
//lancerBoucleDeJeu(listMot);
//} else {
//lancerBoucleDeJeu(listPhras);
//}

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
