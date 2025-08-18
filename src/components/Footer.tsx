"use client"

import React from 'react'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiFacebook, SiLinkedin } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center">
                                <Image
                                    src="/Logo.png"
                                    alt="Logo"
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <span className="font-serif text-xl font-semibold">
                                Nyiha Mathenge Advocates
                            </span>
                        </div>
                        <p className="text-primary-foreground/80 mb-6 max-w-md">
                            Providing professional legal services with integrity, expertise, and dedication.
                            Your trusted advocates in the pursuit of justice.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors"
                            >
                                <SiFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors"
                            >
                                <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors"
                            >
                                <SiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/practice-areas"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Practice Areas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary-light" />
                                <Link
                                    href="tel:+254726479027"
                                    className="text-primary-foreground/80">+254 726 479027
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary-light" />
                                <Link
                                    href="mailto:nma@gmail.com"
                                    className="text-primary-foreground/80">nma@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-light mt-0.5" />
                                <Link
                                    href="https://www.google.com/maps?q=Westlands+Commercial+Center+Nairobi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-foreground/80">
                                    Westlands Commercial Center Nairobi, Kenya
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
                    <p className="text-primary-foreground/60">
                        &copy; {currentYear} Nyiha Mathenge Advocates. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
