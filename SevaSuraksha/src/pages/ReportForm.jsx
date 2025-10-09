import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const initialState = {
    name: '',
    age: '',
    village: '',
    symptoms: '',
    contaminant: '',
    ph: '',
    turbidity: '',
    oxygen: '',
    nitrate: '',
    lead: '',
    bacteria: '',
    rainfall: '',
    temperature: '',
    waterSource: '',
    waterTreatment: '',
    symptomsSelect: '',
};



const ReportForm = () => {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const submitToModel = async (payload) => {
        await new Promise((res) => setTimeout(res, 900));
        let disease = '';
        let risk = 'High';
        let measures = [
            'Boil water for at least 10 minutes before drinking.',
            'Use ORS to prevent dehydration; consult nearest health center.',
            'Avoid raw foods; wash hands frequently with soap.',
            'Isolate drinking water from washing/animal areas.'
        ];

        if (payload.symptomsSelect === 'nausea, vomitting, rapid_fluid_loss, dehydration') {
            disease = 'Cholera';
        } else if (payload.symptomsSelect === 'watery_stools, abdominal_pain, bloating, blood_in_stool') {
            disease = 'Diarrhea';
        } else if (payload.symptomsSelect === 'high_fever, progressive_fever, headache, weakness') {
            disease = 'Typhoid';
        } else {
            disease = 'Unknown';
        }
        return { risk, measures, disease };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const payload = {
                name: form.name,
                age: Number(form.age) || 0,
                village: form.village,
                symptoms: form.symptoms,
                contaminant: form.contaminant,
                ph: form.ph,
                turbidity: form.turbidity,
                oxygen: form.oxygen,
                nitrate: form.nitrate,
                lead: form.lead,
                bacteria: form.bacteria,
                rainfall: form.rainfall,
                temperature: form.temperature,
                waterSource: form.waterSource,
                waterTreatment: form.waterTreatment,
                symptomsSelect: form.symptomsSelect
            };
            const resp = await submitToModel(payload);
            setResult(resp);
        } catch (err) {
            setResult({ error: 'Failed to get prediction. Try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
                &nbsp;&nbsp;
                <div className="row justify-content-center">
                    &nbsp;&nbsp;
                    <div className="col-12 col-lg-16">
                        <div className="card border-light shadow-sm">
                            <div className="card-body">
                                <h2 className="h4 mb-4">Community Health Report</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Name</label>
                                            <input name="name" className="form-control" required value={form.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Age</label>
                                            <input name="age" type="number" min="0" className="form-control" required value={form.age} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Village</label>
                                            <input name="village" className="form-control" required value={form.village} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Contaminant Level (ppm) </label>
                                            <input name="contaminant" type="number" min="0" className="form-control" required value={form.contaminant} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">pH Level (max 14)</label>
                                            <input name="ph" type="number" min="0" className="form-control" required value={form.ph} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Turbidity (NTU)</label>
                                            <input name="turbidity" type="number" min="0" className="form-control" required value={form.turbidity} onChange={handleChange} />
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Dissolved Oxygen (mg/L)</label>
                                            <input name="oxygen" type="number" min="0" className="form-control" required value={form.oxygen} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Nitrate Level (mg/L)</label>
                                            <input name="nitrate" type="number" min="0" className="form-control" required value={form.nitrate} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Lead Conc. (µg/L)</label>
                                            <input name="lead" type="number" min="0" className="form-control" required value={form.lead} onChange={handleChange} />
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Bacteria Count (CFU/mL)</label>
                                            <input name="bacteria" type="number" min="0" className="form-control" required value={form.bacteria} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Rainfall (mm/year)</label>
                                            <input name="rainfall" type="number" min="0" className="form-control" required value={form.rainfall} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="form-label">Temperature (°C)</label>
                                            <input name="temperature" type="number" min="0" className="form-control" required value={form.temperature} onChange={handleChange} />
                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Water Source Type</label>
                                            <select name="waterSource" className="form-select form-control" value={form.waterSource} onChange={handleChange}>
                                                <option value="">Select Source</option>
                                                <option value="Well">Well</option>
                                                <option value="Spring">Spring</option>
                                                <option value="Tap">Tap</option>
                                                <option value="Lake">Lake</option>
                                                <option value="Pond">Pond</option>
                                                <option value="River">River</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Water Treatment Method</label>
                                            <select name="waterTreatment" className="form-select form-control" value={form.waterTreatment} onChange={handleChange}>
                                                <option value="">Select Treatment</option>
                                                <option value="Chlorination">Chlorination</option>
                                                <option value="Boiling">Boiling</option>
                                                <option value="Filtration">Filtration</option>
                                                <option value="None">None</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Symptoms</label>
                                            <select name="symptomsSelect" className="form-select form-control" value={form.symptomsSelect} onChange={handleChange}>
                                                <option value="">Select Symptoms</option>
                                                <option value="nausea, vomitting, rapid_fluid_loss, dehydration">nausea, vomitting, rapid_fluid_loss, dehydration</option>
                                                <option value="watery_stools, abdominal_pain, bloating, blood_in_stool">watery_stools, abdominal_pain, bloating, blood_in_stool</option>
                                                <option value="high_fever, progressive_fever, headache, weakness">high_fever, progressive_fever, headache, weakness</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="btn btn-primary" disabled={loading} type="submit">
                                        {loading ? 'Analyzing…' : 'Get Risk Prediction'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {result && (
                            <div className="card border-light shadow-sm mt-4">
                                <div className="card-body">
                                    {result.error ? (
                                        <div className="alert alert-danger mb-0">{result.error}</div>
                                    ) : (
                                        <>
                                            <h3 className="h5 mb-2">Predicted Disease: <span className="text-danger">{result.disease}</span></h3>
                                            <h3 className="h5 mb-2">Predicted Risk: <span className="text-danger">{result.risk}</span></h3>
                                            <h4 className="h6 mt-3">Precautionary & Prevention Measures</h4>
                                            <ul className="mb-0">
                                                {result.measures.map((m) => (
                                                    <li key={m}>{m}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportForm;


