document.getElementById("saveBtn").addEventListener("click", async () => {
  //发送消息给content-script
  const response = await sendMessage("save");
  console.log("收到来自content-script的回复：" + response);
  const h3Doc = document.querySelector("h3");
  h3Doc.innerText = response;
});

const sendMessage = async (action) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const response = await chrome.tabs.sendMessage(tab.id, { popupAction: action });

  return response;
};
