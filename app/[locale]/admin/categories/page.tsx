import AdminGuard from "@/components/features/admin/AdminGuard"
import CategoryManager from "@/components/features/admin/categories/CategoryManager"

const page = () => {
    return (
        <AdminGuard>
            <CategoryManager />
        </AdminGuard>
    )
}

export default page