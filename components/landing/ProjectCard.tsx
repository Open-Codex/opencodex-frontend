import { Heart, ThumbsUp, User } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from 'next-intl';

const ProjectCard = () => {
    const t = useTranslations('LandingPage');

    return (
        <section className="px-6 py-20 bg-[#0d1117] text-center">
            <h3 className="text-2xl font-semibold mb-2">{t('headline3')}</h3>
            <p className="text-white/70 mb-10">{t('headline4')}</p>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                {[1, 2, 3].map((id) => (
                    <div key={id} className="bg-[#161b22] p-6 rounded-xl border border-white/10 text-left">
                        <div className="flex justify-between items-center mb-4">
                            <span className="flex justify-between gap-2 text-xs text-white/50">
                                <User />
                                Chonka Perez
                            </span>
                            <div className="flex justify-between gap-3 text-xs text-white/50">
                                <span className="flex justify-between gap-1">
                                    <User className="w-5 h-5" />
                                    2
                                </span>
                                <span className="flex justify-between gap-1">
                                    <ThumbsUp className="w-5 h-5" />
                                    15
                                </span>
                                <span className="flex justify-between gap-1">
                                    <Heart className="w-5 h-5" />
                                    4
                                </span>
                            </div>
                        </div>
                        <h4 className="font-semibold mb-1">Chonka Bot RP</h4>
                        <p className="text-sm text-white/70 mb-3">
                            Una aplicación de gestión de tareas para organizar la entrada y salida de empleados en RP.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-[#2a2a3d] px-2 py-1 rounded">Discord.js</span>
                            <span className="text-xs bg-[#2a2a3d] px-2 py-1 rounded">Python</span>
                            <span className="text-xs bg-[#2a2a3d] px-2 py-1 rounded">Machine Learning</span>
                        </div>
                        <Button variant="link" className="text-[#A855F7] px-0">{t('button_view_project')} →</Button>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <Button className="bg-[#A855F7] hover:bg-[#9333ea]">{t('button_view_all_project')}</Button>
            </div>
        </section>
    )
}

export default ProjectCard