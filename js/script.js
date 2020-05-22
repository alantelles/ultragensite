/*
var jsonCall = document.getElementById('json-res-call');
var jsonCode = document.getElementById('json-res-area');
jsonCall.addEventListener('click', function () {
    jsonCode.style.setProperty('display', 'block');
})
*/
var shown = "hello-world-code"
var suffix = "-code"
var codeTogglers = document.querySelectorAll(".code-toggler")
for (let i = 0; i < codeTogglers.length; i++) {
    let elem = document.getElementById(codeTogglers[i].id)
    elem.addEventListener("click", function() {
        let code_id = codeTogglers[i].id + suffix
        let code = document.getElementById(code_id)
        let isHidden = getComputedStyle(code).display == "none"
        if (isHidden) {
            if (shown != "") {
                let codeShown = document.getElementById(shown)
                codeShown.style.setProperty('display', 'none')
            }
            code.style.setProperty('display', 'block')
            shown = code_id
        }
        else
            code.style.setProperty('display', 'none')
    })
}