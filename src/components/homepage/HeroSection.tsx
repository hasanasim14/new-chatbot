import { CheckCircle2, Notebook, HandHelping } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-white p-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white shadow-2xl p-10 space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to <span className="text-yellow-400">Mayfair - AIVA</span>,
            your Artificially Intelligent Virtual Assistant!
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Now you can experience how AIVA works with your brand.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-400 text-center">
          What AIVA can do right now:
        </h2>

        <ol className="space-y-8 text-white/90">
          <li>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Answer general questions
              </span>
            </div>
            <p>
              Answer general questions AIVA has access to to the information
              provided in the last email which is mainly the About the Company
              and some placeholder info for the Leadership.
            </p>
          </li>

          <li>
            <div className="flex items-center gap-3 mb-2">
              <Notebook className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Record Leads
              </span>
            </div>
            <p>
              Second, AIVA can record leads by holding a short conversation with
              the user. It will request their email (which is required), phone
              number (optional), full name, and message. From there, it
              automatically interprets the subject and other relevant fields,
              and then sends a copy of the recorded information to the email the
              user provides.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-3 mb-2">
              <HandHelping className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white text-lg">
                Guided Interaction
              </span>
            </div>
            <p>
              Any user who seeks information about the company is first greeted
              with a simple choice menu, which helps clarify what they are
              looking for. This feature has been incorporated as a demonstration
              so we can get a feel for how it works and decide whether we want
              to adjust it or remove it moving forward.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HeroSection;
