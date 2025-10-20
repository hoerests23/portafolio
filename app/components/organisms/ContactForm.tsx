import { useState } from "react";
import { Text } from "~/components/atoms/Text";
import { Input } from "~/components/atoms/Input";
import { Button } from "~/components/atoms/Button";

export function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        comentario: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        setTimeout(() => {
            console.log('Datos del formulario:', formData);
            
            setIsSubmitting(false);
            setSubmitStatus('success');
            
            // limpiar formu
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                comentario: ''
            });

            // reset dps de X segundos (4)
            setTimeout(() => setSubmitStatus('idle'), 4000);
            }, 1000);
    };

    return (
        <div id="contact" style={{
        minHeight: '100vh',
        padding: '120px 0'
        }}>
        <div style={{ 
            marginBottom: '80px',
            borderLeft: '4px solid #fff',
            paddingLeft: '20px'
        }}>
            <Text size="xl" weight="bold">Contacto</Text>
        </div>

        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <div style={{ marginBottom: '40px' }}>
            <Text size="medium" color="#ccc" style={{ lineHeight: '1.8' }}>
                ¿Tienes algún proyecto en mente o quieres que trabajemos juntos? 
                No dudes en contactarme. Responderé lo antes posible.
            </Text>
            </div>

            <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '50px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
            }}>
                <div>
                <label style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    color: '#ccc',
                    fontSize: '14px'
                }}>
                    Nombre *
                </label>
                <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(value) => setFormData({...formData, nombre: value})}
                    required
                />
                </div>

                <div>
                <label style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    color: '#ccc',
                    fontSize: '14px'
                }}>
                    Apellido *
                </label>
                <Input
                    type="text"
                    placeholder="Tu apellido"
                    value={formData.apellido}
                    onChange={(value) => setFormData({...formData, apellido: value})}
                    required
                />
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: '#ccc',
                fontSize: '14px'
                }}>
                Correo electrónico *
                </label>
                <Input
                type="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={(value) => setFormData({...formData, email: value})}
                required
                />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: '#ccc',
                fontSize: '14px'
                }}>
                Comentario *
                </label>
                <Input
                type="textarea"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
                value={formData.comentario}
                onChange={(value) => setFormData({...formData, comentario: value})}
                required
                rows={6}
                />
            </div>

            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px' 
            }}>
                <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>

                {submitStatus === 'success' && (
                <Text size="small" color="#4ade80">
                    ✓ Mensaje enviado correctamente
                </Text>
                )}
            </div>
            </form>

            <div style={{ 
            marginTop: '60px',
            textAlign: 'center'
            }}>
            <Text size="small" color="#666">
                También puedes escribirme directamente a:{' '}
                <a 
                href="mailto:ba.moyav@duocuc.cl" 
                style={{ 
                    color: '#fff', 
                    textDecoration: 'underline' 
                }}
                >
                ba.moyav@duocuc.cl
                </a>
            </Text>
            </div>
        </div>
        </div>
    );
}