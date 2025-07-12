import{j as r}from"./iframe-DDuhXyXM.js";import{c as l,B as d,C as h,X as u}from"./x-BarOcALA.js";import"./output-DgotV4ua.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],p=l("chevron-right",g);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],v=l("loader-circle",y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],f=l("log-in",x);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],z=l("save",j),{fn:S}=__STORYBOOK_MODULE_TEST__,N={title:"Example/Button",component:d,parameters:{layout:"centered",controls:{include:["variant","color","size","fullWidth"]}},argTypes:{variant:{control:{type:"select",options:["fill","outline","ghost","link"]},description:"The visual style of the button"},color:{control:{type:"select",options:["primary","secondary","error","success","warning","info"]},description:"The color scheme of the button"},size:{control:{type:"select",options:["xs","small","medium","large"]},description:"The size of the button"}},tags:["autodocs"],args:{onClick:S(),fullWidth:!1,disabled:!1}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(z,{})," Save"]}),variant:"fill",color:"primary",size:"small"}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(f,{})," Sign In"]}),variant:"fill",color:"secondary",size:"small"}},s={args:{children:r.jsxs(r.Fragment,{children:["Next ",r.jsx(p,{})]}),variant:"outline",color:"primary",size:"small"}},o={args:{children:r.jsxs(r.Fragment,{children:["Next ",r.jsx(p,{})]}),variant:"surface",color:"primary",size:"small"}},n={args:{children:r.jsx(r.Fragment,{children:"Cancel"}),variant:"ghost",color:"primary",size:"small"}},t={args:{children:r.jsx(r.Fragment,{children:"Link"}),variant:"link",color:"primary",size:"small"}},i={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(v,{className:"animate-spin"})," Please Wait"]}),variant:"fill",color:"primary",size:"small"}},c={args:{children:r.jsx(r.Fragment,{}),variant:"fill",color:"primary",size:"xs",iconOnly:!0},render:m=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(d,{...m,children:r.jsx(h,{})}),r.jsx(d,{...m,children:r.jsx(u,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    children: <>Next <ChevronRight /></>,
    variant: "surface",
    color: 'primary',
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Cancel</>,
    variant: "ghost",
    color: 'primary',
    size: "small"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Link</>,
    variant: "link",
    color: 'primary',
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <><LoaderCircle className="animate-spin" /> Please Wait</>,
    variant: "fill",
    color: "primary",
    size: "small"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const C=["Primary","Secondary","Outline","Surface","Ghost","Link","Loading","Icon"];export{n as Ghost,c as Icon,t as Link,i as Loading,s as Outline,a as Primary,e as Secondary,o as Surface,C as __namedExportsOrder,N as default};
