import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [Text, setText] = useState("");
  return (
    <div className="flex flex-col h-full items-center mx-4 p-5">
      <h1 className="text-[18px] font-bold select-none">Markdown Editor</h1>
      <h2 className='flex flex-col gap-1 select-none'>
        <div>
          using
          <a className="text-sky-400 hover:underline" href="https://www.npmjs.com/package/react-markdown"> react-markdown</a> and
        </div>
        <a href="https://tailwindcss.com/docs/typography-plugin">
          <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-typography/master/.github/logo-light.svg"></img>
        </a>
      </h2>
      <div className="grid grid-flow-row grid-cols-2 w-full h-[90%] gap-3 mt-5">
        <div className="bg-slate-100 p-3  rounded-lg shadow-xl grow">
          <textarea onChange={(e) => setText(e.target.value)} className="bg-slate-100 resize-none h-full w-full focus:outline-none scrollbar-hide" placeholder="Write something here"></textarea>
        </div>
        <div className="grow bg-[#262626] p-3 rounded-lg shadow-xl prose max-w-none prose-invert overflow-scroll scrollbar-hide">
          <ReactMarkdown >{Text}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

// Need to use tailwind typography and add prosa into className
