document.getElementById("saveBtn").addEventListener("click", () => {
  //发送消息给content-script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "save" }, (response) => {
      const h3Doc = document.querySelector("h3");
      h3Doc.innerText = response;
      console.log("收到来自content-script的回复：" + response);
    });
  });
});
