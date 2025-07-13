import{j as e}from"./iframe-DPoIUADK.js";import{T as s}from"./typography-Sfv0Lk35.js";const m={title:"Atoms/Typography",component:s,parameters:{layout:"centered",controls:{exclude:["children","size","color","fontWeight","className","textTransform"]}},tags:["autodocs"]},r={args:{children:e.jsx(e.Fragment,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius."})},render:i=>e.jsx("div",{className:"space-y-4 p-8 pt-0",children:["xs","small","base","large","xl","2xl","3xl","4xl","5xl","6xl"].map(a=>e.jsx(s,{size:a,...i,children:`Typography Size: ${a}`},a))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius.</>
  },
  render: args => <div className='space-y-4 p-8 pt-0'>\r
            {['xs', 'small', 'base', 'large', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map(size => <Typography key={size} size={size as TypographyProps['size']} {...args}>\r
                        {\`Typography Size: \${size}\`}\r
                    </Typography>)}\r
        </div>
}`,...r.parameters?.docs?.source}}};const p=["variants"];export{p as __namedExportsOrder,m as default,r as variants};
