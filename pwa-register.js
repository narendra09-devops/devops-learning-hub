if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const base = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "/"
      : "/devops-learning-hub/";

    navigator.serviceWorker.register(`${base}service-worker.js`, { scope: base })
      .catch((error) => console.warn("Service worker registration failed", error));
  });
}
