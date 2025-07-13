import{j as r}from"./iframe-DPoIUADK.js";import{c as p,B as l}from"./createLucideIcon-jNVBmkpY.js";import{L as u,C as d,a as g,b as h,X as y}from"./x-o0pmBbux.js";import"./output-Cdq2Z2Gm.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],x=p("save",v),{fn:f}=__STORYBOOK_MODULE_TEST__,L={title:"Atoms/Button",component:l,parameters:{layout:"centered",controls:{include:["variant","color","size","fullWidth"]}},argTypes:{variant:{control:{type:"select",options:["fill","outline","ghost","link"]},description:"The visual style of the button"},color:{control:{type:"select",options:["primary","secondary","error","success","warning","info"]},description:"The color scheme of the button"},size:{control:{type:"select",options:["xs","small","medium","large"]},description:"The size of the button"}},tags:["autodocs"],args:{onClick:f(),fullWidth:!1,disabled:!1}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(x,{})," Save"]}),variant:"fill",color:"primary",size:"small"}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(u,{})," Sign In"]}),variant:"fill",color:"secondary",size:"small"}},s={args:{children:r.jsxs(r.Fragment,{children:["Next ",r.jsx(d,{})]}),variant:"outline",color:"primary",size:"small"}},o={args:{children:r.jsxs(r.Fragment,{children:["Next ",r.jsx(d,{})]}),variant:"surface",color:"primary",size:"small"}},i={args:{children:r.jsx(r.Fragment,{children:"Cancel"}),variant:"ghost",color:"primary",size:"small"}},n={args:{children:r.jsx(r.Fragment,{children:"Link"}),variant:"link",color:"primary",size:"small"}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(g,{className:"animate-spin"})," Please Wait"]}),variant:"fill",color:"primary",size:"small"}},c={args:{children:r.jsx(r.Fragment,{}),variant:"fill",color:"primary",size:"xs",iconOnly:!0},render:m=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(l,{...m,children:r.jsx(h,{})}),r.jsx(l,{...m,children:r.jsx(y,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // variant: "secondary",
    children: <>Cancel</>,
    variant: "ghost",
    color: 'primary',
    size: "small"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const C=["Primary","Secondary","Outline","Surface","Ghost","Link","Loading","Icon"];export{i as Ghost,c as Icon,n as Link,t as Loading,s as Outline,a as Primary,e as Secondary,o as Surface,C as __namedExportsOrder,L as default};
