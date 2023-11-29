//监听popup的消息，并返回响应
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "save") {
    const url = window.location.href;
    sendResponse("当前页面的URL是：" + url);
  }
});