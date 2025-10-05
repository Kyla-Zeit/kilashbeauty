// components/contact-section.tsx
'use client'

import Reveal from '@/components/Reveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal animation="animate-fade-up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your look? Get in touch to schedule your consultation and lash extension appointment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form — enters from left */}
          <Reveal
            animation="animate-fade-in-left"
            threshold={0.18}
            rootMargin="0px 0px -10% 0px"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Textarea
                  placeholder="Tell us about your desired lash look or any questions you have..."
                  className="min-h-[120px]"
                />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </Reveal>

          {/* Contact Information — column enters from right, cards stagger (faster) */}
          <Reveal
            animation="animate-fade-in-right"
            delay={70}                  // was 110
            threshold={0.18}
            rootMargin="0px 0px -10% 0px"
          >
            <div className="space-y-6">
              <Reveal animation="animate-fade-up" delay={90} threshold={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Visit Our Studio</h3>
                        <p className="text-muted-foreground">
                          123 Beauty Lane
                          <br />
                          Downtown District
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal animation="animate-fade-up" delay={90} threshold={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal animation="animate-fade-up" delay={90} threshold={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground">info@kilashbeauty.ca</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal animation="animate-fade-up" delay={90} threshold={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Studio Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p>Saturday: 9:00 AM - 6:00 PM</p>
                          <p>Sunday: 10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal animation="animate-fade-up" delay={90} threshold={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Instagram className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Follow Us</h3>
                        <p className="text-muted-foreground">@kilashbeauty</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          View Instagram
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
