function xinChao(ten,tuoi) {
    console.log("xin chào các bạn tôi tên là: " + ten + ", tuổi: " + tuoi);
}

xinChao("Hồng", 20)
xinChao("Nam", 21)


function tinhDiemTrungBinh(tenSV, toan, ly, hoa) {
    let diemTB = (toan + ly + hoa) / 3;
    console.log("Điểm trung bình của" + tenSV + " là " + diemTB);
    
    console.log(`Điểm trung bình của ${tenSV} là ${diemTB}`)

}
tinhDiemTrungBinh("Nhân", 2, 5, 8);
//bai2
function chaoBan(ten,thoi_gian) {
     if (0 < thoi_gian && thoi_gian< 11) {
        console.log("Chào buổi sáng");
     } 


     if (12 < thoi_gian && thoi_gian < 17) {
        console.log("Chào buổi sáng")
     }


     if (18 < thoi_gian && thoi_gian < 23) {
        console.log("Chào buổi sáng")
     }

}
chaoBan("Hân", 22)
chaoBan("Nam", 18)
chaoBan("!!", 12)

function soSanhDoDaiTen(ten1, ten_2) {
``
}

soSanhDoDaiTen("Thanh Nhàn", "Công quý")

function randomTu1Den10() {

    console.log(Math.round( Math.random() * 10 ));
}
randomTu1Den10()

function tinhDiemTrungBinh( score_1, score_2, score_3) {
    let diemTB = (score_1 + score_2 + score_3) / 3;
    console.log(Math.round(diemTB ));
    
}
tinhDiemTrungBinh(2,3,4);


console.log('---------run-----') 
setTimeout(function () {
    console.log('Mã nguồn đã được chạy sau 10s')
}, 10000)

setInterval(function () {
    console.log('1s')
}, 10000)