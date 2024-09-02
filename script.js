document.getElementById('analyzeButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    const issues = [];
    const hints = [];
    
    issues.push("First of all why trust a random website for help.");
    hints.push("USE CHATGPT, might save you time and money. Chatgpt made this page");
    
    document.getElementById('issues').textContent = issues.length > 0 ? issues.join('\n') : "No issues found.";
    document.getElementById('hints').textContent = hints.length > 0 ? hints.join('\n') : "No hints available.";
});
