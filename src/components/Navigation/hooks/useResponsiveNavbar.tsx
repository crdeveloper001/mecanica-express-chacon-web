import React, { useState } from 'react';

const useResponsiveNavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [currentTitle, setCurrentTitle] = useState<string>('Inicio - Mecánica Express Chacón');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleLinkClick = (title: string) => {
        setCurrentTitle(title);

        handleCloseNavMenu();
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return {
        anchorElNav,
        anchorElUser,
        currentTitle,
        drawerOpen,
        toggleDrawer,
        handleLinkClick,
        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu
    };
};

export default useResponsiveNavBar;
