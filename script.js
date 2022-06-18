const takeInput = () => {
    var searchBar = document.querySelector(".search-bar").addEventListener("input", (e) => {
        var currentOutput = e.target.value
        var outputBar = document.querySelector(".output-text");
        outputBar.innerHTML = currentOutput;
    });
}
takeInput();