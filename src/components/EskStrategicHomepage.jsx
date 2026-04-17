import { useMemo, useState } from "react";
import styles from "../styles/EskStrategicHomepage.module.css";
import logo from "../assets/logo.png";
import { BarChart2, Code2, Server, Zap, Cloud, Network } from "lucide-react";

export default function EskStrategicHomepage() {
  // Language State 
  const [language, setLanguage] = useState("en");

  //  Translations 
  const copy = useMemo(
    () => ({
      //  English 
      en: {
        brandTag: "Strategic Excellence",
        nav: {
          home: "Home",
          about: "About",
          services: "Services",
          process: "Process",
          contact: "Contact",
        },
        cta: {
          quote: "Get a Quote",
          explore: "Explore Our Services",
          contact: "Contact Us",
          start: "Start a Conversation",
          submit: "Submit Enquiry",
        },
        hero: {
          badge: "Adding value through strategic excellence",
          title:
            "Strategic Solutions for Growth, Innovation, and Digital Excellence",
          body: "We help businesses from startups to scale-ups build, optimise and scale through strategic advisory, custom software development and cloud solutions.",
          highlights: [
            "Tailored business and technology solutions",
            "Results-driven strategic execution",
            "Premium, professional service delivery",
            "Long-term partnership mindset",
          ],
        },
        about: {
          eyebrow: "About Us",
          title: "A trusted partner for business transformation",
          p1: "At ESK Strategic Solutions, we partner with organisations to deliver practical, forward-thinking business and technology solutions. Our work is grounded in strategic insight, operational excellence, and a commitment to helping clients modernise, optimise, and grow.",
          p2: "We believe strong solutions should not only look good on paper but they should solve real problems, improve performance, and create sustainable value.",
          missionTitle: "Mission",
          mission:
            "To deliver innovative and strategic solutions that create sustainable value for our clients.",
          visionTitle: "Vision",
          vision:
            "To be a trusted partner in business transformation and digital excellence across Africa and beyond.",
        },
        services: {
          eyebrow: "Our Services",
          title: "Solutions designed to move your business forward",
          intro:
            "We combine strategic consulting and digital capability to help organisations improve operations, strengthen technology foundations, and unlock new growth opportunities.",
          items: [
            {
              title: "Strategic & Operational Consulting",
              description:
                "Digital strategy, business optimisation, innovation planning, and tailored advisory services to help organisations grow and remain competitive.",
            },
            {
              title: "Custom Software Development",
              description:
                "Tailored web and mobile applications that solve business problems, improve workflows, and enhance customer experiences.",
            },
            {
              title: "Managed IT Services",
              description:
                "Reliable infrastructure support, managed digital services, procurement guidance, and continuous operational assistance.",
            },
            {
              title: "Automation & Optimisation",
              description:
                "Process automation, workflow improvement, and performance enhancement to reduce inefficiencies and increase value.",
            },
            {
              title: "Cloud Strategy",
              description:
                "Cloud migration, infrastructure planning, security best practices, and cost optimisation for scalable digital growth.",
            },
            {
              title: "IT Infrastructure Solutions",
              description:
                "Strong technology foundations through infrastructure design, system support, and managed digital environments.",
            },
          ],
        },
        process: {
          eyebrow: "Our Process",
          title: "How we work with clients",
          items: [
            {
              step: "01",
              title: "Discover",
              description:
                "We learn about your business, goals, pain points, and opportunities.",
            },
            {
              step: "02",
              title: "Strategise",
              description:
                "We define the right roadmap and solution approach for measurable impact.",
            },
            {
              step: "03",
              title: "Deliver",
              description:
                "We implement high-quality solutions aligned with your objectives.",
            },
            {
              step: "04",
              title: "Optimise",
              description:
                "We refine, support, and improve to sustain long-term value.",
            },
          ],
        },
        why: {
          eyebrow: "Why Choose ESK",
          title: "A premium, practical, and results-focused partner",
          body: "We focus on delivering solutions that are aligned to business reality, not just ideas, but execution that improves efficiency, supports growth, and creates measurable value.",
        },
        contact: {
          eyebrow: "Contact Us",
          title: "Let's discuss how we can support your business",
          body: "Whether you need strategic advice, technology support, or a custom digital solution, we would be glad to connect and explore how ESK Strategic Solutions can help.",
          email: "Email",
          phone: "Phone",
          location: "Location",
          reg: "Registration No.",
          formTitle: "Send us an enquiry",
          namePlaceholder: "Your Name",
          emailPlaceholder: "Email Address",
          companyPlaceholder: "Company",
          needsPlaceholder: "Type your message in here...",
          locationValue: "Johannesburg, South Africa",
          sending: "Sending...",
          success:
            "We have received your message. We will contact you shortly.",
          error: "Something went wrong. Please try again.",
        },
        footer: "Adding value through strategic excellence",
      },

      // French 
      fr: {
        brandTag: "Excellence stratégique",
        nav: {
          home: "Accueil",
          about: "À propos",
          services: "Services",
          process: "Processus",
          contact: "Contact",
        },
        cta: {
          quote: "Demander un devis",
          explore: "Découvrez nos services",
          contact: "Nous contacter",
          start: "Entamer la conversation",
          submit: "Envoyer la demande",
        },
        hero: {
          badge: "Créer de la valeur grâce à l'excellence stratégique",
          title:
            "Des solutions stratégiques pour la croissance, l'innovation et l'excellence numérique",
          body: "Nous aidons les entreprises, des startups aux scale-ups, à construire, optimiser et à se développer grâce à des conseils stratégiques, au développement de logiciels sur mesure et à des solutions cloud.",
          highlights: [
            "Des solutions métier et technologiques sur mesure",
            "Une exécution stratégique axée sur les résultats",
            "Une prestation premium et professionnelle",
            "Un partenariat fondé sur le long terme",
          ],
        },
        about: {
          eyebrow: "À propos",
          title:
            "Un partenaire de confiance pour la transformation des entreprises",
          p1: "Chez ESK Strategic Solutions, nous accompagnons les organisations avec des solutions métier et technologiques concrètes et tournées vers l'avenir. Notre approche repose sur une vision stratégique, l'excellence opérationnelle et un engagement constant à aider nos clients à se moderniser, à s'optimiser et à se développer.",
          p2: "Nous pensons que de bonnes solutions ne doivent pas seulement être séduisantes sur le papier mais elles doivent résoudre de vrais problèmes, améliorer les performances et créer une valeur durable.",
          missionTitle: "Mission",
          mission:
            "Fournir des solutions innovantes et stratégiques qui créent une valeur durable pour nos clients.",
          visionTitle: "Vision",
          vision:
            "Être un partenaire de confiance en transformation des entreprises et en excellence numérique en Afrique et au-delà.",
        },
        services: {
          eyebrow: "Nos services",
          title: "Des solutions conçues pour faire avancer votre entreprise",
          intro:
            "Nous combinons conseil stratégique et expertise numérique pour aider les organisations à améliorer leurs opérations, renforcer leurs fondations technologiques et débloquer de nouvelles opportunités de croissance.",
          items: [
            {
              title: "Conseil stratégique et opérationnel",
              description:
                "Stratégie digitale, optimisation de l'entreprise, planification de l'innovation et conseil sur mesure pour aider les organisations à croître et à rester compétitives.",
            },
            {
              title: "Développement logiciel sur mesure",
              description:
                "Applications web et mobiles conçues sur mesure pour résoudre des problèmes métier, améliorer les processus et enrichir l'expérience client.",
            },
            {
              title: "Services IT managés",
              description:
                "Support d'infrastructure fiable, services numériques managés, accompagnement achats et assistance opérationnelle continue.",
            },
            {
              title: "Automatisation et optimisation",
              description:
                "Automatisation des processus, amélioration des flux de travail et optimisation des performances pour réduire les inefficacités et accroître la valeur.",
            },
            {
              title: "Stratégie cloud",
              description:
                "Migration cloud, planification d'infrastructure, bonnes pratiques de sécurité et optimisation des coûts pour une croissance numérique évolutive.",
            },
            {
              title: "Solutions d'infrastructure IT",
              description:
                "Des bases technologiques solides grâce à la conception d'infrastructure, au support système et à des environnements numériques managés.",
            },
          ],
        },
        process: {
          eyebrow: "Notre processus",
          title: "Comment nous travaillons avec nos clients",
          items: [
            {
              step: "01",
              title: "Découvrir",
              description:
                "Nous prenons connaissance de votre activité, de vos objectifs, de vos défis et de vos opportunités.",
            },
            {
              step: "02",
              title: "Structurer",
              description:
                "Nous définissons la bonne feuille de route et l'approche la plus adaptée pour générer un impact mesurable.",
            },
            {
              step: "03",
              title: "Déployer",
              description:
                "Nous mettons en œuvre des solutions de qualité, alignées sur vos objectifs.",
            },
            {
              step: "04",
              title: "Optimiser",
              description:
                "Nous affinons, accompagnons et améliorons durablement la valeur créée.",
            },
          ],
        },
        why: {
          eyebrow: "Pourquoi choisir ESK",
          title: "Un partenaire premium, pragmatique et axé sur les résultats",
          body: "Nous livrons des solutions alignées sur la réalité de l'entreprise, pas seulement des idées, mais une exécution qui améliore l'efficacité, soutient la croissance et crée une valeur mesurable.",
        },
        contact: {
          eyebrow: "Contact",
          title:
            "Discutons de la manière dont nous pouvons accompagner votre entreprise",
          body: "Que vous ayez besoin de conseil stratégique, de support technologique ou d'une solution numérique sur mesure, nous serions ravis d'échanger avec vous pour voir comment ESK Strategic Solutions peut vous aider.",
          email: "E-mail",
          phone: "Téléphone",
          location: "Localisation",
          reg: "N° d'enregistrement",
          formTitle: "Envoyez-nous une demande",
          namePlaceholder: "Votre nom",
          emailPlaceholder: "Adresse e-mail",
          companyPlaceholder: "Entreprise",
          needsPlaceholder: "Tapez votre message ici...",
          locationValue: "Johannesburg, Afrique du Sud",
          sending: "Envoi en cours...",
          success:
            "Nous avons bien reçu votre message. Nous vous contacterons très prochainement.",
          error: "Une erreur s'est produite. Veuillez réessayer.",
        },
        footer: "Créer de la valeur grâce à l'excellence stratégique",
      },
    }),
    [],
  );

  // Active translation shortcut 
  const t = copy[language];

  //  Service Icons
  const serviceIcons = [
    <BarChart2 size={32} />,
    <Code2 size={32} />,
    <Server size={32} />,
    <Zap size={32} />,
    <Cloud size={32} />,
    <Network size={32} />,
  ];

  //  Form State 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  // idle | sending | success | error

  // Form Handlers 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");

    try {
      const response = await fetch("https://eskstrategic.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message
        setFormStatus("success");
        // Clear form
        setFormData({ name: "", email: "", company: "", message: "" });
        // Redirect after 20 seconds
        setTimeout(() => {
          setFormStatus("idle");
          window.location.href = "#contact";
        }, 20000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  // Render 
  return (
    <div className={styles.page}>
      {/*  Header  */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Logo - click to go back to top */}
          <a href="#home" className={styles.logo}>
            <img
              src={logo}
              alt="ESK Strategic Solutions"
              className={styles.logoImg}
            />
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>
              {t.nav.home}
            </a>
            <a href="#about" className={styles.navLink}>
              {t.nav.about}
            </a>
            <a href="#services" className={styles.navLink}>
              {t.nav.services}
            </a>
            <a href="#process" className={styles.navLink}>
              {t.nav.process}
            </a>
            <a href="#contact" className={styles.navLink}>
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Toggle + CTA */}
          <div className={styles.headerActions}>
            <div className={styles.langToggle}>
              <button
                onClick={() => setLanguage("en")}
                className={`${styles.langBtn} ${language === "en" ? styles.langBtnActive : ""}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`${styles.langBtn} ${language === "fr" ? styles.langBtnActive : ""}`}
              >
                FR
              </button>
            </div>
            <a href="#contact" className={styles.btnPrimary}>
              {t.cta.quote}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/*  Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>{t.hero.badge}</div>
              <h1 className={styles.heroTitle}>{t.hero.title}</h1>
              <p className={styles.heroBody}>{t.hero.body}</p>
              <div className={styles.heroBtn}>
                <a href="#services" className={styles.btnPrimary}>
                  {t.cta.explore}
                </a>
                <a href="#contact" className={styles.btnOutline}>
                  {t.cta.contact}
                </a>
              </div>
              <div className={styles.highlightsGrid}>
                {t.hero.highlights.map((item) => (
                  <div key={item} className={styles.highlightCard}>
                    <div className={styles.highlightDot} />
                    <p className={styles.highlightText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*  About Section  */}
        <section id="about" className={styles.about}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className={styles.eyebrow}>{t.about.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.about.title}</h2>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <div className={styles.missionVisionGrid}>
              <div className={styles.missionCard}>
                <p className={styles.missionLabel}>{t.about.missionTitle}</p>
                <p className={styles.missionText}>{t.about.mission}</p>
              </div>
              <div className={styles.missionCard}>
                <p className={styles.missionLabel}>{t.about.visionTitle}</p>
                <p className={styles.missionText}>{t.about.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/*  Services Section  */}
        <section id="services" className={styles.services}>
          <div className={styles.servicesIntro}>
            <p className={styles.eyebrow}>{t.services.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.services.title}</h2>
            <p className={styles.sectionBody}>{t.services.intro}</p>
          </div>
          <div className={styles.servicesGrid}>
            {t.services.items.map((service, index) => (
              <div key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{serviceIcons[index]}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/*  Process Section  */}
        <section id="process" className={styles.process}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>{t.process.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.process.title}</h2>
            <div className={styles.processGrid}>
              {t.process.items.map((item) => (
                <div key={item.step} className={styles.processCard}>
                  <p className={styles.processStep}>{item.step}</p>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ESK Section */}
        <section className={styles.whySection}>
          <div className={styles.whyBox}>
            <div className={styles.whyContent}>
              <p className={styles.eyebrow}>{t.why.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.why.title}</h2>
              <p className={styles.sectionBody}>{t.why.body}</p>
            </div>
            <a href="#contact" className={styles.btnPrimary}>
              {t.cta.start}
            </a>
          </div>
        </section>

        {/*  Contact Section  */}
        <section id="contact" className={styles.contact}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div>
              <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
              <p className={styles.sectionBody}>{t.contact.body}</p>
              <div className={styles.contactInfoGrid}>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>{t.contact.email}</p>
                  <p className={styles.contactValue}>info@eskstrategic.co.za</p>
                </div>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>{t.contact.phone}</p>
                  <p className={styles.contactValue}>+27 65 950 1557</p>
                </div>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>{t.contact.location}</p>
                  <p className={styles.contactValue}>
                    {t.contact.locationValue}
                  </p>
                </div>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>{t.contact.reg}</p>
                  <p className={styles.contactValue}>2025/856075/07</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formOuter}>
              <div className={styles.formInner}>
                <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>

                {/* Success Message*/}
                {formStatus === "success" ? (
                  <div className={styles.formSuccess}>
                    <div className={styles.formSuccessIcon}>✓</div>
                    <p className={styles.formSuccessText}>
                      {t.contact.success}
                    </p>
                    <p className={styles.formSuccessTimer}>
                      Redirecting in 20 seconds...
                    </p>
                  </div>
                ) : (
                  /*  Form Fields  */
                  <div className={styles.formFields}>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.contact.namePlaceholder}
                      className={styles.formInput}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t.contact.emailPlaceholder}
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder={t.contact.companyPlaceholder}
                      className={styles.formInput}
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <textarea
                      rows={5}
                      name="message"
                      placeholder={t.contact.needsPlaceholder}
                      className={styles.formInput}
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {/* Error message */}
                    {formStatus === "error" && (
                      <p className={styles.formError}>{t.contact.error}</p>
                    )}

                    {/* Submit button */}
                    <button
                      className={styles.btnPrimary}
                      onClick={handleSubmit}
                      disabled={formStatus === "sending"}
                    >
                      {formStatus === "sending"
                        ? t.contact.sending
                        : t.cta.submit}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Footer  */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© 2026 ESK Strategic Solutions. All rights reserved.</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
