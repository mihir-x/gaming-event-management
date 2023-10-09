

const FrequentQuestions = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-5 md:my-8 lg:my-16 space-y-2">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center">Frequently Asked Questions</h1>
            <div className="flex flex-col-reverse md:flex-row items-center ">
                <div className="space-y-5">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/cCD1bnP/grey-removebg-preview.png" alt="" className="hidden md:flex "/>
                    <img src="https://i.ibb.co/dD4G85m/gb.png" alt="" className="md:hidden" />
                </div>
            </div>
        </div>
    );
};

export default FrequentQuestions;