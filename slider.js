const sliderItems = [
    {
        userImg: "./img/head.png",
        comment: "Some comment on the app!"
    },
    {
        userImg: "./img/head.png",
        comment: "Another comment on the app!"
    },
    {
        userImg: "./img/head.png",
        comment: "Third comment on the app!"
    }
];

let sliderContainer, sliderButtons;
window.addEventListener('DOMContentLoaded', (event) => {
    self.sliderContainer = document.getElementById("slider-content");
    self.sliderButtons = document.querySelectorAll(".slider_button");
    renderSliderContent(0);
});

const renderSliderContent = (selectedIndex) => {
    self.sliderContainer.innerHTML = "";
    const selectedUserComment = sliderItems[selectedIndex];
    const userImage = document.createElement("img");
    userImage.src = selectedUserComment.userImg;
    const content = document.createElement("p");
    content.innerHTML = selectedUserComment.comment;
    self.sliderContainer.append(userImage, content);
    styleSliderButtons(selectedIndex);
};


const styleSliderButtons = (selectedIndex) => {
    self.sliderButtons.forEach(element => {
        element.classList.remove("slider_button--selected");
    });
    self.sliderButtons[selectedIndex].classList.add("slider_button--selected");
};