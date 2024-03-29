import type { Page } from '@khulnasoft/cms';
import { RichText } from '../RichText';

type ContentTypeProps = Page['layout'][0];
export const Content = (props: ContentTypeProps) => {
    if (props.blockType !== 'content') return null;
    const { content } = props;

    return (
        <div className="content-wrap">
            <RichText content={content} />
        </div>
    );
};
