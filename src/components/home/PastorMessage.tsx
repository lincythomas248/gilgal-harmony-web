import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import pastorImage from "@/assets/pastor-john-varghese.jpg";

const excerpt = "As we step into a new season, we pause with grateful hearts, thanking God for His grace, protection, and faithfulness that have brought us this far. The same God who guided us through yesterday continues to walk with us into tomorrow.";

const fullMessage = `Greetings in the name of our Lord and Savior Jesus Christ.

As we step into a new season, we pause with grateful hearts, thanking God for His grace, protection, and faithfulness that have brought us this far. The same God who guided us through yesterday continues to walk with us into tomorrow. Though the journey has included challenges, we give thanks for the strength, mercy, and assurance the Lord has provided every step of the way.

God's Word reminds us that He goes before us and prepares the way. When we place our trust in Him, we are never abandoned—even in moments of uncertainty. Our faithful God turns trials into testimonies and leads His people with hope, purpose, and direction.

In today's fast-changing world, we face many challenges as individuals, families, and communities. At such a time, the Church of God—called and set apart for His purpose—is invited to live out its faith through love, service, humility, and integrity. We are thankful for the privilege of worshipping, serving, and growing together as one body in Christ.

Jesus declared, "I am the light of the world." Through the work of the Holy Spirit, we are encouraged to reflect that light through lives shaped by prayer, compassion, faithful living, and godly character. It is the Lord who builds and strengthens His Church, and therefore we move forward with confidence, embracing the mission God has entrusted to us.

At IPC Gilgal Church, Sharjah & RAK, we seek to walk together in unity and mutual respect—supporting one another and serving the wider community with humility and care. We pray that God will grant us wisdom, courage, and grace as we continue this journey of faith, looking ahead with hope and trust in Him.

May the Lord bless every family, guard each life, and fill hearts with peace, good health, and spiritual strength. May this season be one of growth, renewal, and divine guidance for us all.`;

export function PastorMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section-cream py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-12 left-12 w-72 h-72 bg-accent/6 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-dove/6 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <div className="text-center mb-8">
            <span className="label-badge mb-2">A Word from Our Pastor</span>
            <h2 className="text-foreground text-2xl md:text-3xl">Pastor's Message</h2>
          </div>

          {/* Card */}
          <div className="max-w-3xl mx-auto">
            <div className="card-warm p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-gold-soft/20 to-card border border-gold/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Pastor Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={pastorImage}
                    alt="Pr. John Varghese delivering a message"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg ring-4 ring-white/50"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    Pr. John Varghese
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-4">
                    Minister-in-Charge
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5 font-serif italic">
                    "{excerpt}"
                  </p>
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-accent to-gold-dark hover:from-gold-dark hover:to-accent text-white font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    Read Message
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-cream border-gold/20">
          <DialogHeader>
            <div className="flex flex-col sm:flex-row items-center gap-4 pb-4 border-b border-border">
              <img
                src={pastorImage}
                alt="Pr. John Varghese delivering a message"
                className="w-20 h-20 rounded-xl object-cover shadow-md ring-2 ring-white/50"
              />
              <div className="text-center sm:text-left">
                <DialogTitle className="text-xl font-bold text-foreground">
                  Pastor's Message
                </DialogTitle>
                <p className="text-foreground font-semibold mt-1">Pr. John Varghese</p>
                <p className="text-accent text-sm">Minister-in-Charge</p>
              </div>
            </div>
          </DialogHeader>

          <div className="py-4">
            <p className="text-accent font-semibold italic mb-4">
              Greetings in the name of our Lord and Savior Jesus Christ.
            </p>
            
            {fullMessage.split('\n\n').slice(1).map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}

            {/* Signature Block */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-semibold">With prayers and blessings,</p>
              <p className="text-foreground font-bold mt-1">Pr. John Varghese</p>
              <p className="text-accent text-sm">Minister-in-Charge</p>
              
              <div className="mt-6 text-center">
                <p className="text-primary font-bold tracking-wide">
                  Vision – Mission – Action
                </p>
                <p className="text-accent font-semibold italic mt-2">
                  May God bless you.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
