<template>
  <div id="editor">
    <textarea v-bind:value="input" v-on:input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
export default {
  name: "MarkEditor",
  data() {
    return {
      input: `Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF
  
  ### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
  `
    };
  },
  methods: {
    // 函数节流/防抖
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 500)
  },
  computed: {
    // 将左边的输入字符转成md文档
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  }
};
</script>
