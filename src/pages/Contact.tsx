import React from 'react';
import ProjectPlanner from '../../components/ProjectPlanner';

const Contact: React.FC = () => {
    return (
        <div className="pt-20 bg-[#0F0F0F] min-h-screen">
            <ProjectPlanner />
            {/* Reusing ProjectPlanner as the main contact form for now */}

            <div className="max-w-7xl mx-auto px-6 py-20 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-display font-black uppercase mb-6">Kontaktdaten</h2>
                        <div className="space-y-4 font-mono text-sm text-[#9CA3AF]">
                            <p><strong className="text-white block">Ruf uns an:</strong> +49 170 2847337</p>
                            <p><strong className="text-white block">Schreib uns:</strong> info@thm-michels.de</p>
                            <p><strong className="text-white block">Besuche uns:</strong> Am Kaltwiesenbach, Waiblingen</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-display font-black uppercase mb-6">Öffnungszeiten</h2>
                        <div className="space-y-2 font-mono text-sm text-[#9CA3AF]">
                            <div className="flex justify-between max-w-xs"><span>Mo – Fr</span> <span>08:00 – 18:00 Uhr</span></div>
                            <div className="flex justify-between max-w-xs"><span>Sa</span> <span>10:00 – 15:00 Uhr</span></div>
                            <div className="flex justify-between max-w-xs"><span>So</span> <span>Geschlossen</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
