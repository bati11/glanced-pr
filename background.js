function exec() {
  const icons = document.querySelectorAll(".octicon-git-pull-request.open");
  if (icons == null) return;
  for (let icon of icons) {
    icon.style.border = "3px solid #30a14e";
    icon.style.width = "30px";
    icon.style.height = "30px";
  }
}

const filter = {
  url: [
    {
      urlMatches: "https://github.com/",
    },
  ],
};

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    function: exec
  });
}, filter);

