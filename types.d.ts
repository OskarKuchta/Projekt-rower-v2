type Children = {
    children: React.ReactNode;
}

type NavLink = {
    title: string;
    href: string;
    onClick?: () => void;
}

type MobileLinkVars = {
    initial: {
        y: number | string;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
    open: {
        y: number;
        transition: {
            ease: [number, number, number, number];
            duration: number;
        };
    };
};
type MenuVars = {
    initial: {
        scaleY: number;
    };
    animate: {
        scaleY: number;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
    exit: {
        scaleY: number;
        transition: {
            delay: number;
            duration: number;
            ease: [number, number, number, number];
        };
    };
};

type ContainerVars = {
    initial: {
        transition: {
            staggerChildren: number;
            staggerDirection: number;
        };
    };
    open: {
        transition: {
            delayChildren: number;
            staggerChildren: number;
            staggerDirection: number;
        };
    };
};