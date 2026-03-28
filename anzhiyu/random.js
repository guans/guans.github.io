var posts=["2026/03/29/这是一篇新的博文20260329/","2026/03/28/这是一篇新的博文/","2026/03/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };