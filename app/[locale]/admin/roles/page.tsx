import AdminGuard from "@/components/features/admin/AdminGuard"
import RoleManager from "@/components/features/admin/roles/RoleManager"

const page = () => {
    return (
        <AdminGuard>
            <RoleManager />
        </AdminGuard>
    )
}

export default page