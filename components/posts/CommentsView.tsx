import Giscus from "@giscus/react";
import styled from "styled-components";

const GiscusView = styled.div`
    padding-top: 3rem;
`;

const CommentsView = () => {
    return (
        <GiscusView>
            <Giscus
                id="comments"
                repo="raaees/app"
                repoId="MDEwOlJlcG9zaXRvcnkzOTM0MDIwNTY="
                category="Announcements"
                categoryId="DIC_kwDOF3LWyM4B-k-m"
                mapping="title"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="https://raaees.com/giscus.css"
                lang="en"
                loading="lazy"
            />
        </GiscusView>
    );
};

export default CommentsView;
