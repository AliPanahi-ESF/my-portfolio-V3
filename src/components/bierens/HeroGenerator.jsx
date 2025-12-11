import { useState, useRef, useEffect } from 'react';
import { Sparkles, Loader2, AlertTriangle, ShieldCheck, Upload, Image as ImageIcon } from 'lucide-react';
import './HeroGenerator.css';

export default function HeroGenerator() {
    // Hardcoded demo key as requested
    const [apiKey] = useState('AIzaSyA20k0yPO8Q3jw7LiRCIaDfqRXrVOYK5e0');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(''); // 'analyzing', 'generating'
    const [heroDescription, setHeroDescription] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    // Debug: List available models on mount to console
    useEffect(() => {
        const checkModels = async () => {
            if (!apiKey) return;
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
                const data = await res.json();
                console.log("AVAILABLE MODELS:", data);
            } catch (e) {
                console.error("Failed to list models:", e);
            }
        };
        checkModels();
    }, [apiKey]);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError("File size should be under 5MB");
                return;
            }
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setError(null);
            setResultImage(null);
            setHeroDescription(null);
        }
    };

    const fileToGenerativePart = async (file) => {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    };

    const generateHero = async () => {
        if (!apiKey) {
            setError('Please enter a valid Google Cloud/Gemini API key first.');
            return;
        }
        if (!selectedFile) {
            setError('Please upload a photo first.');
            return;
        }

        setLoading(true);
        setError(null);
        setResultImage(null);
        setHeroDescription(null);

        try {
            // STEP 1: Analyze Image with Gemini 2.0 Flash (Experimental)
            // We use this version because it verified as accessible (returned 400 not 404).
            // We only ask for TEXT output here to avoid the "modalities: image" error.
            setStep('analyzing');
            const imagePart = await fileToGenerativePart(selectedFile);

            const visionRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: "Describe the physical appearance of the person in this image in detail (hair, gender, facial features, distinctive traits), but do not mention clothing. Keep it concise." },
                            imagePart
                        ]
                    }]
                })
            });

            if (!visionRes.ok) {
                const errorText = await visionRes.text();
                throw new Error(`Analysis Error (${visionRes.status}): ${errorText}`);
            }

            const visionData = await visionRes.json();
            const userDescription = visionData.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!userDescription) throw new Error("Could not analyze image.");

            setHeroDescription(userDescription); // Show text immediately

            // STEP 2: Generate Hero with Imagen 3
            setStep('generating');

            const finalPrompt = `A portrait of ${userDescription} as a superhero. Style: High-contrast black and white ink illustration, clean sharp vector lines, detailed cross-hatching shading, comic book aesthetic. Context: Isolated on a solid plain white background. Vibe: Intense, heroic, sleek, professional concept art.`;

            const imageRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generateImages?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: finalPrompt,
                    numberOfImages: 1
                })
            });

            if (!imageRes.ok) {
                // Log full error but don't clear description
                const errData = await imageRes.json();
                console.error("Image Gen Error:", errData);
                throw new Error(errData.error?.message || `Image API Error: ${imageRes.status}`);
            }

            const imageData = await imageRes.json();
            if (imageData.images?.[0]?.image64) {
                setResultImage(`data:image/jpeg;base64,${imageData.images[0].image64}`);
            } else {
                throw new Error('No image generated.');
            }

        } catch (err) {
            console.error('Process failed:', err);
            setError(err.message);
            // Do not clear heroDescription if it exists, so user sees partial success
        } finally {
            setLoading(false);
            setStep('');
        }
    };

    return (
        <div className="hero-generator-container">
            <div className="hg-header">
                <h3 className="hg-title">Bierens Hero Generator</h3>
                <p className="hg-subtitle">Upload your photo to reveal your superhero identity. Powered by Gemini Vision + Imagen.</p>
            </div>

            <div className="hg-controls">
                <div className="hg-input-group">
                    <label className="hg-label">1. Upload your Photo</label>
                    <div
                        className="hg-upload-box"
                        onClick={() => fileInputRef.current?.click()}
                        style={{
                            border: '2px dashed rgba(255,255,255,0.2)',
                            borderRadius: '0.5rem',
                            padding: '2rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: previewUrl ? `url(${previewUrl}) center/cover no-repeat` : 'rgba(0,0,0,0.3)',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            accept="image/*"
                            hidden
                        />

                        {!previewUrl && (
                            <>
                                <Upload size={32} style={{ marginBottom: '1rem', color: '#64748b' }} />
                                <span style={{ color: '#94a3b8' }}>Click to upload image</span>
                            </>
                        )}

                        {previewUrl && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                            >
                                <span style={{ color: 'white', fontWeight: 'bold' }}>Change Photo</span>
                            </div>
                        )}
                    </div>
                </div>

                <button
                    className="hg-button"
                    onClick={generateHero}
                    disabled={loading || !apiKey || !selectedFile}
                >
                    {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                    {loading ? (step === 'analyzing' ? 'Analyzing Photo...' : 'Forging Hero...') : 'Generate Hero'}
                </button>

                {error && (
                    <div className="hg-error">
                        <AlertTriangle size={16} />
                        <span>{error}</span>
                    </div>
                )}
            </div>

            <div className="hg-result-area" style={{ flexDirection: 'column' }}>
                {heroDescription && (
                    <div style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        marginBottom: '1.5rem',
                        maxWidth: '90%',
                        borderLeft: '3px solid #ef4444'
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#ef4444', textTransform: 'uppercase' }}>Hero Persona Identified</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', fontStyle: 'italic' }}>"{heroDescription}"</p>
                    </div>
                )}

                {loading ? (
                    <div style={{ textAlign: 'center', opacity: 0.7 }}>
                        <ShieldCheck size={48} style={{ marginBottom: '1rem', color: '#ef4444' }} className="animate-pulse" />
                        <p>{step === 'analyzing' ? 'Scanning facial features...' : 'Rendering graphic novel style...'}</p>
                    </div>
                ) : resultImage ? (
                    <img src={resultImage} alt="Generated Hero" className="hg-image" />
                ) : (
                    <div style={{ textAlign: 'center', opacity: 0.3 }}>
                        {!heroDescription && <ImageIcon size={48} style={{ marginBottom: '1rem' }} />}
                        <p>{heroDescription ? (error ? "Image generation unavailable." : "Drafting visual...") : "Result will appear here"}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
