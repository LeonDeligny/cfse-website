
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

function FA18Publications() {
    const [bibOpen, setBibOpen] = useState(false);
    const [selectedBib, setSelectedBib] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    type Publication = { id: string; authors: string; title: string; journal?: string; details?: string; links?: string; bibtex: string };

    const publications: Publication[] = [
        {
            id: 'vos-2018-aiaa-3642',
            authors: 'Vos, J. B.; Charbonnier, D.; Siikonen, T.; Salminen, E.; Gehri, A.; Stephani, P.',
            title: 'Swiss/Finnish Collaboration on Aero-elastic Simulations for the F/A-18 Fighter',
            details: 'vol. AIAA-2018-3642, AIAA Aviation 2018, Atlanta, 2018.',
            links: 'https://cfse.ch/wp-content/uploads/2019/05/AIAA-2018-3642.pdf',
            bibtex: `@inproceedings{vos2018_aeroelastic,
  author = {Vos, J. B. and Charbonnier, D. and Siikonen, T. and Salminen, E. and Gehri, A. and Stephani, P.},
  title = {Swiss/Finnish Collaboration on Aero-elastic Simulations for the F/A-18 Fighter},
  booktitle = {AIAA Aviation},
  year = {2018},
  volume = {AIAA-2018-3642}
}`
        },
        {
            id: 'vos-2017-aiaa-4458',
            authors: 'Vos, J. B.; Charbonnier, D.; Ludwig, T.; Merazzi, S.; Gehri, A.; Stephani, P.',
            title: 'Recent Developments on Fluid Structure Interaction in the Navier Stokes Multi Block (NSMB) CFD solver',
            details: 'vol. AIAA-2017-4458, AIAA Aviation 2017, Denver, 2017.',
            links: 'https://cfse.ch/wp-content/uploads/2019/05/AIAA-2017-4458.pdf',
            bibtex: `@inproceedings{vos2017_nsmbfsi,
  author = {Vos, J. B. and Charbonnier, D. and Ludwig, T. and Merazzi, S. and Gehri, A. and Stephani, P.},
  title = {Recent Developments on Fluid Structure Interaction in the Navier Stokes Multi Block (NSMB) CFD solver},
  booktitle = {AIAA Aviation},
  year = {2017},
  volume = {AIAA-2017-4458}
}`
        },
        {
            id: 'guillaume-2011-aero-journal',
            authors: 'Guillaume, M.; Gehri, A.; Stephani, P.; Vos, J. B.; Mandanis, G.',
            title: 'F/A-18 vertical buffeting calculations using unsteady fluid structure interaction',
            journal: 'The Aeronautical Journal',
            details: 'vol. 115, no. 1167, 2011.',
            links: 'https://doi.org/10.1017/S0001924000005777',
            bibtex: `@article{guillaume2011_vbuffeting,
  author = {Guillaume, M. and Gehri, A. and Stephani, P. and Vos, J. B. and Mandanis, G.},
  title = {F/A-18 vertical buffeting calculations using unsteady fluid structure interaction},
  journal = {The Aeronautical Journal},
  volume = {115},
  number = {1167},
  year = {2011}
}`
        },
        {
            id: 'guillaume-2010-aiaa-4613',
            authors: 'Guillaume, M.; Gehri, A.; Stephani, P.; Vos, J. B.; Mandanis, G.',
            title: 'Fluid Structure Interaction Simulation on the F/A-18 Vertical Tail',
            details: 'vol. AIAA-2010-4613, AIAA Aviation 2010, Chicago, 2010.',
            links: 'https://cfse.ch/wp-content/uploads/2019/05/AIAA-2010-4613.pdf',
            bibtex: `@inproceedings{guillaume2010_vtailfsi,
  author = {Guillaume, M. and Gehri, A. and Stephani, P. and Vos, J. B. and Mandanis, G.},
  title = {Fluid Structure Interaction Simulation on the F/A-18 Vertical Tail},
  booktitle = {AIAA Aviation},
  year = {2010},
  volume = {AIAA-2010-4613}
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
        <div className="mt-4">
            {publications.map((p) => (
                <div key={p.id} className="border rounded p-3 bg-white mb-3">
                    <p className="text-sm font-medium">{p.authors}</p>
                    <p className="text-sm text-muted-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.journal} {p.details}</p>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                        {p.links && <a href={p.links} target="_blank" rel="noopener noreferrer" className="text-primary underline">Links</a>}
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

const FA18 = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">F/A 18</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Since 1997, the Swiss Air Force has operated the F/A-18 C/D aircraft. The Swiss Air Force's use of the aircraft involves a maneuver spectrum that is about three times more severe than the US Navy's design. This required a different structural design and prompted an Aircraft Structural Integrity Program (ASIP) study by Boeing.
            </p>
            <img
                src="/projectimages/fa18.webp"
                alt="F/A-18 Aircraft"
                className="w-full max-h-96 object-cover rounded-lg shadow mb-8"
                style={{ objectPosition: 'center' }}
            />
            <p className="text-lg text-muted-foreground mb-8">
                The NSMB (Navier Stokes Multi Block) Computational Fluid Dynamics (CFD) code was developed for Fluid-Structure Interaction (FSI) simulations. The F/A-18 was used to study static FSI for wing deformation and dynamic FSI for vertical tail buffeting.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
                Since 2013, a "3rd generation grid" with 50 million points has been used, allowing for easy changes to the aircraft's configuration. To quickly generate aerodynamic loads, the NSMB CFD solver was coupled with the B2000++ Finite Element Analysis environment. This allows for both static and dynamic FSI simulations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
                CFS Engineering, RUAG, and Elomatic are now collaborating on these F/A-18 simulations to generate aerodynamic loads on aircraft components.
            </p>
            {/* place publications below the content */}
            <div className="clear-both" />
            <div className="mt-8">
                <Accordion type="single" collapsible>
                    <AccordionItem value="fa18-pubs">
                        <AccordionTrigger>Related Publications</AccordionTrigger>
                        <AccordionContent>
                            <FA18Publications />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default FA18;
