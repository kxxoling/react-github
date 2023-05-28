import{j as f}from"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const h="<style>*{font-size:12px;}</style>";function r({id:e,file:t,iframeStyle:p=h}){const g=`?file=${t}`,u=`https://gist.github.com/${e}.js${t?g:""}`,i=t?`gist-${e}-${t}`:`gist-${e}`,b=`
<html>
  <head>
    <base target="_parent">
    <style>
      body {
        margin: 0;
      }
      ${p}
    </style>
  </head>
  <body  >
    <script type="text/javascript" src="${u}"><\/script>
    <script>
      const observer = new ResizeObserver(entries => {
        // HTML height may not be the same as body height, so we use the parentElement's height
        // HTML real height may be float, but clientHeight is int, so we use getBoundingClientRect to get the real height
        var htmlHeight = entries[0].target.parentElement.getBoundingClientRect().height;
        parent.document.getElementById('${i}').style.height = htmlHeight+ 'px';
      });
      observer.observe(document.body);
    <\/script>
  </body>
</html>`;return f.jsx("iframe",{width:"100%",id:i,srcDoc:b})}try{r.displayName="GitHubGist",r.__docgenInfo={description:"",displayName:"GitHubGist",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"string"}},iframeStyle:{defaultValue:{value:"<style>*{font-size:12px;}</style>"},description:"",name:"iframeStyle",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const H={title:"Components/GitHubGist",component:r,tags:["docsPage"],argTypes:{id:{control:{type:"id",default:"2ad0c832f141cd4415aa2b028f54e56a"}}}},s={args:{id:"2ad0c832f141cd4415aa2b028f54e56a"}},a={args:{id:"bcba9688047a6a4dfab06d7b87b1cb10",file:"test.md"}};var n,o,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: '2ad0c832f141cd4415aa2b028f54e56a'
  }
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'bcba9688047a6a4dfab06d7b87b1cb10',
    file: 'test.md'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["LongGist","ShortGist"];export{s as LongGist,a as ShortGist,x as __namedExportsOrder,H as default};
//# sourceMappingURL=gist.stories-197d9c32.js.map
