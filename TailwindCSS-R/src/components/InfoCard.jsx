import React from 'react'

function InfoCard({ label, value, link }) {
    return (
        <div>
           <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3">
      <p className="text-xs text-gray-400 mb-1 uppercase">{label}</p>
      {link ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-gray-200">{value}</p>
      )}
    </div>
        </div>
    )
}

export default InfoCard
