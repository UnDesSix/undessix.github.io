function getCookie(ckey) {
    var match = document.cookie.match(new RegExp('(^| )' + ckey + '=([^;]+)'));
    if (match)
        return match[2];
 }

function changeNetworkLogo (){
    let logos = document.getElementsByClassName("logo-network");

    console.log(logos)
    if (getCookie('color-theme') == 'light') {
        logos[0].setAttribute("src", "images/github-brands.svg");
        logos[1].setAttribute("src", "images/linkedin-brands.svg");
        logos[2].setAttribute("src", "images/42_Logo.svg");
    }
    else {
        logos[0].setAttribute("src", "images/github-brands-white.svg");
        logos[1].setAttribute("src", "images/linkedin-brands-white.svg");
        logos[2].setAttribute("src", "images/42_Logo_white.svg");
    }
}

changeNetworkLogo ()