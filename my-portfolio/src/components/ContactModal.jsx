import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import Button from './shared/Button';
import gsap from 'gsap';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        summary: '',
        message: ''
    });

    const [isGenerating, setIsGenerating] = useState(false);

    // --- GSAP ANIMATIONS ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (isOpen) {
                // Open Animation
                gsap.to(overlayRef.current, {
                    autoAlpha: 1, duration: 0.3, ease: 'power2.out'
                });
                gsap.fromTo(contentRef.current,
                    { y: 50, autoAlpha: 0, scale: 0.95 },
                    { y: 0, autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)', delay: 0.1 }
                );
            } else {
                // Close Animation
                gsap.to(contentRef.current, {
                    y: 20, autoAlpha: 0, scale: 0.95, duration: 0.3, ease: 'power2.in'
                });
                gsap.to(overlayRef.current, {
                    autoAlpha: 0, duration: 0.3, delay: 0.1, ease: 'power2.in'
                });
            }
        }, modalRef);

        return () => ctx.revert();
    }, [isOpen]);

    // --- HANDLERS ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAiGenerate = async () => {
        if (!formData.summary) return;

        setIsGenerating(true);

        try {
            const response = await fetch('/.netlify/functions/generate-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    summary: formData.summary,
                    name: formData.name,
                    subject: formData.subject
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate message');
            }

            setFormData(prev => ({ ...prev, message: data.message }));
        } catch (error) {
            console.error('AI Generation Error:', error);
            alert('Failed to generate message. Please check your API key configuration.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending Email:', formData);
        // TODO: Integrate EmailJS here
        alert('Message sent! (Simulated)');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-root" ref={modalRef}>
            {/* Overlay */}
            <div className="modal-overlay" ref={overlayRef} onClick={onClose}></div>

            {/* Modal Content */}
            <div className="modal-content" ref={contentRef}>
                <button className="close-button" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2>Let's Connect</h2>
                    <p>Send me a message and I'll get back to you asap.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Project Inquiry..."
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* AI SECTION */}
                    <div className="ai-section">
                        <div className="form-group">
                            <label className="ai-label">
                                <Sparkles size={16} className="ai-icon" />
                                <span>AI Message Helper</span>
                            </label>
                            <div className="ai-input-wrapper">
                                <input
                                    type="text"
                                    name="summary"
                                    placeholder="e.g. Hiring for a Senior React role..."
                                    value={formData.summary}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="ai-generate-btn"
                                    onClick={handleAiGenerate}
                                    disabled={isGenerating || !formData.summary}
                                >
                                    {isGenerating ? <Loader2 className="spin" size={18} /> : <Sparkles size={18} />}
                                </button>
                            </div>
                            <p className="ai-hint">Type a short summary and click the sparkle to generate a full message.</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Message Body</label>
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your message will appear here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <Button variant="primary" type="submit" icon={Send} style={{ width: '100%', justifyContent: 'center' }}>
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
