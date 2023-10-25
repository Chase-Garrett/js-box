const butInstall = document.getElementById("buttonInstall");
let deferredPrompt = null;

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  if (!deferredPrompt) {
    return;
  }
  // Show the install prompt.
  deferredPrompt.prompt();
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", () => {
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
});
