const toggleSwitch = document.querySelector('.switch  input[type="checkbox"]');


toggleSwitch.addEventListener('click', switchButton, false);

function switchButton(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function switchButton(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    } 
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', JSON.stringify('dark'));
    }
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', 'currentTheme');

    if (currentTheme === 'light'){

        toggleSwitch.checked = true;
    }
}
