window.onload = () => {
    const ws = new WebSlides({
        loop: false,
        nav: true,
        showIndex: false
    });
    document.getElementById("email").addEventListener("click", clickLink);
    document.getElementById("linkedin").addEventListener("click", clickLink);
    document.getElementById("twitter").addEventListener("click", clickLink);
    document.getElementById("instagram").addEventListener("click", clickLink);
}

console.log("Welcome to my site!");
console.log("Email me at marissa.halpert@gmail.com");
console.log("How do I navigate this website?!");
console.log("←: Go to previous slide.");
console.log("→: Go to the next slide.");
console.log("Page Up: Go to the previous slide.");
console.log("Page Down: Go to the next slide.");
console.log("Space: Go to the next slide.");
console.log("Shift + Space: Go to the previous slide.");
console.log("Home: Go to the first slide.");
console.log("End: Go to the last slide.");
console.log("f: Toggle fullscreen mode.");


function clickLink() {
    window.DD_RUM && DD_RUM.addUserAction('link', { linkText: this.id, linkUrl: this.href });
}