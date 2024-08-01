import React from 'react';

const Miscellaneous = () => {
    return (
        <div className="centered-container">
            <div className="centered-content main-container">
                <p>Thanks for looking through my website!</p>

                <h1>Acknowledgements</h1>
                <p>Countless YouTube tutorials for React helped me create this website, along with the great looking timeline in the Projects section. You can find the documentation
                for that specific plugin to create one yourself right <a href="https://www.npmjs.com/package/react-vertical-timeline-component" target="_blank" rel="noopener noreferrer">
                here</a>. I had also done tons of Google searching trying to remember syntax + figure out how I wanted the pages to be laid out.
                </p>

                <h1>Layout</h1>
                <p>This layout was heavily inspired by <a href="https://www.aidanandrews.info" target="_blank" rel="noopener noreferrer">Aidan Andrews' Portfolio</a>
                . If I had not stumbled across him, I would have never created my website to look like this. When I am creative enough to come up with a different aesthetic, I will.
                 However, this look is very pleasing to me.</p>

                <h1>Hosting</h1>
                <p>This website is being hosted by DigitalOcean. You can learn more about them <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">here</a>.
                 I want to learn more about AWS, Google Cloud, and Microsoft Azure, but DigitalOcean has been the most beginner friendly for me. I expect to change once I become more
                experienced.</p>
                 
            </div>
        </div>
    );
}

export default Miscellaneous