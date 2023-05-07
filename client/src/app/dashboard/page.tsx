import Card from '@/components/Card';
import RenderModal from '@/components/Modals/RenderModal';

import { projectStore } from '@/stores/projectStore';

export const metadata = {
  title: 'Dashboard'
};

export default async function Dashboard() {
  const projects = await projectStore.getState().getUserProjects();

  return (
    <>
      <RenderModal />
      <section className={`mt-10 grid grid-cols-auto-fit gap-7`}>
        {projects?.map(
          ({
            id,
            title,
            type,
            slug,
            thumbnail,
            linkWebsite,
            linkRepository,
            description,
            userId
          }) => (
            <Card
              key={id}
              id={id}
              title={title}
              type={type}
              slug={slug}
              thumbnail={thumbnail}
              linkWebsite={linkWebsite}
              linkRepository={linkRepository}
              description={description}
              userId={userId}
            />
          )
        )}
      </section>
    </>
  );
}
