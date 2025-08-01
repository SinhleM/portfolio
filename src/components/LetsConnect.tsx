import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function LetsConnect() {
  return (
    <section id="connect" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Let's <span className="text-primary">Connect</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Have a project in mind or just want to say hi? Fill out the form below.
      </p>

      <form className="max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
           </div>
           <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
           </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message..." />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  );
}