import React from 'react'

function Section( { title, children }) {
    return (
         <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
    )
}

export default Section
