import React from 'react'

function Input({ label, type}) {
    return (
        <div>
      <label className="text-sm text-gray-300">{label}</label>
      <input
        type={type}
        className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
      />
    </div>
    )
}

export default Input
