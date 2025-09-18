import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';

const ReusableLaunchVehicles: React.FC = () => {
    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8">
                    <button className="text-primary mb-6 flex items-center" onClick={() => { window.location.href = '/#projects'; }}>
                        <ArrowLeft className="mr-2" /> Back
                    </button>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center mx-auto">Re-usable Launch Vehicles</h1>

                <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                    <div>
                        <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">CFD4SALTO</h3>

                            <p className="">
                                The CFD4SALTO project started in December 2023, and permits
                                CFS Engineering to continue the activities it performed on re-usable
                                launch vehicles in the EU funded H2020 project RETALT. The project
                                will be performed in collaboration with the Horizon Europe funded
                                project SALTO — reuSable strAtegic space Launcher Technologies &
                                Operations.
                            </p>

                            <div className="mb-4 text-center">
                                <a href="https://www.linkedin.com/company/projectsalto/" target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <img
                                        src="/projectimages/salto.png"
                                        alt="Salto Logo"
                                        className="h-14 w-14 object-contain rounded-md mx-auto"
                                        style={{ minWidth: '13rem', minHeight: '13rem' }}
                                    />
                                </a>
                            </div>

                            <p className=" mt-4">The CFD4SALTO project is lead by DLR in Cologne. CFS Engineering will perform CFD computations for the generation of the aerodynamic databases for the SALTO T3 Vehicle. In addition CFS Engineering will perform CFD computations to support the Wind tunnel testing at DLR in Cologne, as well perform CFD simulations to extrapolate wind tunnel data to flight conditions. The project will run for 3 years.</p>
                        </section>
                    </div>

                    <div>
                        <section className="border rounded-lg p-4 bg-white shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">RETro propulsion Assisted Landing Technologies</h3>
                            <p className="">
                                The RETALT (RETro propulsion Assisted Landing Technologies) project
                                has two main scientific and technological objectives.
                                To investigate the launch system reusability technology of
                                VTVL/TSTO RLV applying retro propulsion:

                            </p>

                            <ul className="list-disc list-inside mt-3">
                                <li>
                                    combined with aerodynamic control surfaces, dominating the global market.
                                </li>
                                <li>
                                    for future space transportation systems
                                </li>
                            </ul>

                            <div className="mb-4 text-center">
                                <a href="https://www.retalt.eu/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                    <img
                                        src="/projectimages/retalt.webp"
                                        alt="RETALT Logo"
                                        className="h-24 w-24 object-contain rounded-md mx-auto"
                                        style={{ minWidth: '13rem', minHeight: '13rem' }}
                                    />
                                </a>
                            </div>
                            <p className="mt-4">To meet these objectives, two reference configurations were defined:</p>

                            <ul className="list-decimal list-inside mt-3 ">
                                <li>
                                    A configuration similar to the SpaceX rocket “Falcon 9” as the reference for state-of-the-art TSTO RLV.
                                </li>
                                <li>
                                    A configuration similar to the US-American Delta Clipper as the reference for VTVL SSTO.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            {/* publications dialog is handled inside ReusablePublications component */}
        </section>
    );
};

export default ReusableLaunchVehicles;

