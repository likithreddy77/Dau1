import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const mockProposals = [
  {
    id: 1,
    title: 'Advanced Blockchain Development',
    proposer: 'satoshi.icp',
    status: 'Pending',
    votesFor: 87,
    votesAgainst: 13,
    staked: '250 ICP',
  },
  {
    id: 2,
    title: 'Introduction to DAOs',
    proposer: 'vitalik.icp',
    status: 'Approved',
    votesFor: 132,
    votesAgainst: 2,
    staked: '180 ICP',
  },
  {
    id: 3,
    title: 'AI for Education',
    proposer: 'dominic.icp',
    status: 'Rejected',
    votesFor: 30,
    votesAgainst: 70,
    staked: '90 ICP',
  }
];

export default function Dashboard() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">DAO Dashboard</h1>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg text-gray-400 mb-2">Total Proposals</h2>
            <p className="text-3xl font-bold">{mockProposals.length}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg text-gray-400 mb-2">Staked ICP</h2>
            <p className="text-3xl font-bold">520 ICP</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg text-gray-400 mb-2">DAO Members</h2>
            <p className="text-3xl font-bold">78</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Course Proposals</h2>
          <div className="grid gap-6">
            {mockProposals.map((proposal) => (
              <div key={proposal.id} className="bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold">{proposal.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      proposal.status === 'Approved'
                        ? 'bg-green-700 text-white'
                        : proposal.status === 'Rejected'
                        ? 'bg-red-700 text-white'
                        : 'bg-yellow-600 text-black'
                    }`}
                  >
                    {proposal.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">Proposed by: {proposal.proposer}</p>
                <p className="text-gray-400 text-sm mb-2">Staked: {proposal.staked}</p>
                <div className="flex justify-between text-sm text-gray-300">
                  <p>Votes For: {proposal.votesFor}</p>
                  <p>Votes Against: {proposal.votesAgainst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
