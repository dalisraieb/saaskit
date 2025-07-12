import{j as r}from"./iframe-BExB3jju.js";import{c,B as l,C as m,X as p}from"./x-BWQG4T-E.js";import"./output-AHss_MNj.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g=c("chevron-right",h);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],y=c("loader-circle",u);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],x=c("log-in",v);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],j=c("save",f),{fn:k}=__STORYBOOK_MODULE_TEST__,L={title:"Example/Button",component:l,parameters:{layout:"centered",controls:{include:["variant","color","size","fullWidth"]}},argTypes:{variant:{control:{type:"select",options:["fill","outline","ghost","link"]},description:"The visual style of the button"},color:{control:{type:"select",options:["primary","secondary","error","success","warning","info"]},description:"The color scheme of the button"},size:{control:{type:"select",options:["xs","small","medium","large"]},description:"The size of the button"}},tags:["autodocs"],args:{onClick:k(),fullWidth:!1,disabled:!1}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(j,{})," Save"]}),variant:"fill",color:"primary",size:"small"}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(x,{})," Sign In"]}),variant:"fill",color:"secondary",size:"small"}},s={args:{children:r.jsxs(r.Fragment,{children:["Next ",r.jsx(g,{})]}),variant:"outline",color:"primary",size:"small"}},o={args:{children:r.jsx(r.Fragment,{children:"Cancel"}),variant:"ghost",color:"primary",size:"small"}},n={args:{children:r.jsx(r.Fragment,{children:"Link"}),variant:"link",color:"primary",size:"small"}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(y,{className:"animate-spin"})," Please Wait"]}),variant:"fill",color:"primary",size:"small"}},i={args:{children:r.jsx(r.Fragment,{}),variant:"fill",color:"primary",size:"xs",iconOnly:!0},render:d=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(l,{...d,children:r.jsx(m,{})}),r.jsx(l,{...d,children:r.jsx(p,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><Save /> Save</>,
    variant: "fill",
    color: 'primary',
    size: "small"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <><LogIn /> Sign In</>,
    variant: "fill",
    color: 'secondary',
    size: "small"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Next <ChevronRight /></>,
    variant: "outline",
    color: 'primary',
    size: "small"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Cancel</>,
    variant: "ghost",
    color: 'primary',
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Link</>,
    variant: "link",
    color: 'primary',
    size: "small"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <><LoaderCircle className="animate-spin" /> Please Wait</>,
    variant: "fill",
    color: "primary",
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <></>,
    variant: "fill",
    color: 'primary',
    size: "xs",
    iconOnly: true
  },
  render: args => <div className="flex gap-2">\r
      <Button {...args}>\r
        <Check />\r
      </Button>\r
      <Button {...args}>\r
        <X />\r
      </Button>\r
    </div>
}`,...i.parameters?.docs?.source}}};const C=["Primary","Secondary","Outline","Ghost","Link","Loading","Icon"];export{o as Ghost,i as Icon,n as Link,t as Loading,s as Outline,a as Primary,e as Secondary,C as __namedExportsOrder,L as default};
