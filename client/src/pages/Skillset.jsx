import React from "react";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Findme from "../components/Skillset/Findme";

const Skillset = () => {
    return (
        <section className="relative py-16 bg-gradient-to-r from-gray-500 to-gray-800" id="skillset">
           
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Skillset Header */}
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Professional <strong className="text-yellow-400">Skillset</strong>
                </h1>

                {/* Techstack Section */}
                <div className="mb-12">
                    <Techstack />
                </div>

                {/* Tools Section */}
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    <strong className="text-yellow-400">Tools</strong> I use
                </h1>
                <div className="mb-12">
                    <Toolstack />
                </div>
                <div className="mb-12">
                    <Findme />
                </div>

            </div>
        </section>
    );
};

export default Skillset;
