import content from '@/data/content.json';
import { ProjectDetail } from './ProjectDetail';
import { Album } from '@/lib/data';

export async function generateStaticParams() {
  return content.discography.map((album) => ({
    slug: album.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = (content.discography as Album[]).find((a) => a.slug === slug);

  if (!album) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail album={album} />;
}
