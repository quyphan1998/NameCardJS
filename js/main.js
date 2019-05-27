function getEle(id) {
    return document.getElementById(id);
}
getEle('XuatThongTin').addEventListener("click", function () {
// viet function cho nut
    getEle('ten').innerHTML=namecard.ten;
    getEle('nghe').innerHTML = namecard.nghenghiep;
    getEle('nguoitheodoi').innerHTML = namecard.nguoitheodoi;
    getEle('luotthich').innerHTML= namecard.nguoithich;
    getEle('khoahoc').innerHTML = namecard.sokhoahoc;
    getEle('icon').innerHTML = namecard.Icon;
})