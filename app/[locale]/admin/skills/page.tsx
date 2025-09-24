import AdminGuard from "@/components/features/admin/AdminGuard"
import SkillManager from "@/components/features/admin/skills/SkillManager"

const page = () => {
    return (
        <AdminGuard>
            <SkillManager />
        </AdminGuard>
    )
}

export default page