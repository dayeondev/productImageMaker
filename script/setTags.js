// 폼 불러오기
const form = document.querySelector(".js-form");
// 입력 값
const input = form.querySelector("input");

const setTags = document.querySelector(".js-setTags");

// productName localStorage
const PN_LS = "productName";
// showing className
const SHOWING_CN = "showing"


function handleSubmit(event){
    event.preventDefault(); // submit이 발생했을 때 기본 동작을 방지
    const pnValue = input.value; // input에서 값 가져오기
    paintNames(pnValue); // 방금 가져온 값을 이름을 보여주는 함수에 전달
    localStorage.setItem(PN_LS, pnValue); // localStorage에 이름 저장
}

function askForNames(){
    form.classList.add(SHOWING_CN); // 이름을 물어보는 input 태그 보여주기
    form.addEventListener("submit", handleSubmit); // submit이 발생했을 경우(엔터가 눌릴 경우)에 handleSubmit을 실행
}

// 숨겨둔 h4태그 켜기
function paintNames(prodName){
    form.classList.remove(SHOWING_CN); // 입력 상자를 안보이게
    setTags.classList.add(SHOWING_CN); // 출력 상자를 보이게
    setTags.innerText = `hello ${prodName}`; // h4 태그 사이의 글자를 저장된 값으로 지정   
}

function loadNames(){
    const productName = localStorage.getItem(PN_LS); // localStorage에서 PN_LS로 저장된 value 가져오기
    if (productName === null)
    {   // 저장된 이름이 없는 경우 실행
        askForNames(); // 이름 물어보기
    }
    else
    {   // 이름이 저장되어 있는 경우 실행
        paintNames(productName); // 이름 보이기
    }

}

function init(){
    loadNames();
}

init();