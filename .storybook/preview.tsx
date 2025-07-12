import type { Preview } from '@storybook/react-vite';
// import "../src/output.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

  },
  decorators: [
    (Story, context) => {
      let shecma = context.globals.schema;

      if (shecma === "both") {
        return (
          <div className={`flex justify-center items-center flex-wrap gap-8`}>
            <div className={`p-4 space-y-4 border border-gray-200 rounded-lg min-w-72 flex flex-col items-center `}>
              <h1 className='text-[11px] uppercase font-semibold'>Light Mode</h1>
              <Story />
            </div>
            <div className={`p-4 dark space-y-4 bg-neutral-950 rounded-lg min-w-72 flex flex-col items-center`}>
              <h1 className='text-[11px] uppercase text-gray-300 font-semibold'>Dark Mode</h1>
              <Story />
            </div>
          </div>
        )
      }
      return (
        <div className={`p-4 ${shecma}`}>
          <Story />
        </div>
      )
    },
  ]
};

export default preview;


export const globalTypes = {
  schema: {
    name: "Scheme",
    description: "Global scheme for the components",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      dynamicTitle: true,
      items: [
        { value: "both", title: "Both" },
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    }
  }
}