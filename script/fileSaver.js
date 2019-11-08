// $(function(){

//     $(".saveButton").click(function() { 
 
//          html2canvas($(".main"), {
 
//              onrendered: function(canvas) {
 
//                  canvas.toBlob(function(blob) {
 
//                      saveAs(blob, 'image.png');
 
//                  });
 
//              }
 
//          });
 
//      });
 
//  });

// $('.saveButton').click((e) => {
//     html2canvas(document.querySelector(".main")).then(canvas => {
//       // jsPDF 객체 생성 생성자에는 가로, 세로 설정, 페이지 크기 등등 설정할 수 있다. 자세한건 문서 참고.
//       // 현재 파라미터는 기본값이다 굳이 쓰지 않아도 되는데 저것이 기본값이라고 보여준다.
//     //   var doc = new jsPDF('p', 'mm', 'a4');
  
//       // html2canvas의 canvas를 png로 바꿔준다.
//       var imgData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기
  
//       // image 추가
//       doc.addImage(imgData, 'PNG', 0, 0);
  
//       // pdf로 저장
//       doc.save('sample-file.pdf');
//     });
//   });
  
