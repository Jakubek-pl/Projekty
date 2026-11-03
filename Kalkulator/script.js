const buttons = document.querySelectorAll(".buttons")
const ekran = document.querySelector(".ekran-value")
let i = 0;
let num1 ;
let num2 ;
let wynik;
 
buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
        buttons.forEach(number => {
        console.log(isNaN(wynik));
        if(isNaN(wynik) === false && e.target.textContent !== "=" && e.target.textContent !== "-/+" && e.target.textContent !== "+" && e.target.textContent !== "-"){
            ekran.textContent = "";
            wynik = NaN;
        }
        if (i < 13 && e.target.textContent !== "C" && e.target.textContent !== "+" && e.target.textContent !== "-" && e.target.textContent !== "=" && e.target.textContent !== "-/+"){
            ekran.textContent += e.target.textContent;
            i += 1;
        }else if(e.target.textContent === "-/+"){
            ekran.textContent = Number(ekran.textContent) * -1;
        }else if(e.target.textContent === "C"){
            ekran.textContent = " ";
            i = 0;
        }else if(e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "=" && i < 13){
            if (e.target.textContent === "-" || e.target.textContent === "+" ){
                num1 = Number(ekran.textContent);
                rownania = e.target.textContent
                ekran.textContent = " ";
                i = 0;
            } 
            if(e.target.textContent === "=" && isNaN(ekran.textContent) === false ){
                num2 = Number(ekran.textContent);
                console.log(isNaN(wynik))
                if(rownania === "+"){
                    wynik = num1 + num2;
                    ekran.textContent = wynik;
                }else if( rownania === "-"){
                    wynik = num1 - num2;
                    ekran.textContent = wynik;
                }
            }
        }else{
           e.stopPropagation();
        }
    })
    })
})
 