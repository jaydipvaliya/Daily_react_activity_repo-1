import React from 'react'
import Navbar from '../components/Navbar'

function Chat() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
          <Navbar />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
                <h1 className="text-3xl font-bold">Chat Groups</h1>
                <p className="text-lg text-neutral-400">Group assigned to you and universal groups.
                <br />
                (coming soon)</p>
            </div>
        </div>
    )
}

export default Chat
