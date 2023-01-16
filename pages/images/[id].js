import Layout from '../../components/layout';
import { getGalleries } from '../../utils/galleries';
import SimpleGallery from '../../components/gallery';
import TextPage from '../../components/text-page';

export async function getStaticProps({ params }) {
    const galleries = await getGalleries();
    let gallery = galleries.find(gallery => gallery._id == params.id);
    return {
        props: {
            gallery
        }
    };
}

export async function getStaticPaths() {
    const galleries = await getGalleries();
    let paths = []
    galleries.forEach(gallery => {
        paths.push({
            params: {
                id: gallery["_id"]
            }
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export default function Gallery({ gallery }) {
    return (
        <Layout currentPage="Images" title={gallery.title}>
            <TextPage title={gallery.title} content={gallery.description}>
                <SimpleGallery images={gallery.images} />
            </TextPage>
        </Layout>
    );
}
