// if문 (if statement)

// let temperature = 0;

// if (temperature <= 0) {  //조건부분
//     console.log('물이 업니다.') //동작부분
// } else {
//     console.log('물이 얼지 않습니다.');
// }

//실습 문제

function checkHeight(height) {
	if (height >= 140){
        console.log('탑승이 가능합니다.')
    } else {
        console.log('탑승이 불가능합니다.')
    }
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);