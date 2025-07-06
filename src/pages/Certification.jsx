import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const certificates = [
  {
    id: 1,
    course: 'Blockchain Fundamentals',
    issuedBy: 'DAU DAO',
    issueDate: '2025-06-25',
    cid: 'QmABC123xyz456', // mock IPFS CID
  },
  {
    id: 2,
    course: 'DAOs and Governance',
    issuedBy: 'DAU DAO',
    issueDate: '2025-07-01',
    cid: 'QmXYZ456abc789',
  },
];

export default function Certification() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Certifications</h1>

        {certificates.length === 0 ? (
          <p className="text-center text-gray-400">You have not earned any certificates yet.</p>
        ) : (
          <div className="grid gap-6">
            {certificates.map(cert => (
              <div
                key={cert.id}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-1">{cert.course}</h2>
                  <p className="text-sm text-gray-400">Issued by: {cert.issuedBy}</p>
                  <p className="text-sm text-gray-400">Date: {cert.issueDate}</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={`https://ipfs.io/ipfs/${cert.cid}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-sm"
                  >
                    View
                  </a>
                  <button
                    className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl text-sm"
                    onClick={() => alert(`Downloaded ${cert.course}`)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
