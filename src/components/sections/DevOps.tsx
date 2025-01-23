import Card from "../Card";
import OdooImg from "../img/Odoo.png";
export default function DevOps() {
  return (
    <div className="-mt-28 pt-28">
      <section className="py-8 relative  text-gray-100" id="all-features">
        {/* Background Grid */}
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className="container grid-cols-6 relative w-full h-full mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-px bg-gradient-to-b from-gray-700 via-gray-600 to-transparent bg-[length:1px_9px]"
              />
            ))}
            {/* <div className="w-px bg-gradient-to-b from-gray-700 via-gray-600 to-transparent bg-[length:1px_9px] absolute right-4 top-0 h-full"></div> */}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <div className="text-center container mx-auto mb-8">
            <h2 className="font-sans text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Built for the Future of Development
            </h2>
            <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mt-4 text-gray-300">
              Discover the difference our AI and Tailwind CSS features can bring
              to your web projects with solutions designed for today's coding
              needs.
            </p>
          </div>

          {/* Cards Section */}
          <div
            id="scroll-cards"
            className="space-y-6 container mx-auto -translate-y-24 pt-32"
          >
            {/* Card 1 */}
            <Card
              id="scroll-card-0"
              zIndex={1}
              margin={{ left: "0px", right: "0px" }}
              title="We are Odoo ready partner in Myanmar. ​"
              description="Our Odoo ERP Services:​"
              features={[
                "Consultation",
                "Implementation",
                "Customization development",
                "Cloud Server Hosting",
                "Data Migration",
                "Maintenance",
                "User Training & System Support",
              ]}
              imageSrc="https://www.o2btechnologies.com/static/o2b_blog_odoo_ready_partner/Odoo%20Ready%20Partner.webp"
            />

            {/* Card 2 */}
            <Card
              id="scroll-card-1"
              zIndex={0}
              margin={{ left: "15px", right: "15px" }}
              title="Moodle LMS"
              description="Skip repetitive tasks and focus on your core application logic to deliver stunning results out of the box."
              features={[
                "Web & Mobile Application Development​",
                "Moodle LMS ​",
                "Moodle Workplace ​",
                "Consultation, Implementation, Customize Development​",
                "Cloud Server Hosting ​",
                "ERP System for Educational Industry   ​",
              ]}
              imageSrc="https://lms.bvis.ch/pluginfile.php/117/course/overviewfiles/MTB.jpg"
            />

            {/* Card 3 */}
            <Card
              id="scroll-card-2"
              zIndex={-1}
              margin={{ left: "30px", right: "30px" }}
              title="Web Development"
              description="At our company, we specialize in building powerful, scalable, and visually appealing websites using the latest technologies."
              features={["WordPress", "React JS", "Node JS", "Next JS"]}
              imageSrc="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
