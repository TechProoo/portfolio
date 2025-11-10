import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divider } from "@/Components/Divider";
import { BadgeHeader } from "@/Components/Badge";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "sent" | "error"
  >("idle");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const primaryBtnRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact_inner",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact_section", start: "top 92%" },
      }
    );

    gsap.utils.toArray(".social_link").forEach((el, i) => {
      const node = el as HTMLElement;
      gsap.fromTo(
        node,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 95%" },
        }
      );
    });

    gsap.utils.toArray(".contact_btn").forEach((el) => {
      const btn = el as HTMLElement;
      btn.addEventListener("mouseenter", () =>
        gsap.to(btn, { scale: 1.03, duration: 0.18, ease: "power2.out" })
      );
      btn.addEventListener("mouseleave", () =>
        gsap.to(btn, { scale: 1, duration: 0.25, ease: "power3.out" })
      );
    });
  });

  // animate modal when it opens
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.96, y: 16, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.36, ease: "power3.out" }
      );
      // focus primary button if available
      setTimeout(() => primaryBtnRef.current?.focus(), 80);
    }
  }, [modalOpen]);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    // simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!re.test(email)) return "Please enter a valid email.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus("error");
      setModalTitle("Please fix the form");
      setModalMessage(err);
      setModalAction(null);
      setModalOpen(true);
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      // prepare mailto but show a confirmation modal so it feels intentional
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(
        message + "\n\n" + "Contact email: " + email
      );
      const mailto = `mailto:${"your-email@example.com"}?subject=${subject}&body=${body}`;

      setModalTitle("Ready to send");
      setModalMessage(
        'Click "Open Mail" to compose an email with your message.'
      );
      setModalAction(mailto);
      setModalOpen(true);
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="contact_section">
        <div className="container">
          <Divider />
          <BadgeHeader text="Contact" />

          <div className="contact_inner mt-10">
            <div className="contact_form_wrap">
              <div className="contact_form_card">
                <h2 className="contact_title">Let’s Work Together!</h2>
                <p className="contact_sub">
                  Have a project idea or want to collaborate? Send a note and
                  I’ll reply shortly.
                </p>

                <form
                  className="contact_form"
                  onSubmit={onSubmit}
                  aria-label="Contact form"
                >
                  <label className="sr_only" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label className="sr_only" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="sr_only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    placeholder="Tell me about your project..."
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                  />

                  <div className="contact_actions">
                    <button
                      type="submit"
                      className="contact_btn"
                      aria-live="polite"
                    >
                      {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                        ? "Email opened"
                        : "Send Message"}
                    </button>
                    <a
                      className="mailto_link"
                      href="mailto:your-email@example.com"
                    >
                      or email: your-email@example.com
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <aside className="contact_info">
              <div className="contact_info_card">
                <h3>Other ways to reach me</h3>
                <p className="muted">
                  Quick links — follow or message on these platforms.
                </p>

                <div className="socials">
                  <a
                    className="social_link"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="social_link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="social_link"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </div>

                <div className="contact_meta">
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:your-email@example.com">
                      your-email@example.com
                    </a>
                  </div>
                  <div>
                    <strong>Location:</strong> Remote / London
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Modal */}
      {modalOpen && (
        <div
          className="modal_overlay"
          role="presentation"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="modal_card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <h3 id="modalTitle">{modalTitle}</h3>
            <p className="modal_message">{modalMessage}</p>
            <div className="modal_actions">
              {modalAction && (
                <button
                  ref={primaryBtnRef}
                  className="modal_primary"
                  onClick={() => {
                    if (modalAction) window.location.href = modalAction;
                    setModalOpen(false);
                  }}
                >
                  Open Mail
                </button>
              )}
              <button
                className="modal_secondary"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
