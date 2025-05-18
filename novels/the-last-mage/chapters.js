
function generateChapters(title, count) {
    const container = document.getElementById("chapter-list");
    for (let i = 1; i <= count; i++) {
        const link = document.createElement("a");
        link.href = `chapter${i}.html`;
        link.textContent = `Chapter ${i}`;
        link.className = "chapter-link";
        container.appendChild(link);
    }
}
