import React, {useState, useRef} from 'react';
import modules from './data/modules';
import ModuleCard from './components/ModuleCard';
import axios from 'axios';

export default function App(){
  const offerRef = useRef();
  const [form, setForm] = useState({name:'', email:'', phone:'', note:''});
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/applicants', form);
      alert('Submitted');
      setForm({name:'',email:'',phone:'',note:''});
    } catch (err) {
      alert('Submit failed');
    }
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Fusionpact DevOps Internship Program 2026</h1>
          <p className="mt-2">Industry-Ready DevOps Professionals — Hands-on Cloud, Containers, CI/CD & Monitoring</p>
        </div>
      </header>

      <nav className="bg-indigo-700 sticky top-0">
        <div className="max-w-6xl mx-auto flex gap-2 px-4 py-2">
          {modules.map(m=> <a key={m.id} href={'#'+m.id} className="text-white px-3 py-2 rounded hover:bg-indigo-900">{m.title.split('–')[0]}</a>)}
          <a href="#fulltime-offer" className="text-white px-3 py-2 rounded hover:bg-indigo-900 ml-auto">Full-Time Offer</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        {modules.map(m=> <ModuleCard key={m.id} mod={m} />)}
      </main>

      <section id="fulltime-offer" className="py-12 text-center">
        <h2 className="text-2xl text-indigo-900 font-semibold mb-6">Full-Time Opportunity – Junior DevOps Engineer</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <ul className="text-slate-700">
            <li><strong>Eligibility:</strong> Completion of 6-month internship with strong performance</li>
            <li className="mt-2"><strong>Compensation:</strong> Competitive package & performance bonuses</li>
            <li className="mt-2"><strong>Benefits:</strong>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Health & Dental Insurance</li>
                <li>Paid Leaves & Holidays</li>
                <li>Flexible Work Hours & Remote Options</li>
                <li>Learning & Certification Support</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={submit} className="space-y-3">
            <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-2 rounded" placeholder="Full name"/>
            <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border p-2 rounded" placeholder="Email"/>
            <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full border p-2 rounded" placeholder="Phone (optional)"/>
            <textarea value={form.note} onChange={e=>setForm({...form,note:e.target.value})} className="w-full border p-2 rounded" placeholder="Short note or resume link"></textarea>
            <div className="flex gap-2">
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Submit Application</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-indigo-700 text-white py-6 mt-12 text-center">
        © 2026 Fusionpact Technology | kiran.rakh@fusionpact.com
      </footer>
    </div>
  );
}
