let wrapper = document.querySelector('.wrapper');
//containerDiv wraps imageDiv and imageInfoDiv
let containerDiv = document.querySelector('.container_div');

let imageDiv = document.querySelector('.image_div');
let infoP = document.querySelectorAll('.display_info');
let imageDivs = document.querySelectorAll('.image_div');
let imageInfoDiv = document.querySelector('.image_info_div');


const showInfo = n => {
    let infoIndex = n;
    let infoP = document.querySelectorAll('.display_info');

    for(i = 0; i < infoP.length; i++){
    infoP[i].style.display = "none";
    }

    console.log("infoIndex", infoIndex);
    infoP[infoIndex].style.display = "block";

}

const currentInfo = n => {
    showInfo((infoIndex = n))
}

function displayImage() {
    arrayData.forEach((info, index) => {
        containerDiv.insertAdjacentHTML("beforeend",
            `<div class="image_div">
             <span class = "everyImage" >
             <img src = "images/${info.src}" alt = "${info.alt}" id = "${index}" onclick = "currentInfo(${index})"> </span>
             <p class="display_info">${info.firstName}</p>
             </div>`
        )
    })
}

displayImage()

/* console.log(imageDivs);
function displayImage2() {
    imageDivs.forEach((eachImgDiv, imgIndex) => {
        eachImgDiv.addEventListener('click', () => {
            arrayData.forEach((info, dataIndex) => {
                if (imgIndex == dataIndex) {
                    console.log("check index", info.firstName,"img Index:", imgIndex, "data Index : ",dataIndex);
                }
            })
        })

    })
}

displayImage2();

imageDivs.forEach(eachImgDiv => {
    console.log(eachImgDiv.id);
    eachImgDiv.addEventListener('mouseover', () => {
        arrayData.forEach((info, index) => {});
    })
}) */