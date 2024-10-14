import { Suspense } from "react";

const SharedLayout = ({ children }) => {
    return <Suspense fallback={null}>{children}</Suspense>;
};

export default SharedLayout;
