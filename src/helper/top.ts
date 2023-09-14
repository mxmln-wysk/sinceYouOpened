import NAV_ITEMS from "../data/navItems";

const top = () => {
    const currentPageDoc = document.querySelector('.pageContainer'+ NAV_ITEMS.indexOf(location.pathname.slice(1)));
    currentPageDoc && currentPageDoc.scrollTo({
        top: 100,
        behavior: 'smooth'
    });
}

export default top;