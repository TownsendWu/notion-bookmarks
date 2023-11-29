chrome.commands.onCommand.addListener(async (command) => {
  console.log(`Command "${command}" triggered`);
  const tab = await getCurrentTab();

  await chrome.tabs.sendMessage(tab.id, { keyboard: true, url: tab.url });
});

const getCurrentTab = async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  return tab;
};
