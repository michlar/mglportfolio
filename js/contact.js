const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");

if (copyButton) {
  copyButton.addEventListener("click", () => {
    const email = copyButton.dataset.email;
    navigator.clipboard.writeText(email);

    copyStatus.textContent = "Copied!";
    
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 1200);
  });
}