import ProjectProfile from "./ProjectProfile";

interface Props {
    params: {
        id: string;
    };
}

const Page = async ({ params }: Props) => {
    const { id } = await params;
    return <ProjectProfile id={id} />;
}

export default Page;