import React from 'react';

const Miscellaneous = () => {
    return (
        <div className="flex justify-center items-center gap-5 bg-white dark:bg-neutral-900 dark:text-white">
            <div className="max-w-3xl w-full text-left leading-loose">
                <div className="mb-6">
                    <p className="text-gray-700 leading-7 mb-4 dark:text-gray-400">Thanks for looking through my website! This was last updated January 23rd, 2025.</p>
                </div>
                
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-4">Acknowledgements</h1>
                    <p className="text-gray-700 leading-7 dark:text-gray-400"> Countless YouTube tutorials for React helped me create this website, along with the great looking timeline in the Projects
                    section. You can find the documentation for that specific plugin to create one yourself right{' '} <a href="https://www.npmjs.com/package/react-vertical-timeline-component"
                    target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>. I had also done tons of Google searching trying to remember syntax + figure 
                    out how I wanted the pages to be laid out.</p>
                </div>

                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-4">Layout</h1>
                    <p className="text-gray-700 leading-7 dark:text-gray-400"> This layout was heavily inspired by{' '} <a href="https://www.aidanandrews.info" target="_blank" rel="noopener noreferrer" 
                    className="text-blue-500 underline">Aidan Andrews' Portfolio</a>. If I had not stumbled across him, I would have never created my website to look like this. When I 
                    am creative enough to come up with a different aesthetic, I will. However, this look is very pleasing to me.</p>
                </div>

                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-4">Hosting</h1>
                    <p className="text-gray-700 leading-7 dark:text-gray-400">This website is being hosted by DigitalOcean. You can learn more about them{' '}<a href="https://www.digitalocean.com/" 
                    target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>. I want to learn more about AWS, Google Cloud, and Microsoft Azure, but 
                    DigitalOcean has been the most beginner friendly for me. I expect to change once I become more experienced.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Miscellaneous;