import React, { Component } from "react";

export default class s16_ex10 extends Component {
    render() {
        return (
            <div className="font-sans">
                <header className="flex justify-between items-center px-10 py-6">
                    <div className="text-2xl font-bold">Jadoo</div>
                    <nav className="flex gap-8 text-gray-700">
                        <a href="#">Destinations</a>
                        <a href="#">Hotels</a>
                        <a href="#">Flights</a>
                        <a href="#">Bookings</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-700">Login</button>
                        <button className="border px-4 py-1 rounded">
                            Sign up
                        </button>
                        <select className="border rounded px-2 py-1">
                            <option>EN</option>
                            <option>VN</option>
                        </select>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="flex justify-between items-center px-10 py-16">
                    <div className="max-w-lg">
                        <p className="text-red-500 font-semibold mb-3">
                            BEST DESTINATIONS AROUND THE WORLD
                        </p>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Travel, enjoy <br /> and live a new <br /> and full
                            life
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Built Wicket longer admire do barton vanity itself
                            do in it. Preferred to sportsmen it engrossed
                            listening. Park gate sell they west hard for the.
                        </p>
                        <div className="flex gap-6">
                            <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold">
                                Find out more
                            </button>
                            <button className="flex items-center gap-2 text-gray-700">
                                ⏵ Play Demo
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 h-96 bg-gray-200 flex items-center justify-center">
                        (Ảnh minh họa)
                    </div>
                </section>

                {/* Services Section */}
                <section className="px-10 py-16 text-center">
                    <p className="text-gray-500 uppercase tracking-wide">
                        Category
                    </p>
                    <h2 className="text-3xl font-bold mb-12">
                        We Offer Best Services
                    </h2>
                    <div className="grid grid-cols-4 gap-8">
                        <div className="p-6 rounded-lg shadow">
                            <div className="text-4xl mb-4">☁️</div>
                            <h3 className="font-bold mb-2">
                                Calculated Weather
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Built Wicket longer admire do barton vanity
                                itself do in it.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <div className="text-4xl mb-4">✈️</div>
                            <h3 className="font-bold mb-2">Best Flights</h3>
                            <p className="text-gray-600 text-sm">
                                Engrossed listening. Park gate sell they west
                                hard for the.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="font-bold mb-2">Local Events</h3>
                            <p className="text-gray-600 text-sm">
                                Barton vanity itself do in it. Preferred to men
                                engrossed listening.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <div className="text-4xl mb-4">⚙️</div>
                            <h3 className="font-bold mb-2">Customization</h3>
                            <p className="text-gray-600 text-sm">
                                We deliver outsourced aviation services for
                                military customers
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
