import{j as e}from"./iframe-BExB3jju.js";import{c as d,B as r,X as u,C as p}from"./x-BWQG4T-E.js";import"./output-AHss_MNj.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],g=d("ellipsis-vertical",x),a=({color:l,className:i,children:t,size:o="base",...n})=>{const c="",m={xs:"text-xs [&>svg]:size-3.5 gap-0.5",small:"text-sm [&>svg]:size-4 gap-1",base:"text-base [&>svg]:size-4.5 gap-2 font-medium",large:"text-lg [&>svg]:size-5 gap-2 font-semibold",xl:"text-xl [&>svg]:size-5.5  gap-2 font-semibold","2xl":"text-2xl [&>svg]:size-6 gap-2 font-bold","3xl":"text-3xl [&>svg]:size-7 gap-2 font-bold","4xl":"text-4xl [&>svg]:size-8 gap-2 font-bold","5xl":"text-5xl [&>svg]:size-9 gap-2 font-bold","6xl":"text-6xl [&>svg]:size-10 gap-2 font-bold"};return e.jsx("h1",{className:`${c} ${m[o]} ${i}`,...n,children:t})};a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'small' | 'base' | 'large' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'small'"},{name:"literal",value:"'base'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"}]},description:"",defaultValue:{value:'"base"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const{fn:y}=__STORYBOOK_MODULE_TEST__,z={title:"Example/Typography",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:y()}},s={args:{children:e.jsx(e.Fragment,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius."}),color:"primary"},render:l=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{size:"xs",children:"Welcome to our platform!",className:"text-foreground-muted"}),e.jsx(a,{size:"large",children:"Dashboard Overview",className:"text-foreground"})]}),e.jsx(r,{iconOnly:!0,size:"small",variant:"outline",color:"secondary",children:e.jsx(g,{})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{size:"base",children:"Quick insights into your recent activity",className:"text-foreground"}),e.jsx(a,{children:"Here you'll find a summary of your key metrics and important notifications. Explore the sections below for detailed reports and management options.",size:"small",className:"text-foreground-subtle"})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-8",children:[e.jsxs(r,{size:"small",variant:"fill",color:"error",children:[" ",e.jsx(u,{})]}),e.jsxs(r,{size:"small",variant:"fill",color:"success",children:["Agree ",e.jsx(p,{})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius.</>,
    color: 'primary'
  },
  render: args => <div className='space-y-4'>\r
            <div className='flex justify-between'>\r
                <div className='space-y-1'>\r
                    <Typography size="xs" children="Welcome to our platform!" className='text-foreground-muted' />\r
                    <Typography size="large" children="Dashboard Overview" className='text-foreground' />\r
                </div>\r
                <Button iconOnly size="small" variant="outline" color="secondary"><EllipsisVertical /></Button>\r
            </div>\r
            <div className='space-y-2'>\r
                <Typography size="base" children="Quick insights into your recent activity" className='text-foreground' />\r
                <Typography children="Here you'll find a summary of your key metrics and important notifications. Explore the sections below for detailed reports and management options." size="small" className='text-foreground-subtle' />\r
            </div>\r
            <div className='flex justify-end space-x-4 mt-8'>\r
                {/* <Button size="small" variant="ghost" color="secondary">View Details</Button>\r
                 <Button size="small" variant="fill" color="primary">Edit Profile</Button> */}\r
                <Button size="small" variant="fill" color="error"> <X /></Button>\r
                <Button size="small" variant="fill" color="success">Agree <Check /></Button>\r
            </div>\r
        </div>
}`,...s.parameters?.docs?.source}}};const b=["Typo"];export{s as Typo,b as __namedExportsOrder,z as default};
