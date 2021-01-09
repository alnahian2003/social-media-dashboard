var toggleSwitch = document.querySelector("#toggleSwitch");

function themeSwitcher() {
    if (toggleSwitch.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        // Add Light Theme in LocalStorage
        localStorage.setItem("theme", "light")
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.removeItem("theme");
    }
}

toggleSwitch.addEventListener("click", function () {
    themeSwitcher();
})

// Get Theme From Local Storage while Toggle Switch is Clicked
function latestTheme() {
    if (localStorage.getItem("theme")) {
        document.body.classList.add('light');
        toggleSwitch.checked = true;
    }
}

latestTheme();