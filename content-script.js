const style = `<style>
  .octicon-git-pull-request.color-fg-open {
    border: 3px solid #30a14e;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
</style>`
document.querySelector(`head`).insertAdjacentHTML('beforeend', style);
document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains("octicon-git-pull-request") && event.target.classList.contains("color-fg-open")) {
    const q = document.getElementById("js-issues-search");
    if (q != null) {
      if (!q.value.includes("-is:draft")) {
        q.value = q.value + " -is:draft";
      }
      q.parentElement.submit();
    }
  }
});

