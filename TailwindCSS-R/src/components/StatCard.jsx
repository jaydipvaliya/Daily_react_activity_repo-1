import React from 'react'

function StatCard({ title, value, color }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
    )
}

export default StatCard
