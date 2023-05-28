import{j as e}from"./jsx-runtime-ccada58e.js";import{r as a}from"./index-f1f749bf.js";import{S as h}from"./link-8f913a1f.js";import"./_commonjsHelpers-042e6b4d.js";const u=t=>a.createElement("svg",{className:"octicon octicon-mail",viewBox:"0 0 16 16",width:16,height:16,"aria-hidden":"true",...t},a.createElement("path",{d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})),g=t=>a.createElement("svg",{text:"muted","aria-hidden":"true",height:16,viewBox:"0 0 16 16",width:16,"data-view-component":"true",className:"octicon octicon-people",...t},a.createElement("path",{d:"M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"})),f=t=>a.createElement("svg",{className:"octicon octicon-location rgh-seen-9762032693",viewBox:"0 0 16 16",width:16,height:16,"aria-hidden":"true",...t},a.createElement("path",{d:"m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"}));function v(){return e.jsx("div",{children:"user is loading..."})}const l={width:"16px",fill:"currentColor"};function i({username:t}){const c=`https://api.github.com/users/${t}`,[s,m]=a.useState(null);return a.useEffect(()=>{async function x(){const p=await(await fetch(c)).json();m(p)}x().catch(()=>{})},[c]),s?e.jsxs("div",{className:"items-center d-flex flex-col w-[300px] p-4 bg-[#2c323a] overflow-hidden rounded-lg border-[1px solid #d8dee4] text-white",children:[e.jsx("div",{className:"w-70 h-70",children:e.jsx("img",{className:"w-full h-full rounded-full object-cover",src:s.avatar_url,alt:`@${t}'s GitHub user card`})}),e.jsx("div",{className:"py-4 px-0",children:e.jsxs("div",{className:"d-flex flex-col justify-start gap-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"text-lg",children:s.name}),e.jsxs("div",{className:"text-lg",children:["@",t]})]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("span",{children:s.bio})})]})}),e.jsxs("div",{className:"flex items-center gap-3 text-md",children:[e.jsx(g,{style:l}),e.jsx("div",{className:"text-gray-200",children:s.followers}),e.jsx("span",{children:"followers"}),e.jsx("span",{children:"·"}),e.jsx("div",{className:"text-gray-200",children:s.following}),e.jsx("span",{children:"following"})]}),e.jsxs("div",{className:"d-flex flex-col justify-start gap-3 w-full",style:{marginTop:20},children:[s.location&&e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(f,{style:l}),e.jsx("span",{children:s.location})]}),s.email&&e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{style:l}),e.jsx("span",{children:s.email})]}),s.blog&&e.jsxs("a",{href:s.blog,className:"flex items-center gap-3",children:[e.jsx(h,{style:l}),e.jsx("span",{children:s.blog})]})]})]}):e.jsx(v,{})}try{i.displayName="GitHubUser",i.__docgenInfo={description:"",displayName:"GitHubUser",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}}}}}catch{}const E={title:"Components/GitHubUser",component:i,tags:["docsPage"],argTypes:{username:{control:{type:"text",default:"kxxoling"}}}},r={args:{username:"kxxoling"}};var n,o,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    username: 'kxxoling'
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,E as default};
//# sourceMappingURL=user.stories-595dc2e7.js.map
