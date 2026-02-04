import React from 'react';
import AboutComponent from '../../components/About'; // Renaming to avoid conflict

const AboutPage: React.FC = () => {
    return (
        <div className="pt-20 bg-[#0F0F0F] min-h-screen">
            <AboutComponent />
            {/* Additional About content could go here (Team, History) */}
        </div>
    );
};

export default AboutPage;
