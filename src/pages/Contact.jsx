// Contact.js


const Contact = () => {
  
  const handleSubmit = (formData)=>{
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  }

    return (
        <section className="bg-black py-7">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">Contact Us</h2>
                <form action={handleSubmit} className="max-w-lg mx-auto bg-transparent p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                            Enter your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                            Enter your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                            Enter your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:animate-bounce text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
