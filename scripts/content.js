//监听popup的消息，并返回响应
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.popupAction === "save") {
    const url = window.location.href;
    sendResponse("当前页面的URL是：" + url);
  }
  console.log(request);
  if (request.keyboard) {
    console.log("快捷键被触发~");
    const articleManager = new ArticleManager();
    console.log(articleManager.articleContent);
  }
});

class ArticleManager {
  constructor() {
    //获取body上的文字作为基准文本
    this.bodyContent = document.body.innerText;

    this.article = "";
    //获取article标签
    let articleDoc = document.getElementsByTagName("article");
    this.article = this.#getContent(articleDoc);

    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取class 包含article
    articleDoc = document.querySelector("[class*='article']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取 id 包含article
    articleDoc = document.querySelector("[id*='article']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取class = post
    articleDoc = document.querySelector("[class*='post']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取id = post
    articleDoc = document.querySelector("[id*='post']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取id 包含content
    articleDoc = document.querySelector("[id*='content']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }

    //获取 class 包含content
    articleDoc = document.querySelector("[class*='content']");
    this.article = this.#getContent(articleDoc);
    if (!this.#isEmpty(this.article) && this.#check(this.article)) {
      return;
    }
  }

  get articleContent() {
    return this.#isEmpty(this.article) ? this.bodyContent : this.article;
  }

  #isEmpty(text) {
    if (!text) {
      return false;
    }
    if (text == null || text == undefined) {
      return false;
    }

    if (!(text instanceof String)) {
      return false;
    }

    return text.length > 0;
  }

  #getContent(doc) {
    if (doc) {
      return doc.innerText;
    }
    return "";
  }

  #check(text) {
    if (!text) {
      return false;
    }
    const baseLength = this.bodyContent.length;

    const textLength = text.length;

    if (textLength == 0) {
      return false;
    }

    const percentage = textLength / baseLength;
    return percentage > 0.45;
  }
}

const getCurrentPageContent = () => {};

class OpenAi {
  constructor(params) {}
}

class Notion {}
