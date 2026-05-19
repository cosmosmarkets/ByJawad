export default function CTA() {
  return (
    <section id="start" className="relative py-24 lg:py-32 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(245, 240, 230, 0.6) 1px, transparent 1px)", backgroundSize: "10px 10px" }} aria-hidden="true" />
      <div className="relative max-w-2xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] mb-4">
            Ready for site that works as hard as you?
          </h2>
          <p className="text-cream/85">I take two builds per month to keep quality high.</p>
        </div>
        <form
          id="intake-form"
          className="bg-white text-ink border border-cream/20 rounded-sm p-6 sm:p-8"
          action="https://formsubmit.co/hello@byjawad.com"
          method="post"
        >
          <input type="hidden" name="_subject" value="New By Jawad inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border border-forest/20 rounded-sm p-3" type="text" name="name" placeholder="Your name" required />
            <input className="border border-forest/20 rounded-sm p-3" type="email" name="email" placeholder="you@studio.com" required />
          </div>
          <textarea className="border border-forest/20 rounded-sm p-3 w-full mt-4 min-h-28" name="message" placeholder="What should your site do?" required />
          <button className="mt-5 w-full bg-forest text-cream font-semibold text-sm py-3 rounded-sm" type="submit">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
