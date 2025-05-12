import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-start bg-white dark:bg-neutral-900 dark:text-white px-4 animate-fade-in">
      <div className="max-w-5xl w-full flex flex-col gap-10 mt-10 mb-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Let's get in touch!</h1>
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfuEAqZaviyrnbtG6Gm0qGP66kvzfndW3x-avZPDqG3Cg29yg/viewform?embedded=true" width="640" height="711" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
