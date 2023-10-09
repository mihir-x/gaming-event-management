

const FrequentQuestions = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-5 md:my-8 lg:my-16 space-y-5">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center">Frequently Asked Questions</h1>
            <div className="flex flex-col-reverse md:flex-row items-center ">
                <div className="space-y-5">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            What services do you offer for tech and gaming events?
                        </div>
                        <div className="collapse-content">
                            <p>We offer services like event planning, venue selection, logistics management, technical setup, tournament organization, and attendee engagement.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you handle both online and in-person gaming events?
                        </div>
                        <div className="collapse-content">
                            <p>Yes we handle both online and in-person gaming events. We have two different teams who are specialized on those field.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg md:text-xl font-medium">
                            What is your pricing structure for event management services?
                        </div>
                        <div className="collapse-content">
                            <p>Transparency in pricing is essential to build trust. We have basic pricing option that you will see in the service details.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/cCD1bnP/grey-removebg-preview.png" alt="" className="hidden md:flex " />
                    <img src="https://i.ibb.co/dD4G85m/gb.png" alt="" className="md:hidden" />
                </div>
            </div>
        </div>
    );
};

export default FrequentQuestions;