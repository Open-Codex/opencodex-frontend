'use client'

const ContactSection = () => (
    <div className="bg-[#161b22] rounded-md p-4">
        <h2 className="font-semibold mb-2">Contacto</h2>
        <p className="text-gray-300 text-sm mb-4">
            Puedes contactarme a través de mis redes sociales o por correo electrónico.
        </p>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <span className="text-gray-400">Email:</span>
                <span>usuario@ejemplo.com</span>
            </div>
        </div>
    </div>
);

export default ContactSection;