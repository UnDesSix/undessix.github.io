var properties = ["--color-1", "--color-2", "--color-3", "--color-4", "--color-5", "--color-6", "--color-7", "--color-8", "--bg-color-1", "--bg-color-2"];
var colorsDark = ["white", "white", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.75)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.1)", "#f8f9fa", "#f8f9fa",  "37, 37, 37", "rgb(32, 33, 34)"];
var colorsLight = ["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.55)", "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.1)", "#252525", "#212529",  "248, 249, 250", "rgb(255, 255, 255)"];


function changeTheme(reload) {
    let root = document.querySelector(':root');
    
    if (getComputedStyle(root).getPropertyValue(properties[0]) == 'white') {
      for (let i = 0; i < properties.length; i++) {
        root.style.setProperty(properties[i], colorsLight[i]);
      }
      addCookie("color-theme", "light");
    }
    else
    {
      for (let i = 0; i < properties.length; i++) {
          root.style.setProperty(properties[i], colorsDark[i]);
        }
      addCookie("color-theme", "dark");
    }
    if(reload)
        location.reload();
  }

  function applyTheme(theme) {
    let root = document.querySelector(':root');
    
    if (theme == 'dark') {
      for (let i = 0; i < properties.length; i++) {
        root.style.setProperty(properties[i], colorsDark[i]);
        
      }
    }
    else
    {
      for (let i = 0; i < properties.length; i++) {
          root.style.setProperty(properties[i], colorsLight[i]);
        }
    }
  }

function restoreCookies() {
    if (!document.cookie)
        return ;
    const cookies = getCookie("color-theme");
    if (cookies)
        applyTheme(cookies);
}

function addCookie(ckey, cvalue) {
    const valid_day = 2;

    var expire_date = (new Date(Date.now()+ valid_day * 24 * 60 * 60 * 1000)).toUTCString();
    document.cookie= ckey + "=" + cvalue + ";path=/" + ";expires=" + expire_date + "; SameSite=None; Secure";
 }

 function getCookie(ckey) {
    var match = document.cookie.match(new RegExp('(^| )' + ckey + '=([^;]+)'));
    if (match)
        return match[2];
    return null;
 }

 window.onload = restoreCookies();
