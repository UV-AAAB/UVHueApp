export function execute() {

    let settingchange = document.querySelector(".individual__setting")



    localStorage.setItem("1", ".white__bg");



    settingchange.addEventListener("click", change)


    function change(e) {


        e.target.classList.toggle("white__bg");
        console.log(localStorage)
    }





}