// --- ReusablePublications component (module scope) ---
function ReusablePublications() {
    const [bibOpen, setBibOpen] = useState(false);
    const [selectedBib, setSelectedBib] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    type Publication = { id: string; authors: string; title: string; venue?: string; details?: string; links?: string; bibtex: string };

    const publications: Publication[] = [
        {
            id: 'vos-2025-far2025',
            authors: 'Vos, J. B.; Gehri, A.; Benedetti, G.; Marwege, A.',
            title: 'Aerodynamic Data Base Generation for a Re-usable Launcher Configuration',
            venue: 'FAR2025',
            details: 'Arcachon, 2025.',
            links: '#',
            bibtex: `@inproceedings{Vos2025_71,
  author = {Vos, J. B. and Gehri, A. and Benedetti, G. and Marwege, A.},
  title = {Aerodynamic Data Base Generation for a Re-usable Launcher Configuration},
  booktitle = {FAR2025},
  year = {2025},
  address = {Arcachon}
}`
        },
        {
            id: 'vos-2019-bowshock',
            authors: 'Vos, J. B.; Charbonnier, D.',
            title: 'The importance of Bow Shock Adaption in CFD simulations for Hypersonic Flows',
            venue: 'FAR2019',
            details: 'Monopoli, 2019.',
            links: '#',
            bibtex: `@inproceedings{Vos2019_bowshock,
  author = {Vos, J. B. and Charbonnier, D.},
  title = {The importance of Bow Shock Adaption in CFD simulations for Hypersonic Flows},
  booktitle = {FAR2019},
  year = {2019},
  address = {Monopoli}
}`
        },
        {
            id: 'charbonnier-2019-dynamic-derivatives',
            authors: 'Charbonnier, D.; Vos, J. B.',
            title: 'Determination of Dynamic Derivatives of Re-entry Vehicles using Unsteady CFD',
            venue: 'FAR2019',
            details: 'Monopoli, 2019.',
            links: '#',
            bibtex: `@inproceedings{Charbonnier2019_dynamic,
  author = {Charbonnier, D. and Vos, J. B.},
  title = {Determination of Dynamic Derivatives of Re-entry Vehicles using Unsteady CFD},
  booktitle = {FAR2019},
  year = {2019},
  address = {Monopoli}
}`
        },
        {
            id: 'vos-2016-capsule',
            authors: 'Vos, J. B.; Bourgoing, A.; Soler, J.',
            title: 'Earth re-entry capsule CFS simulations taking into account surface roughness and mass injection at the wall',
            venue: 'Journal',
            details: 'vol. 5, no. 1, 2016.',
            links: '#',
            bibtex: `@article{Vos2016_capsule,
  author = {Vos, J. B. and Bourgoing, A. and Soler, J.},
  title = {Earth re-entry capsule CFS simulations taking into account surface roughness and mass injection at the wall},
  journal = {Unknown Journal},
  volume = {5},
  number = {1},
  year = {2016}
}`
        },
        {
            id: 'charbonnier-2015-marcopolo',
            authors: 'Charbonnier, D.; Vos, J. B.; Clopeau, E.; Ferracina, L.; Maraffa, L.',
            title: 'MarcoPolo-R ERC Dynamic Stability Characterization: Computational Campaign',
            venue: 'ESA ATD',
            details: 'Lisbon, 2015.',
            links: '#',
            bibtex: `@inproceedings{Charbonnier2015_marcopolo,
  author = {Charbonnier, D. and Vos, J. B. and Clopeau, E. and Ferracina, L. and Maraffa, L.},
  title = {MarcoPolo-R ERC Dynamic Stability Characterization: Computational Campaign},
  booktitle = {ESA ATD},
  year = {2015},
  address = {Lisbon}
}`
        },
        {
            id: 'clemente-2012-expert',
            authors: 'Clemente, M. Di; Trifoni, E.; Walpot, L.; Thoemel, J.; Vos, J. B.; Guelhan, A.; Thiele, T.; Pereira, C.',
            title: 'Aerothermal Rebuilding of Plasma Wind Tunnel Tests on the EXPERT Capsule Open Flap',
            venue: 'AIAA Aviation 2012',
            details: 'vol. AIAA-2012-3003, New Orleans, 2012.',
            links: '#',
            bibtex: `@inproceedings{Clemente2012_expert,
  author = {Clemente, M. Di and Trifoni, E. and Walpot, L. and Thoemel, J. and Vos, J. B. and Guelhan, A. and Thiele, T. and Pereira, C.},
  title = {Aerothermal Rebuilding of Plasma Wind Tunnel Tests on the EXPERT Capsule Open Flap},
  booktitle = {AIAA Aviation},
  year = {2012},
  volume = {AIAA-2012-3003}
}`
        }
    ];

    const openBib = (bib: string) => { setSelectedBib(bib); setBibOpen(true); };

    const copyBib = async () => {
        if (!selectedBib) return;
        try {
            await navigator.clipboard.writeText(selectedBib);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch (e) {
            const ta = document.createElement('textarea');
            ta.value = selectedBib;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 1600); }
            catch (_) { alert('Copy failed — please copy manually.'); }
            document.body.removeChild(ta);
        }
    };

    return (
        <div className="mt-3 space-y-3">
            {publications.map((p) => (
                <div key={p.id} className="border rounded p-3 bg-white">
                    <p className="text-sm font-medium">{p.authors}</p>
                    <p className="">{p.title}</p>
                    <p className="">{p.venue} {p.details}</p>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                        {p.links && (
                            <a href={p.links} target="_blank" rel="noopener noreferrer" className="text-primary underline">Links</a>
                        )}
                        <button onClick={() => openBib(p.bibtex)} className="text-primary underline">BibTeX</button>
                    </div>
                </div>
            ))}

            <Dialog open={bibOpen} onOpenChange={(o) => { if (!o) setSelectedBib(null); setBibOpen(o); }}>
                <DialogContent className="sm:max-w-lg w-full p-4">
                    <h3 className="text-lg font-semibold mb-2">BibTeX</h3>
                    <pre className="text-sm bg-gray-100 rounded p-3 overflow-auto break-words">{selectedBib}</pre>
                    <div className="mt-3 flex gap-3">
                        <button onClick={copyBib} className="px-3 py-2 bg-primary text-white rounded">{copied ? 'Copied' : 'Copy BibTeX'}</button>
                        <button onClick={() => setBibOpen(false)} className="px-3 py-2 border rounded">Close</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
