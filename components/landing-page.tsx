'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CheckCircle, Menu, QrCode, } from 'lucide-react'

export function LandingPageComponent() {
  const [annualBilling, setAnnualBilling] = useState(false)

  const features = [
    "QR Code Pass Management",
    "Event Ticketing",
    "Family Accounts",
    "Access Control",
    "Reporting & Analytics",
    "24/7 Support"
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: annualBilling ? 99 : 9,
      period: annualBilling ? "/year" : "/month",
      features: ["Up to 100 members", "Basic reporting", "Email support"],
      cta: "Try for 60 Days"
    },
    {
      name: "Pro",
      price: annualBilling ? 499 : 49,
      period: annualBilling ? "/year" : "/month",
      features: ["Up to 1,000 members", "Advanced analytics", "Priority support", "Custom branding"],
      cta: "Try for 60 Days",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited members", "Dedicated account manager", "On-premise deployment option", "Custom integrations"],
      cta: "Contact Sales"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8" />
              <span className="text-2xl font-bold">SportPassManager</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#features" className="hover:underline">Features</a>
              <a href="#pricing" className="hover:underline">Pricing</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Streamline Your Sports Facility Management</h1>
            <p className="text-xl mb-8">Effortlessly manage memberships, events, and access control with QR code technology</p>
            <Button size="lg" className="text-lg px-8 py-6">Try for 60 Days</Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <span className={`font-medium ${!annualBilling ? 'text-primary' : 'text-gray-500'}`}>Monthly</span>
              <Switch
                checked={annualBilling}
                onCheckedChange={setAnnualBilling}
                id="annual-billing"
              />
              <Label htmlFor="annual-billing" className={`font-medium ${annualBilling ? 'text-primary' : 'text-gray-500'}`}>
                Annual (Save 20%)
              </Label>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute top-0 right-0 m-4">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>{plan.cta}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact our sales team for a personalized demo and to discuss your specific needs.</p>
            <Button size="lg" className="text-lg px-8 py-6">Contact Sales</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SportPassManager</h3>
              <p>Streamlining sports facility management with cutting-edge technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 SportPassManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}