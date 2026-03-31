import React from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'
import Section from '../components/Section'
import Grid from '../components/Grid'

function ViewProfile() {
    return (
        <div className='min-h-screen pt-20 bg-neutral-950 text-white'>
            <Navbar />
                <div className="min-h-screen bg-black text-white px-6 py-6">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Profile</h1>
          <p className="text-gray-400">
            View and update your personal information
          </p>
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
            Reset Password
          </button>
          <button className="bg-zinc-800 px-4 py-2 rounded-lg text-sm">
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-semibold mb-4">
            VJ
          </div>

          <h2 className="text-lg font-semibold">
            VALIYA JAYDIP RAJUBHAI
          </h2>
          <p className="text-gray-400 text-sm">Student</p>
          <p className="text-gray-500 text-sm">SUxCG 714 · 108549</p>

          <div className="flex gap-2 mt-4">
            <button className="bg-zinc-800 px-3 py-1.5 rounded-lg text-sm">
              Edit Profile
            </button>
            <button className="bg-blue-600 px-3 py-1.5 rounded-lg text-sm">
              Reset Password
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard label="Enrollment Number" value="—" />
          <InfoCard label="Course" value="—" />
          <InfoCard label="Branch" value="—" />
          <InfoCard label="Semester" value="—" />
          <InfoCard label="Gender" value="—" />
          <InfoCard label="Alternate Email" value="jaydip.valiya.cg@gmail.com" link />
          <InfoCard label="Alternate Phone" value="—" />
          <InfoCard label="Guardian" value="—" />
        </div>
      </div>

      <Section title="Contact & Links">
        <Grid>
          <InfoCard label="Mobile" value="6435054878" />
          <InfoCard label="Parent Mobile" value="9714379625" />
          <InfoCard label="University Email" value="valiyajay2303@gmail.com" link />
          <InfoCard label="Current Email" value="jaydip.valiya.cg@gmail.com" link />
          <InfoCard label="Address" value="SMADHIYALA-1" />
          <InfoCard label="Portfolio" value="—" />
          <InfoCard label="Resume" value="—" />
          <InfoCard label="GitHub" value="https://github.com/jaydipvaliya" link />
          <InfoCard label="LinkedIn" value="https://linkedin.com/in/jaydip" link />
          <InfoCard label="Twitter" value="https://x.com/jaydip" link />
          <InfoCard label="YouTube" value="https://youtube.com/@jaydip" link />
        </Grid>
      </Section>

      <Section title="Academics">
        <Grid>
          <InfoCard label="University" value="SUxCG 714" />
          <InfoCard label="University UID" value="108549" />
          <InfoCard label="Date of Birth" value="—" />
          <InfoCard label="Admission Year" value="—" />
          <InfoCard label="Current Year" value="—" />
          <InfoCard label="Section" value="—" />
          <InfoCard label="Subjects" value="SU11, SU12, SU13..." />
          <InfoCard label="Mentors" value="Ankita" />
        </Grid>
      </Section>
    </div>
        </div>
    )
}

export default ViewProfile
