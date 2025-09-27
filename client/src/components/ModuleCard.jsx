import React from 'react';
export default function ModuleCard({mod}) {
  return (
    <article id={mod.id} className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-indigo-900 font-semibold">{mod.title}</h2>
      <p className="text-slate-600">{mod.subtitle}</p>
      <ul className="list-disc list-inside mt-3">
        {mod.bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
      <div className="mt-3">
        {mod.links.map((l,i)=> <a key={i} href={l.url} target="_blank" rel="noreferrer" className="mr-3 text-orange-500 underline">{l.name}</a>)}
      </div>
    </article>
  );
}
