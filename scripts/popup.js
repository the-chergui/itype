function afficherPopup(){
    let popupBackgrouns=document.querySelector(".popupBackground");
    popupBackgrouns.classList.add("active");

}
function cacherPopup()
{
    let popupBackground=document.querySelector(".popupBackground")
    popupBackground.classList.remove("active");
}
function initEventListenerPopup()
{
   let btnPartager= document.querySelector(".zoneDePartage button");
   let popupBackground = document.querySelector(".popupBackground");
   btnPartager.addEventListener("click", () => {
    afficherPopup();
   })
   popupBackground.addEventListener("click", (event) => {
    if(event.target === popupBackground)
    {
        cacherPopup();
    }
   })
   
}
initEventListenerPopup();