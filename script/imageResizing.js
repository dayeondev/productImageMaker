// $(document).ready(function(){
//     $('.mainImage').resizable();
// });

// 이미지 불러오기
// https://codeday.me/ko/qa/20190311/24118.html
// https://codeday.me/ko/qa/20190311/24118.html

document.querySelector(".getFile").onchange = function () {
    
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.querySelector(".mainImage").src = e.target.result;
        
        document.querySelector(".mainImage").classList.add("showing");
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};
